import cv2
try:
    cam = cv2.VideoCapture(0)
except Exception:
    cam = cv2.VideoCapture(1)
    
 

while True:
	ret, image = cam.read()
	cv2.imshow('Imagetest',image)
	k = cv2.waitKey(1)
	if k != 0:
		break
cv2.imwrite('/home/pi/testimage.jpg', image)
cam.release()
cv2.destroyAllWindows()