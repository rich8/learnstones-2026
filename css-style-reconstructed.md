---
title: CSS Styling
source: wp_css_style.html
slideshow_separator: "---"
---

# CSS Styling

#### CSS = Cascading Style Sheets

- CSS allows us to style our [HTML](http://learnstones.com/web) document
- Its more dangerous and more powerful than Word Processing. You change many elements at once... when you know how the cascade works

| **Content** | **Style** |
| --- | --- |
| Words<br>Paragraphs<br>Headings | Font Type<br>Font Size<br>Colour |
| use **HTML** | use **CSS** |

#### I understand the difference between content and style

---

# Styling Our Page

Add the following CSS statement that will style all of the heading2 `<h2>` tags to have a red background

```css
h2 {background:red;}

/* Note this is CSS a different language to HTML. There are no `< >`
and you can't forget to use `;`  */
```

If it doesn't work, check you have some `<h2>`s on your page (see below):

```html
<h1> My Website</h1>

<h2> Me and my family</h2>
Welcome to my website. I am amazing. My family are all circus performers

<h2> My Hobbies</h2>
I like to play chess etc.

<h2> Music</h2>
I like Gangnam Style
```

### Can you get a blue background on the first title `<h1>`?

---

# Multiple CSS Style Statements

Spaces and line breaks don't matter in CSS (or HTML) so you can use both of the following layouts:

```css
h1 {text-align:center; font-family:sans-serif;}

h2 {
  background:red;
  border: 3px solid black;
  font-family:sans-serif;
}
```

### I have made at least 2 style changes to my document

### Style Help

- [Borders CSS](http://www.w3schools.com/css/css_border.asp) Longhand and short hand
- [Font CSS](http://www.w3schools.com/cssref/pr_font_font.asp)

#### You could also try

- [Decoded CSS lesson](http://o2learn.decoded.co/html-css/lesson/6)

---

# Search for Help

No one can remember all the codes (syntax) so you need to know how to use Google properly.

eg.1 How to align text?

```text
Google: CSS align text
```

eg.2 How to Find a colour (color american spelling)

```text
Google: CSS color
```

eg.3 How to do an ordered list in html

```text
Google: HTML lists
```

You might end up here

![www](http://www.w3schools.com/images/w3schoolslogoNEW310113.gif)

Remember

- HTML for content
- CSS for presentation/Style

#### Are you confident of working independently using Google for help?

---

# Colour 5 Ways

Try out 5 different ways of writing colour in CSS

```css
color:red;               //16 words notation (common colours with cyan and magenta)
color:rgb(100%,0%,0%);   //Percentage rgb (Red, Green, Blue colour)
color:rgb(255,0,0);      //256 rgb where 0=none 255=max
color:#f00;              //rgb single hex digit (0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f where f=16=max)
color:#ff0000;           //rgb hex pairs 00=none ff=max
```

Using your web site (or [this one](http://www.w3schools.com/cssref/tryit.asp?filename=trycss_color) ) find out which colours are written by each of the 5 lines above.

#### I know how to find the colour I need using css

#### You could also try

- [16 Named colours](http://en.wikipedia.org/wiki/Web_colors#HTML_color_names)
- [147 Named colours](http://www.w3schools.com/html/html_colornames.asp)
- [Mix your own colour sliders](http://www.calculatorcat.com/free_calculators/color_slider/rgb_hex_color_slider.phtml)

---

# Add Body

If we want the whole document to have a red background we can do

```css
body {background:red}
```

But this will not work until we add the `<body>` tag pair to the document. All the styling is normally kept in the `head of the document

```html
<body>

  <H1>Hello World!</h1>
  This is a website about Billy, written in html

</body>
```

### Change the background and the font colour of the whole of the document

---

# Cool CSS

```css
body {
  background:Cyan;
  color:blue;        /*Note this is TEXT colour*/
  font-family:sans-serif;
}

h2 {
  color:orange;
  background:lightgrey;
  text-align:left;
  padding-left:20px;
  border-width:5px;
  border-style:dotted;
  border-color:blue;
  border-radius:20px;
  box-shadow:5px 3px 5px grey;
  transform: rotate(5deg);
}
```

[See This example working](http://jsbin.com/jagesicopu/1/edit?css,output)

---

# Add Head

Back to the HTML, a Head element changes the title of the browser window

```html
<head>
  <title>Billy's Site</title>
</head>
<body>

  <H1>Hello World!</h1>
  This is a website about Billy, written in html

</body>
```

---

# Google Fonts

Choose your font [Here](https://www.google.com/fonts) I chose "Arvo"
Place the following link for the font in the `<head>` of the HTMML

```html
 <head>
   <link rel="stylesheet" type="text/css"
      href="http://fonts.googleapis.com/css?family=Arvo">
</head>
```

In the CSS

```css
font-family: Arvo;
```

[See Example](http://jsbin.com/fugidubuxi/1/edit?html,css,output)

---

# Save in Notepad

- Copy your html into a text file using notepad (in Start> All Progs > Accessories)
- Create a folder called My Website
- Save the text file in this folder as Me.html
- Double click on your Me.html file in your My Website folder

![](http://media.learnstones.com/dra/web/website-in-a-single-file/NotepadFind.png)

## Save with CSS

Your text file will need to have the following structure:

```html
<head>
  <style>
     <!-- Paste the CSS on the next lines ie. in between the style tags -->
     h1 {background:red;}
  </style>
</head>
<body>
     <!-- HTML goes here -->
</body>
```

---

# Next

Try the [Internal Links](internal-links.html) Lesson
