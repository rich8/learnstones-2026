OO Python
=========

- Objects (Nouns) have Properties and Methods (Adjectives, Verbs). 
- Property = attribute = field
- Method = getter or setter
- Dot notation (The power of)


One of the principal advantages of object-oriented programming techniques over procedural programming techniques is that they enable programmers to create modules that do not need to be changed when a new type of object is added. A programmer can simply create a new object that inherits many of its features from existing objects. This makes object-oriented programs easier to modify.
https://www.webopedia.com/TERM/O/object_oriented_programming_OOP.html


-------------------
Class & Constructor
===================

- Class is the blueprint
- Object is the house. An Object is an instance of class


More Examples
- In Frogger. Car is the Class and will appear many times as the enemy

https://www.tutorialspoint.com/python/python_classes_objects.htm


-----------
Inheritance
===========

- An object "is a " (another) object

Examples

- Employee, Manager and Developer 
- Person, Student, Teacher
- Mammal, Dog.bark, Cat and Duck.quack

-----------
Composition
===========

- An object "Contains", "Is made up of" another object. Inversely: "belongs to"
- Uses assignment or append to add an object to another's property in the constructor 
   or via a "build" method in the constructor
- one object is instantiated inside another object
https://youtu.be/lhiH-6ygGl8

Examples
- Employee and Salary
- Card games, Card and Deck or Hand
- Book and Chapter

-------------
Encapsulation / Public / Private / Protection
=============

This is a way restricting access or protecting an objects data


---
Misc
===

- Abstract Class (using import ABC)
- Aggregation "has-a" (creating instance then storing inside another object instance)
- Association??