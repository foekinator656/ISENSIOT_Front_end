import requests
import serial

URL = "http://192.168.198.142:8080/api/v1/auth/login"
BODY = {"email": "appeltaart@gmail.com", "password": "appeltaart"}

Headers = {"Keep-Alive":"False" }

r = requests.get(url=URL, json=BODY)
data = r.json()

JWT = data["token"]
Headers = {"Authorization": "Bearer "+JWT, "Keep-Alive":"False"}

URL = "http://192.168.198.142:8080/api/v1/batch/5"
r = requests.post(url=URL, json=BODY, headers=Headers)
data = r.json()
URL = "http://192.168.198.142:8080/api/v1/timerecording/"+str(data)+"/"

ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
ser.reset_input_buffer()
time = 0
while True:
    if ser.in_waiting > 0:
        line = ser.readline().decode('utf-8').rstrip()
        print(line)
        time= time+1
        print(time)
        BODY = {"temperature": float(line), "colour": "Yellow", "viscosity": 44}
        requests.post(url=URL+str(time), json=BODY, headers=Headers, timeout=5)

            