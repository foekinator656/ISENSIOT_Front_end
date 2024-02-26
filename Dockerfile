FROM openjdk:23-slim-bullseye
ARG JAR_FILE=*.jar
COPY ${JAR_FILE} application.jar
ENTRYPOINT ["java", "-jar", "application.jar"]
EXPOSE 8080


FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install --force
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN pwd
RUN ls
RUN npm run build
FROM nginx:stable
# COPY default.conf /etc/nginx/conf.d
COPY --from=build /app/dist/isensiot-front-end/browser/ /usr/share/nginx/html
EXPOSE 80
