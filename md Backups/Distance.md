Distance Sensor
===============

- most important for orienting a robot in relation to walls and obstructions so it can work out where to go
- This Learnstones lesson covers distance sensor algorithms used with a 2 wheel robot with a trailing skid. 
- 4-Wheel robots will be slightly different as not only they can't spin, their basic turn is much wider than the 2-wheeler.

Stop Book
=========
[embed]http://learnstones.com/media/dra/robotics/distance/StopBook.mp4[/embed]

In this first exercise we explore a 3 Region algorithm. The robot will keep around 10 cm from a book or wall. 

- How responsive is the robot when you move the book?
- How quickly does the robot settle into the neutral/stopping region?
- How can you make it settle more quickly? 

###THREE REGIONS ALGORITHM

    Too far     -> forward()
    Just right  -> stop()
    Too close   -> backward()
    
You will need to use the advanced bloxter to be able to use the ELSE IF Statements. Click on the settings wheel in the IF block and drag the ELSE IF and ELSE statements across.


![](http://learnstones.com/wpls/wp-content/uploads/StopBookSlow.png)

[In blocks and in python]

This algorithm can also be written in python. On the next page we will 

----
Bloxter to Python
===
By clicking on the >> arrows to the right of the Bloxter screen you can see the python code that the blocks create.
You cannot edit the code here, but you can copy the code and paste it into a text editor or email it to others.

- Easier to do more complex selection or iteration
- Easier to save an share code
- Jupyter notebook interface takes some practice

![](https://i.ytimg.com/vi/N2XMofu2VeQ/hqdefault.jpg)

    # initial setup
    import easygopigo3 as easy
    import time
    gpg = easy.EasyGoPiGo3()

    # note bloxter uses my_Distance_PortI2C. I think "dist_sensor" is a better name
    dist_sensor = gpg.init_distance_sensor('I2C') 
    time.sleep(0.1) #to give the program time to read the sensor

    # algorithm
    gpg.set_speed(200)
    while True:
        dist = dist_sensor.read() # new reading each loop
        if dist > 12:
    	    gpg.forward()
        elif dist > 8:
            gpg.stop()
        elif dist <= 8:
            gpg.backward()
        time.sleep(0.05) # time to read and react



------------------
Obstacle Avoidance
==================

    if dist > 12:
    	gpg.forward()
    else:
    	gpg.back()
		time.sleep(1)
		gpg.right()
		time.sleep(1)

-----------
Turning GPG
===========

To develop more complex wall following algorithms it is necessary to understand the movements of the 2 wheeled GoPiGo3 in more detail.

Continuous moves (need to use delay)
------------------------------------

    gpg.forward()	# starts the robot moving forward. 
    				# Both motors moving forward
    time.sleep(1)	# Wait 1 second so the robot continues to move forward for 1 sec
    gpg.stop()		# Use the stop command to pause the robot
    time.sleep(1)	# 1 Second delay
    gpg.right() 	# right motor stop left motor forward
    				# Centre of Rotation is the middle of the right wheel 
                                (looking from above)
    
    gpg.left()		# left motor stop right motor forward
					# Centre of Roation is the middle of the left wheel
    gpg.backward()	# both motors backward

The code above would make the robot move forward for 1 second then it would move backward forever (until it hits something)
Because there is no delay after the right() and left() commands, they will only run for a split second before the next command is triggered. So these continuous moves usually need to have a delay after them

    gpg.spin_right
    gpg.spin_left

Definite Moves (don't need a delay)
-----------------------------------

The robot will complete each move before going onto the next command

	gpg.turn_degrees(90)	# Clockwise spin (spin right)
							# Left wheel goes forward, Right wheel goes backward at the same speed
							# Centre of rotation is C half way between the two wheels
							# Robot will turn until it completes 90 deg, then next command is triggered
				
	gpg.turn_degrees(-180)  		    # Anticlockwise spin(spin left)
						    # Centre of rotation is C half way between the two wheels
						    # Robot will stop when it has turned 180 deg
				
	drive_cm(5) 		#Robot moves 5 cm forward
	orbit
	
Native command
	
	#Native command		#Library Function
	s = 80
	gpg.steer(s , s)	# forward()
	gpg.steer(s , 0)	# left()
	gpg.steer(0 , s)	# right()
	gpg.steer(s ,-s) 	# spin_left()
	gpg.steer(-s, s)	# spin_right()
	
[GoPiGo3 Documentation](https://readthedocs.org/projects/gopigo3/downloads/pdf/latest/)
	
-------------
Wall Follower
=============

A wall following robot uses a side sensor to keep a target distance (t) from the wall. It can be programmed to follow with the wall on the left or the right.

Print out the following page and cut out Car1, Car2 and Car3. 

[![](http://learnstones.com/wpls/wp-content/uploads/Dist_Cars.png)](http://learnstones.com/media/dra/robotics/distance/Cars.pdf)


Car1
----
Write instructions in pen either side of the target distance (t) to say which way the car should turn to keep it a constant distance from the wall. When will the car move forward?

Car2
----
Do you prefer car 2. Can you explain why 

Car3
----
This is more tricky. Can you work out why Car3 is better than Car1?

----
Wall Simulator
======

Click the link to play with the [Scratch Wall Simulator](https://scratch.mit.edu/projects/309325831/editor).

- Add extra sensors by duplicating the sensor sprite
- Add colour to the pen to make the turns easier to see. red=left green=right
- Add complex wall shapes to make a maze runner


----------------
Sensor Placement
================

A forward angled side-sensor is less prone to an inward spin. An angle of 20 - 45 deg is recommended. If you are unsure why this is necessary, you need to experiment with Car 1 and Car 3 on the previous page. Its really worth cutting them out and marking them up to get a feel for this algorithm.

---------
2 Sensors
=========

- Parallel facing sensors are good because then d1-d2 is constant no matter how large (d1+d2)/2
- Diverging sensors are also good
- Converging sensors may induce inwards spin

Using the DI_sensors Library
-----
The easygopigo3 library does not support multiple sensors. So in addition to easygopigo3 library (which is still needed for the movement) you need to import di_sensors.

    import time
    from di_sensors.distance_sensor import DistanceSensor

    # establish communication with the DistanceSensor
    fs = DistanceSensor(bus = "GPG3_AD1")
    ls = DistanceSensor(bus = "RPI_1")

    # we will use the simpler and slower "single" mode
    # continous mode is faster but is more error prone
    while True:
        # read the distance in millimeters
        front_distance = fs.read_range_single()
        left_distance = ls.read_range_single()
        print("front_distance in mm", front_distance)
        print("left_distance in mm", left_distance)
        time.sleep(0.5) # to stop filling your screen too quickly
		

### DI Sensor Library
[DI Sensors Documentation](https://di-sensors.readthedocs.io/en/latest/api-basic.html#easydistancesensor)

		
##Also See
[From the Web](http://students.iitk.ac.in/robocon/docs/doku.php?id=robocon16:programming:wall_following)

-------------
Speed Control
=============

    # Single Sensor Wall following
    # with variable speed
    while (dist > inner_stop):
        dist = dsense.read()
            if dist < target - margin:
            gpg.right()
            speed = speed - 10
        elif dist > target + margin:
            gpg.left()
            speed = speed -10 
        else:
            gpg.forward()
            speed = speed +10
            time.sleep(delay *2)
        time.sleep(delay)
        gpg.set_speed(speed)
        if speed % 50 == 0: #print every 50th speed value.
            print(speed)    #if you print each time it slows down the robot
    gpg.stop()

----
Hypothesies
===

- gradual curves beat right() then forward(): didn't work with single sensor.
- monitoring is free, sending commands slows the bot?

Notes
====

3 Sensor Wall follower
---------------------
[This robot](https://youtu.be/GJtOoDszzSY?t=236) can follow wall on left or right (but not at the same time). The video linked above is rather long. Pause at about 4 mins and view fullscreen to see the code.


Maze with wall follower
----
[embed]https://youtu.be/SFfYNPrc6c4?t=74[/embed]