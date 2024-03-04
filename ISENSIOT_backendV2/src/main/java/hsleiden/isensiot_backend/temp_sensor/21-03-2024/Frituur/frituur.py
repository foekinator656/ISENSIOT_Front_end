URL = "http://192.168.198.142:8080/api/v1" 

import socket
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("8.8.8.8", 80))
print(s.getsockname()[0])


import requests
import serial

BODY = {"email": "appeltaart@gmail.com", "password": "appeltaart"}

Headers = {"Keep-Alive":"False" }

r = requests.get(url=URL+"/auth/login", json=BODY)
data = r.json()

JWT = data["token"]
Headers = {"Authorization": "Bearer "+JWT, "Keep-Alive":"False"}

BODY = s.getsockname()[0]

r = requests.post(url=URL+"/frituur/1", json=BODY, headers=Headers)
s.close()
