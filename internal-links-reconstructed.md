---
title: Internal Links
source: wp_internal_links.html
slideshow_separator: "---"
---

# Lesson 3: Website in a Single Page

This lesson will use internal hash(#) links to create a website with a number of pages contained in one file

### Examples

- [www.i-like-cats.co.uk/](http://www.i-like-cats.co.uk/) uses a "back to the top" link
- [very simple example](http://output.jsbin.com/icewoj/) Links are in a "fixed position" at the top of the page
- [Styled example with Javascript](http://output.jsbin.com/fehuzicase/) and Hover effects on different elements

---

# Getting Started

You need to start with a page with one `<h1>` and some `<h2>`s

```html
<h1>My Website</h1>

<h2>Page 1</h2>
Write intro here

<h2>Page 2</h2>
Blah blah about Page 2

<h2>Page 3</h2>
Intelligent comments about Page 3
```

---

# Identifying the Pages

We need to add id attributes to your `<h2>s` in order to be able to link to them

```html
<h1>My Website</h1>

<h2 id="p1">Page 1</h2>
Write intro here

<h2 id="p2">Page 2</h2>
Blah blah about Page 2

<h2 id="p3">Page 3</h2>
Intelligent comments about Page 3
```

## Theory id & Class attributes

HTML

> `<h2 id="Food">`
>
> `<h2 class="MainSectionTitle">`

Any tag can be given an id or class attribute (or both) that allows for more flexible styling.

- ID is for unique elements and each id should only be used once.
- Class is for a group of elements all of which will take the same style

CSS

```css
#Food {font-style:serif}   //will style the tag with id="TheBible"

.MainSectionTitle {font-style:sans}        //will style any tag with class="book"

h2.MainSectionTitle {font-style:sans}     //will style any h2 with class="book"
```

The last statement will apply the same style to the h2 tag but would not work on `<h1 class="MainSectionTitle">`

### Should we use ID or CLASS to identify the pages?

## Also See

- [html dog](http://www.htmldog.com/guides/css/intermediate/classid/)

---

# Internal Links

At the top of the document add the links. Each `a` or `anchor` tag is linked to the id that we created in the `h2` (note you need to add the `# or hash`)

```html
<a href="#p1">Page 1</a>
<a href="#p2">Page 2</a>
<a href="#p3">Page 3</a>

<h1>My Website</h1>

<h2 id="p1">Page 1</h2>
Write intro here

<h2 id="p2">Page 2</h2>
Blah blah about Page 2

<h2 id="p3">Page 3</h2>
Intelligent comments about Page 3
```

By clicking on the word "Page 1" you get taken to the h2 tag tith id="p1"

#### I understand how internal/hash links work

---

# Space for Scrolling

We are going to scroll the document up and down to appear as though we are changing pages. To do this we need to create space by using margins and padding

CSS

```css
body {padding-bottom:600px;}
h2 {padding-top:80px;
border:2px solid magenta;}
```

To understand the difference between margins and padding you need to understand the CSS "Box Model" (Next Section)

---

# Box Model

- Margins are outside the border
- Padding is inside the border (Note: The border might be invisible)

![](http://www.w3schools.com/css/box-model.gif)

#### I know the difference between margin and padding

## Also See

- [More detail](http://www.w3schools.com/css/css_boxmodel.asp)
- [Decoded lesson on Box model](http://o2learn.decoded.co/html-css/lesson/9)

---

# Fix the Nav & Title

Mark up the Navigation using the `<Nav>` Tag

HTML

```html
<nav>
 <a href="#p1">Page 1</a>
 <a href="#p2">Page 2</a>
 <a href="#p3">Page 3</a>

 <h1>My Website</h1>
</nav>
```

Fix the Navigation to the top right of the page using the following CSS

CSS

```css
nav {
position:fixed;
top:20px;
right:10px;
}
```

## Theory

HTML starts placing elements in the top left corner of the doc.

- Inline HTML elements (text & images) are positioned after each other and they flow onto the next line if necessary.
- Block elements (eg. headings) automatically start on a new line
- The vertical placement depends on the elements that came before

The rest of the document should flow underneath the Nav (you could always put a white background on it if you think that looks silly)

---

# A Better Approach

On the previous section when you first open the page, the Page 1 title is too low and jumps up when you click the link. So here is a new approach for our 'website in a single file' to solve this problem. You will need to create a `<section>` tag for each page as follows:

```html
<section id="p1">
  <h2>Page 1</h2>
  Blah blah blah about Page 1
</section>
```

This allows us to put a big `padding-bottom` on the "section" to create the space we need to make only one h2 appear on the page.

```css
padding-bottom:600px;
overflow:hidden; //removes the scroll bars
```

[On JS Fiddle](https://jsfiddle.net/3zvx2au0/embedded/result/)

---

# Javascript

See this [Smooth Scroll](http://jsbin.com/suwehu/7) Version

## Instructions

1. Copy the javascript from the jsbin linked above
2. Add the `class="Scroll"` to your `<a>` Links

---

# Buttons & Hover

## Hover

make your links interactive

CSS

```css
a:hover {
  background:yellow;
}
```

When you hover over the links, the will now go yellow.

## Buttons

CSS

```css
a {
  display: block;   /* for vertical buttons - block elements start on a new line */
  padding:20px;     /* pad out the area around the link to create button*/
  margin-bottom:10px; /* put space between the buttons */
  background:pink;    /* colour the button - a gradient looks even better */

}
```

## Theory

```css
:hover     /* will style hover over any element   */
a:hover    /* will style hover over <a> only */
h2:hover   /* will style hover over <h2> only */
a:visited  /* will style visited links  */
```

See also [Psuedo Classes](http://www.w3schools.com/css/css_pseudo_classes.asp)
