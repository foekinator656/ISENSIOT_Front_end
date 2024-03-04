import websockets
import asyncio
import time

async def handler(websocket):
    try:
        while True:
            message = await websocket.recv()
            await websocket.send(message)
    except Exception:
        return


async def main():    
    async with websockets.serve (handler, "" , 1234, origins= None
                                 ):
        await asyncio.Future();


if __name__ == "__main__" :
    asyncio.run(main())