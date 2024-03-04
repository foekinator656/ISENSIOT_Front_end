import serial
import time
ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)

while True:
    ser.write(b"hello small guy")
    line = ser.readline().decode('utf-8').rstrip()
    print(line)
    time.sleep(3)