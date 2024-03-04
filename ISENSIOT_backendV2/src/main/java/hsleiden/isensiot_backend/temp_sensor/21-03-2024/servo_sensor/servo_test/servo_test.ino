#include <Servo.h>

Servo myservo;
int pos = 0;
int sensorPin = A0;
int sensorValue;

void setup() {
  myservo.attach(6);

  Serial.begin(9600);
  pinMode (INPUT, sensorPin);
}
void loop() {
  myservo.write(90);
  for (pos = 0; pos <= 50; pos++) {
    sensorValue = analogRead(sensorPin);
    Serial.println(sensorValue);
    delay(5);
  }

  delay(500);

  myservo.write(0);
  for (pos = 0; pos <= 50; pos++) {
    sensorValue = analogRead(sensorPin);
    Serial.println(sensorValue);
        delay(5);
  }

}
