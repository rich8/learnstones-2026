Getting Started
===============

![](http://learnstones.com/wpls/wp-content/uploads/SmallBasicOpen1.png)




##Help and IDE


Just start typing to get help or to use the drop down language guide from the IDE : Integrated Development Environment

![](http://learnstones.com/wpls/wp-content/uploads/SmallBasicHelp.png) ![](http://learnstones.com/wpls/wp-content/uploads/SmallBasicIDE.png)

-----------
Hello World
===========

Type the following into Small Basic and press Run

    TextWindow.Writeline("Hello world!")

- the computer wrote your message in the Text Window
- the message "in the quotes" is called a `string`

###Extension

- Change the message `string`
- Create more message `string`s

----------
User Input 
==========

    TextWindow.WriteLine("Enter your Name: ")
    person = TextWindow.Read()
    TextWindow.WriteLine("Hello " + person)

###Theory
Hey you have already

- created a `variable` called person
- accepted an input `string` from the user
- Used `Concatenate` to join a `string` with a `variable`

###Question
What is the difference between "person" and person? 

[input type="textarea" name="stringvariable" rows="2"]

----------------
If Statements
================

`If` gives the `intelligence` to AI

Add these lines to your previous User Input code, then change the "My name" string to your actual name

    If person = "your_name" Then
      TextWindow.WriteLine(person +  " you are awesome")
    EndIf

- the `If` statement creates a `boolean` choice. Awesome Person? Yes/No


###Extension If

    If (Clock.Hour < 12) Then
      TextWindow.WriteLine("Good Morning World")
    EndIf

###Need help?
Chapter 4 (p.15) of the Small Basic Manual
![](http://learnstones.com/wpls/wp-content/uploads/SmallBasicOpen1.png)

###Question: Every "If" statement also needs ... [input type="text" name="IfNeedsAn" rows="2"]


-----
Else
=====

    If person = "my name" Then
      TextWindow.WriteLine(person +  " you are awesome")
    Else
      TextWindow.WriteLine("Buzz Off!")
    EndIf

###Theory

- You used If with Else to show 2 way `boolean` choices

### More Boolean Choices

    If Clock.Hour < 12 Then
      TextWindow.WriteLine("Good Morning")
    ElseIf Clock.Hour < 16 Then
      TextWindow.WriteLine("Good Afternoon")
    ElseIf Clock.Hour < 20 Then
      TextWindow.WriteLine("Good Evening")
    EndIf

ElseIf is better than just using an if because you don't have to put lots of `EndIf` s


----------
Friend Bot
==========

[Link to robot receptionist](http://www.wired.co.uk/news/archive/2016-01/04/robot-receptionist)


###Task
Create your own friend bot use a score

    score = 0
    'bot likes person
    score = score + 1  
    'bot doesn't like person
    score = score -1

Use OR to help you give more choices

    If person = "kieran" or person = "harry" or person = "mr d" Then
      score = score + 1
    Endif

At the end 

    If score > 2 Then
      TextWindow.Writeline("Actually I love you!")
    Else
      'add more message
    EndIf


###Enter your code here (only if you name appears in the top right of your screen)

Test your code with a test buddy first

[input type="textarea" name="friendbot" cols=80 rows=20]

---------------
Catching Errors
===============

##Whats the problem?
![](http://learnstones.com/wpls/wp-content/uploads/lowercaseinput1.png)


    If team = "Chelsea" then
    
- can you spot the problem here?



##Solution 1

    If team = "Chelsea" or team = "chelsea"

##Solution 2
    
    team = text.ConvertToLowerCase(team)
    'and
    team = text.ConvertToUpperCase(team)  

###Test your code on 2 people first 

Then submit here

[input type="textarea" name="withBoolean" cols=80 rows=20]


---------
Adventure Game Plan
=========

[![](http://learnstones.com/wpls/wp-content/uploads/AdventureGamePlan-300x201.png)](http://learnstones.com/wpls/wp-content/uploads/AdventureGamePlan.png)

###Produce a plan in powerpoint for your own adventure game. 

- Use N, S, E, W directions
- tell the user if you have Y / N questions

---------
Subs Routines
=========

Subs are used to organise your code into logical chunks. Also Called:

- proceedures
- Functions
- Routines

Go to the folder 
Year 8 SOW\8.3 Small basic\Small Basic for Beginners\Small Basic 1.9 Subs.mp4
<a href="file:///W:/0%20----------SUBJECT%20RESOURCES%20---------/0%20-%20ICT/00%20-%20All%20years%20-%20Student%20Resources/Year%208%20SOW/8.3%20Small%20basic/Small%20Basic%20for%20Beginners%20Videos/Small%20Basic%201.9%20Subs.mp4" >video link</a>

![](http://learnstones.com/wpls/wp-content/uploads/AdventureGame12.png)
![](http://learnstones.com/wpls/wp-content/uploads/AdventureGame3.png)

###Submit Your Adventure Game Code:
[input type="textarea" name="AdventureGame" cols=80 rows=10]

IE only
===
- In Internet Explorer. Allow Silverlight to "Run this time" 
- This doesn't work in Chrome. 

<object id='sbapp' data='data:application/x-silverlight-2,' type='application/x-silverlight-2' width='640' height='480'>
    <param name='source' value='http://smallbasic.com/program/ClientBin/SBWeb.xap'/>
    <param name='onError' value='onSilverlightError' />
    <param name='background' value='white' />
    <param name='minRuntimeVersion' value='3.0.40624.0' />
    <param name='autoUpgrade' value='true' />
    <param name='initParams' value='programId=DBL010' />
</object>