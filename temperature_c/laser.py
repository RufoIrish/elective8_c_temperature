import paho.mqtt.client as mqtt
import RPi.GPIO as GPIO
import time

LedPin = 11 
def setup():
	GPIO.setmode(GPIO.BOARD)       # Numbers GPIOs by physical location
	GPIO.setup(LedPin, GPIO.OUT)   # Set LedPin's mode is output
	GPIO.output(LedPin, GPIO.HIGH)
setup()
def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))

def on_message(client, userdata, msg):
    get = str(msg.payload)[2:4]
    if (get == "of"):
    	print("laser is Off")
    	GPIO.output(LedPin, GPIO.LOW)
    else:
    	print("laser is On")
    	GPIO.output(LedPin, GPIO.HIGH)

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect("test.mosquitto.org", 1883, 60) 
client.subscribe("elective/laser") 
client.loop_forever()
#!/usr/bin/env python