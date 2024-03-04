import requests

URL = "http://192.168.134.142:8080/api/v1/auth/login"
BODY = {"email": "apppeltaart@gmail.com", "password": "appeltaart"}


r = requests.get(url=URL, json=BODY)
data = r.json()


JWT = data["token"]
Headers = {"Authorization": "Bearer "+JWT}
URL = "http://192.168.1.64:8080/api/v1/batch/991/992"
BODY = {"temperature": 44, "colour": "Yellow", "viscosity": 44}
r = requests.post(url=URL, json=BODY, headers=Headers)