<h1>Logo</h1>
Logo is the best and simplest way to start real programming.
<ul>
	<li>Text based ... start with a blank page</li>
	<li>Visual output</li>
	<li>fun</li>
</ul>
<img src="/media/dra/computing/logo-programming/logotitle.png" alt="" />
<h3>Traffic Light Check</h3>
<ul>
	<li>Click the green button on each page if you understand</li>
	<li>Click Amber if you are not sure and would like to come back to check</li>
	<li>Click Red if you are stuck</li>
</ul>
Note for Teachers - Navigation is roughly organised by technique (repeat/subs/abstraction) rather than outcome (SQU, TRI, PENT, CIRC HOUSE, STREET, FOREST)

<hr />

<h1>Getting Started</h1>
The link below will open Logo in a new tab/window. You can switch back and forth between the two.
<h2><a href="http://media.learnstones.com/jslogo/" target="_blank">Click Here - to open logo in new tab</a></h2>
Remember to keep this window open. You can always open it from this page if you accidently close it.

type the following in the box at the bottom
<blockquote><code>forward 100</code></blockquote>
Click Run Then try
<blockquote><code>right 90</code></blockquote>
Don't forget to click run
<h3>Hint</h3>
You can use the short commands <code>fd 100</code> and <code>rt 90</code>
<h3>Task: draw a square</h3>
Then try a triangle
<h3>Traffic Light Checkpoint</h3>
<ul>
	<li>I am confident in drawing different shapes</li>
</ul>

<hr />

<h1>Repeat</h1>
It gets boring typing all these commands. Using repeat is quicker. Try this command
<blockquote><code>repeat 4 [fd 100 rt 90]</code></blockquote>
<h3>Hint:</h3>
These are square brackets not curly ones!
<h3>Task: draw a pentagon</h3>
Then an octagon, decagon <a href="https://www.dcode.fr/geometric-shapes">(What?)</a>, a 10 sided shape, then finish with a circle.
<h3>Enter your code for any of these shapes</h3>
<ul>
	<li>[input name="shapes-using-repeat" size="40" ]  Pentagon</li>
	<li>[input name="shapes-using-repeat2" size="40" ]  Octagon, Nonogon or Decagon</li>
	<li>[input name="shapes-using-repeat3" size="40" ]  Circle</li>
	<li>[input name="shapes-using-repeat4" size="40" ]  Pattern.  Anything creative</li>
</ul>
<h3>Traffic Light Check</h3>
<ul>
	<li>I have done the task and understand it</li>
</ul>

<hr />

<h1>Sub Routines</h1>
<h3>Which is easier to understand and type?</h3>
<blockquote><code>repeat 4 [fd 100 rt 90]</code></blockquote>
or
<blockquote><code>squ</code></blockquote>
We are going to teach the computer how to SQU. Using the following code
<pre><code>to SQU
  repeat 4 [fd 100 rt 90]
end
</code></pre>
<ol>
	<li>We need a bit more space so open the command window using the black arrow <a href="/media/dra/computing/logo-programming/logointerpretertoggle.png">HELP!!</a></li>
	<li>Enter your code (from above)</li>
	<li>Click Run</li>
	<li>Click on Library (top right) to check that your code has been saved.</li>
	<li>Then to use the SQU command simply type SQU underneath</li>
	<li>The command <code>clearscreen</code> might be useful</li>
</ol>
<h3>Task:</h3>
<ul>
	<li>Create a sub for TRI (a triangle)</li>
	<li>Create at least 2 subs for other shapes we have made PENT, HEX, CIRC etc</li>
</ul>
<h3>Theory</h3>
When programming it's important to give a name to different bits of code. This makes our code easier to read, understand and re-use. SQU or whatever you name your square is easier to read than <code>repeat 4 [fd 100 rt 90]</code> These different bits of code are called sub routines (we could also say: procedure, a function, or just a routine). Choose your names carefully though, if you call your square "BARNEY" that is not going to help you understand your code next lesson.
<h3>Submit</h3>
Copy and paste your most complicated subroutine for the teacher.
<ul>
	<li>[input name="subroutine" ] Press Enter <strong>ONCE ONLY</strong>.... It will arrive</li>
</ul>
<h3>Traffic Light Checkpoint</h3>
<ol>
	<li>I know HOW to use a subroutine</li>
	<li>I know WHY I am creating a subroutine</li>
</ol>

<hr />

<h1>Abstraction</h1>
Now we have named some sub routines we can combine them into new things. It allows us to abstract (hide) the detail. Programmers also call this black boxing or deconstruction. This is one of the most important skill that programmers have: computational thinking.
<h4>Task 1: Create a House using SQU and TRI</h4>
<img src="/media/dra/computing/logo-programming/logohouse1.png" alt="" />

<a href="//media.learnstones.com/dra/computing/logo-programming/logohouse.png">HINT (don't use it unless you Reeelly need it!)</a>
<h4>Task 2: (Harder) Create a street</h4>
<img src="/media/dra/computing/logo-programming/logostreet.png" alt="" />
<h3>Traffic Light Checkpoint</h3>
<ul>
	<li>I have done house and street</li>
	<li>I know that to find the problems in my code I have to 'debug' it (work like a detective)</li>
	<li>I know that programs are split into pieces which are combined together and this is called abstraction</li>
</ul>
<h3>Submit</h3>
Copy and paste all your code for STREET and/or HOUSE. You need to include all the subs eg. house, squ, tri

[submit name="street" ] Press Enter <strong>ONCE ONLY</strong>
<h3>See Also</h3>
<a href="http://en.wikipedia.org/wiki/Abstraction_(computer_science)">Wikipedia - Abstraction</a>

<hr />

<h1>CURV Challenges</h1>
Can you work out how to do the following?
<blockquote>Use the code</blockquote>
<pre><code>To CURV
  repeat 90 [fd 1 rt 1]
END
</code></pre>
<h2>1. Flower</h2>
Start with the head first <img src="/media/dra/computing/logo-programming/logoflower.png" alt="" />
<h2>2. Bird</h2>
Can you create a single bird like the ones used in this Flock picture (We will do the whole flock later)

<img src="/media/dra/computing/logo-programming/logoflock.png" alt="" />
<h3>Submit</h3>
Copy and paste all your code for your CURV Challenge

[input name="arc-challenge" ] Press Enter <strong>ONCE ONLY</strong>

<hr />

<h1>Variables</h1>
We can use variables to vary the size of the square

<img src="/media/dra/computing/logo-programming/logosizevariable.png" alt="" />
<h2>Task: Use your own variables to change the size of shapes (eg. HEX, TRI, SQU)</h2>
<h3>Traffic Light Checkpoint</h3>
<ul>
	<li>I have done the Task on 2 or more shapes. AND I understand why variables are useful</li>
	<li>I have only done square. Why are we doing this?</li>
	<li>I don't understand this</li>
</ul>
<h3>Extra Challange: Use variables in Subroutines like HOUSE that uses TRI and SQU (this is more complicated that you might think)</h3>
<h3>Submit</h3>
Copy and paste your code for your teacher that used a variable

[input name="use-of-variable" ] Press Enter <strong>ONCE ONLY</strong>

<hr />

<h1>Random Variables</h1>
Randomness occurs in nature. Use a random variable is a powerful way for you to easily create a natural effect.
<blockquote><code>random 16</code> will produce a random variable between 0 and 16</blockquote>
for example random colour using the set pen colour command
<blockquote><code>setpc 16</code> where the number is one of 16 predefined colours</blockquote>
<h1>Random Challanges</h1>
<img src="/media/dra/computing/logo-programming/logorandommoves2.png" alt="" />

<img src="/media/dra/computing/logo-programming/logorandommoves.png" alt="" />

<img src="/media/dra/computing/logo-programming/logorandommoves3.png" alt="" />
<h3>Checkpoint</h3>
<ol>
	<li>I have used a random variable creatively to obtain a natural effect</li>
</ol>
<h3>Submit</h3>
Submit any code using a random variable

[input name="random-ness" ] Press Enter <strong>ONCE ONLY</strong>

<hr />

<h1>Creativity: Logo Art</h1>
The best thing about Logo is having fun and doing something that interests you. This way you are sure to be creative.
<h2>What do you want to do today?</h2>
<img src="http://turtleart.org/gallery/images/eyes.png" alt="" />

This image is created in Logo. You can <a href="http://www.artami.co.uk/turtleart/indexdigital.htm">buy a print of it</a> to put on your wall. You can <a href="http://www.blurb.co.uk/b/651323-turtle-art?redirect=true">buy a book</a> of images like this which includes the code used to generate it.
<ul>
	<li><a href="http://turtleart.org/gallery/index.html">turtleart.org</a></li>
	<li>Turtle Art Software <a href="https://turtle.sugarlabs.org/">Turtle Art Online</a></li>
	<li><a href="http://oneeducationtest.androgogic.com.au/olpcresources/manual/2012-turtle-art">online manual</a></li>
</ul>
<h3>Task: Produce your own piece of art</h3>
See if you can get it printed in colour
<h3>Traffic Light Checkpoint</h3>
<ul>
	<li>Green: I produced a jpg and sent it to my teacher</li>
	<li>Amber I'm working on this</li>
	<li>Red : I need help</li>
</ul>

<hr />

<h1>Power of: 15 Word Logo Challanges</h1>
Lots of inspiration here to use tiny amounts of code (15 words max) to produce a big effect

<a href="http://www.mathcats.com/gallery/15wordcontest.html"><img src="http://www.mathcats.com/images/15wordshow/roses.gif" alt="" /></a>

<a href="http://www.mathcats.com/gallery/15wordcontest.html">click image to visit the site</a>
<h3>Traffic Light Checkpoint</h3>
<ul>
	<li>I tried some of the 15-word examples</li>
	<li>I changed some of the variables to see what effect they had</li>
</ul>

<hr />

<h1>Recursion: Binary Tree</h1>
Imagine a program that creates itself. Viruses do that and they can get out of control. Programs that create themselves can also crash the computer, so its important that we know how control them.

Try the following code where :s is the size:
<pre><code>to branch :s
  lt 45 fd :s bk :s rt 45
  rt 45 fd :s bk :s lt 45
end

branch 190
</code></pre>
Firstly, to keep branch under control add the following as the first statement of branch.
<pre><code>if :s &lt;5 [Stop]   
</code></pre>
then after the turtle has gone forward to the end of the branch ask it to do another branch of half the size
<pre><code>branch :s  * 0.5
</code></pre>
If you miss the reduction in size the program will never stop... and it could get messy.

<a href="http://studio.code.org/c/34062557">See the tree being draw</a> in Blockly
<h2>What next?</h2>
<ul>
	<li>increase the size multiple eg. 0.6</li>
	<li>change the angle of the branch</li>
	<li>change stopping condition</li>
	<li>add a branch width</li>
</ul>
<a href="http://learnstones.com/wpls/wp-content/uploads/logo_drawing.png"><img class="alignnone size-full wp-image-225" src="http://learnstones.com/wpls/wp-content/uploads/logo_drawing.png" alt="logo_drawing" width="861" height="811" /></a>
<hr />

<h1>Recursion</h1>
Recursion is an extremely powerful programming technique that involves a sub that 'calls' itself.. a bit like a snake eating its tail. If you don't tell in when to stop it can crash your computer - so it can be dangerous

Recursion is used to create fractals <img class="alignright" src="http://upload.wikimedia.org/wikipedia/commons/8/82/Mandelbrot-similar-x2000.jpg" alt="mandelbrot image" width="183" height="117" />

It is useful for searching a file system. It goes down from the root into each and every branch (folder) of the system. It is also used by nature to create things like trees. You can see the tree and fern in the examples on <a href="http://www.calormen.com/Logo/">Calormen (Josh Bell's) Logo Interpreter</a>

<img src="/media/dra/computing/logo-programming/logofern.png" alt="" />

Here is TEF's "Papert Logo Online" with code for the <a href="http://logo.twentygototen.org/_REo_2F2">Koch Snowflake</a>
<h3>Quote</h3>
<pre><code>"The power of recursion evidently lies in the possibility of defining an infinite set of 
objects by a finite statement. In the same manner, an infinite number of computations 
can be described by a finite recursive program, even if this program contains no explicit 
repetitions. 

Wirth, Niklaus (1976). Algorithms + Data Structures
http://en.wikipedia.org/wiki/Recursion_(computer_science)#cite_note-3)
</code></pre>
<h3>See Also</h3>
<ul>
	<li><a href="http://en.wikipedia.org/wiki/Koch_snowflake">Wikipedia Koch Snowflake</a></li>
	<li><a href="http://en.wikipedia.org/wiki/Fractal">Wikipedia Fractal</a></li>
	<li><a href="https://www.youtube.com/watch?v=93akxnQ1xxw">Mandelbrot Set Video (using Elica)</a></li>
	<li><a href="http://upload.wiki(/media.org/wikipedia/commons/f/fd/Von_Koch_curve.gif)">Cargo Bot</a> - Ipad Game (now free). Great for learning recursion without even knowing it!</li>
</ul>
<h3>Challange/Task</h3>
<ul>
	<li>program the koch snowflake in the Calormen Logo Interpreter</li>
</ul>
<h3>Traffic Light Checkpoint</h3>
This is a complex task which will be beyond the reach of most students.. but have a go! Most important is to UNDERSTAND
<ul>
	<li>Green: I completed the task and understand it</li>
	<li>Amber: I am working on the task</li>
	<li>Red : I need help</li>
	<li>Blank: I'll pass on this one</li>
</ul>

<hr />

<h1>3D Logo: Elica</h1>
Elica is a powerful and modern logo that can produce 3D and moving images.
<h3>See Also:</h3>
<ul>
	<li><a href="http://www.youtube.com/watch?v=LOnOcBvxOCk&amp;list=PL6534E936D46257BF">Elica geometry Video (Youtube)</a></li>
	<li><a href="http://www.elica.net/site/about/about.html">Official Elica Site</a> with download link. The demos are great too.</li>
</ul>
<h3>Traffic Light Checkpoint</h3>
I have watched at least 2 videos

<hr />

<h1>Teachers Notes</h1>
<a href="http://learnstones.com/wpls/wp-content/uploads/LogoLevelsGCSE.png"><img class="alignnone size-full wp-image-278" src="http://learnstones.com/wpls/wp-content/uploads/LogoLevelsGCSE.png" alt="LogoLevelsGCSE" width="921" height="664" /></a>
<ul>
	<li>Environment</li>
	<li>Drawing (younger)=&gt; puzzles: golf, maze see app notes</li>
	<li>Repeating / looping =&gt; patterns</li>
	<li>colour here?</li>
	<li>Subs</li>
	<li>House, Street</li>
	<li>Black Boxing(abstraction, computational thinking)</li>
	<li>Random Colour</li>
	<li>Variables</li>
	<li>Creativity =&gt;Art,</li>
	<li>Power of: 15-word challanges</li>
	<li>??Branching if</li>
	<li>??Swarming - multi agent Logo</li>
	<li>recursion =&gt;tree koch</li>
	<li>3D logo =&gt;Elica</li>
</ul>
Also recursive

<img src="/media/dra/computing/logo-programming/logospiral.png" alt="" />

??? <img src="/media/dra/computing/logo-programming/logoskool.png" alt="" /> <img src="/media/dra/computing/logo-programming/logocirclepattern.png" alt="" /> <img src="/media/dra/computing/logo-programming/logowoops.png" alt="" />