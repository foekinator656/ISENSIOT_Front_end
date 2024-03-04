import asyncio
import time
from websockets.sync.client import connect

def hello():
    while True:
        with connect("ws://localhost:1234") as websocket:
            websocket.send("Hello world!")
            message = websocket.recv()
            print(f"Received: {message} ")
            websocket.close()

hello()