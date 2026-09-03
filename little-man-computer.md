<h1>Getting Started</h1>
<ul>
	<li>Download the <a href="http://learnstones.com/wpls/wp-content/uploads/LMC_Pizzey_v.1.5.2_SECURE.xlsm" rel="">Little Man Computer</a> (Excel Version)</li>
	<li>Enable macros to use the sheet</li>
</ul>
<h3>References</h3>
<ul>
	<li>From Brian Pizzey <a href="http://www.ictcool.com/2011/12/16/download-lmc-simulation-v-1-5-2-requires-microsoft-excel/">ictcool.com</a> (no longer available - Sept 2016)</li>
</ul>

<hr />

<h1>The LMC</h1>
<ul>
	<li>a theoretical model developed for teaching.</li>
	<li>The Little Man reads the code and moves bit of paper with 3 decimal digits around</li>
	<li>Pigeon Holes act as memory</li>
</ul>
<img src="images/51PyEp8JuiL._SX300_.jpg" alt="" />
<ul>
	<li>He has space for one piece of paper on his desk and an inbox and outbox</li>
</ul>

<hr />

<h1>Add 2 Inputs</h1>
<ul>
	<li>Your task is to write a program to add 2 inputs together</li>
	<li>Output the Answer to the Screen</li>
</ul>

<hr />

<h1>Add Multiple Inputs</h1>
<ul>
	<li>Keep adding numbers eg. 2 + 4 + 7 + 3</li>
	<li>Until the user enters 0 (Zero)</li>
	<li>Output the final result to the screen</li>
</ul>

<hr />

<h1>Multiply 2 Number (Difficult)</h1>
<ul>
	<li>Ask the user for 2 numbers</li>
	<li>Output the answer to screen</li>
</ul>

<hr />

&nbsp;
<h1>Convert Assembly to Machine Code</h1>
Each line of Assembly has a one-to-one equivalent Machine Code instruction
<code>
<blockquote>Assembly Language
00 Input
01 Store 10
02 Input
03 BranchIfZero 11
04 Add 10
05 Store 10
06 Branch 02
10
11 Output
12 End

</blockquote>
&nbsp;</code>
	<li>An Assembler is software that will convert your Assembly Language Instructions into Machine Code. </li>
	<li>Assemblers also manage labels for you. Its good to label branches so if you insert more lines you don't have to keep adjusting the line numbers.</li>

<h2>Labels in 6502 Assembly</h2>
<blockquote>
  LDX #$08
decrement:
  DEX
  STX $0200
  CPX #$03
  BNE decrement
  STX $0201
  BRK
</blockquote>

See <a href="https://skilldrick.github.io/easy6502/" rel="noopener" target="_blank">6502 Assembly Tutuorial</a>


<hr />

<h1>Learning Objectives</h1>
<ol>
	<li>How to program in machine code</li>
	<li>What are the advantages of assembly over machine code?</li>
	<li>Practicing exam questions</li>
</ol>