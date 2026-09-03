# documentation
keep AGENTS.md upto date : the first command should be the bash script to start the web server
In the root folder I have cleaned up the file names ie removed the word "reconstructed" and version numbers

# css changes
The css for the table element is incorrect. The original might be http://learnstones.com/wpls/wp-content/themes/learnstones_1/style.css?ver=4.4.33 
try the following:
/* to increase the size of html tables */
.entry-content table,
.comment-content table {
	border: 1px solid #963;
	font-size: 24px;
	width:50%;
	
The <code> css should be inside a brown box with left wall thicker.
css comes from http://learnstones.com/wpls/wp-content/themes/learnstones_1/style.css?ver=4.4.33
eg.
    font-style: normal;
    border-width: 1px;
    border-left: 10px;
    padding: 5px;
    border-style: solid;
    border-color: #963;

# images
Images need to be pulled onto the new server /images seems like a good place


All the other courses yet to be converted are in /md backup. Some are in .md, others are in html. Please convert them into the 2 file format (md + html) 
# Index
The index page should have a list of all the html pages in the root folder. There should be sub headings:
## Web
- Html Basics
- CSS Style
- Internal Links

## Programming
- Python
- Pylogo
- OOP Python
- Python Lists
- Small Basics
- Pong Small Basic

## Turtle Graphics
- Logo
- Some More Logo
- Christmas Logo
- Pylogo
- Vb String Indexing

## Video Games
- Pygame
- Pong Small Basic
- Gamemaker2
- jsgamer

## Robotics
- Vex
- GoPiGo3
- Distance

## Hardware
- Little Man Computer

## Spreadsheets
- Spreadsheets 1
- Spreadsheets 2
- Spreadsheets 3


Short URLs. Help me plan a solution for short URLS eg. any unambiguous string eg. "root-url/ht" or "root-url/html" should open the html-basic.html file. Would it be possible to not show the .html extension? is that a nginx thing?
