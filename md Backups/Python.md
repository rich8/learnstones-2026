# Intro
Python is predicted to be the most popular programming language in the world by 2013. It has the most simple syntax, but watch out for:

- Capital letters matter so do colons :
- 'Equal to' is ==
- Spaces at the beginning of the line matter (indentation)

Also if there is also the python 2 vs. python 3 problem. We say "Use 3", problem solved

### More information

[Why Python?](https://www.google.co.uk/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=why%20python)

* * *


# Getting Started

To run Python in a browser

# [Click Here](https://trinket.io/python/e153238cc1)

- Or, on the JIS network <a href="http://learnstones.com/wpls/wp-content/uploads/python-folder.png" rel="attachment wp-att-329"><img src="http://learnstones.com/wpls/wp-content/uploads/python-folder-300x87.png" alt="python-folder" width="300" height="87" class="alignnone size-medium wp-image-329" /></a>
- Or at home, if you prefer you can download and install it. We recommend python 3.4 [Python.org/downloads](https://www.python.org/downloads/) But you should be OK with a later version.

# Hello World

    print("Hello World")

Then Run your code 
Great! you have written your first python command. You have outputted a string of characters to the Screen.


* * *


# User Input

    person = input("what is your name? ")
    print ("hi " + person)

### Theory

Hey you have already

- created variable called person
- accepted input from the user
- assigned the user input to the variable person

* * *


# Conditional Love

or Insult If

    if person == "me":
        print("you are awesome")

### Theory

Hey you have

*   used an if statement (a conditional)
*   used the comparison operator == (equal to). This is different to the assignment operator = (take the value of)

* * *

# else:

    if person == "me":
        print("you are awesome")
    else:
        print("buzz off " + person)

### Key Words

*   you have joined a message string `"buzz off"` with a string `person` this is called `to concatenate`
*   the concatenation operator in python is +

* * *

# elif

    if person == "me":
        print("you are awesome")
    elif person == "dave"
        print("Dave is a dork")
    else:
        print("buzz off " + person)

* * *

# AND Teenager

### Task

Your task is to tell people if they are teenagers. Use the following code to help you.

    age = input("how old are you? ")
    age = int(age)
    if age > 18 and age <130:
        print ("you are middle aged ")

### Theory: Boolean Logic

You will need to use the Boolean operator AND (always in lower case in python). Other operators are OR, AND NOT

*   Note that python assumes the input is a string. `int(a_string)` turns a string into an integer (whole number)

* * *

# OR Friends

Using `or` is similar to using `Elif`

### Task

Send a different insult to you friends

    if person == "John" or person == "Paul" or person == "Ringo":
        print ("hey you could be a Beetle ")

### Theory

You have used

*   the Boolean operator OR (lower case in python)

* * *

# AI Chat Bot

Read about this AI (Artificial Intelligence) [Receptionist.](http://www.wired.co.uk/article/robot-receptionist)
Build your own AI Chatbot. You can search the web to find online examples to give you ideas.

## The Turing Test

If a human being cannot tell the difference between a computer and a real person it has passed the Turing Test.
[More information](https://www.google.co.uk/search?q=turing+test)

Submit your python Code here: 
[input type="textarea" name ="ChatBot" ]


------------
Friend Index
============

Create your own friend bot use a score

    score = 0

    score = score + 1      'bot likes person 
    score = score - 1      'bot doesn't like person

Use OR to help you give more choices

    if person == "kieran" or person == "harry" or person == "mr d":
      score = score + 1
    

At the end 

    if score > 2 :
      print("Actually I love you!")
    else:
      'add more message
    


###Enter your code here (only if you name appears in the top right of your screen)

Test your code with a test buddy first

[input type="textarea" name="friendbot" cols=80 rows=20]

---------------
Catching Errors
===============

##Whats the problem?
![](http://learnstones.com/wpls/wp-content/uploads/lowercaseinput1.png)


    if team = "Chelsea":
    
- can you spot the problem here?



##Solution 1

    if team == "Chelsea" or team == "chelsea":

##Solution 2
    
    team = team.lower()
    'and
    team = team.upper()

###Test your code on 2 people first 

Then submit here

[input type="textarea" name="withBoolean" cols=80 rows=20]


* * *
# Loop the loop

Computers are very good at repeating things

    print("hey I can count")
    for x in range (10):
        print(x)

### Task

Print the 2 times table up to 24

### Looking Deeper

*   [The Range() function](https://docs.python.org/2/tutorial/controlflow.html#the-range-function)
*   [Looping extras](https://docs.python.org/2/tutorial/controlflow.html#break-and-continue-statements-and-else-clauses-on-loops)

* * *

# While

While loops keep going until a condition is met. They can go on forever (but the one below doesn't)

    x = 90
    while x < 100:
      print(x)
      x = x + 1

*   create x and give it a value
*   while starts the loop
*   print x
*   make x bigger (increment x)

* * *

# Subs

Subs make code easier to read and understand. They also help us reuse code.

    def squ:
    #sorry I haven't finished this lesson yet !!

* * *

# Cheat Sheet

### Print this for future reference

![](http://learnstones.com/wpls/wp-content/uploads/PythonCheetSheet.png)