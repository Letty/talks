# Coding with Ada - Outline

1. Women in Computing
2. Programing Fundamentals | Concepts
3. WebDev (HTML/CSS/JavaScript)
4. Python

# Women in Computing | Making

* Ada Lovelace - [Wikipedia](https://en.wikipedia.org/wiki/Ada_Lovelace) 
* Grace Hopper - [Wikipedia](https://en.wikipedia.org/wiki/Grace_Hopper) - [Youtube Video](https://www.youtube.com/watch?v=S6sh8CxwWx8)
* Erna Schneider Hoover [Wikipedia](https://en.wikipedia.org/wiki/Erna_Schneider_Hoover)

* Becky Stern - DIY, Making, Electronics - [Youtube Channel](https://www.youtube.com/channel/UCsI_41SZafKtB5qE46WjlQQ)
* Limor Fried - Founder of Adafruits- [Wikipedia](https://en.wikipedia.org/wiki/Limor_Fried) - [Adafruits](https://www.adafruit.com/)

# Programing Fundamentals

Videos about beeing a Developer

* [So You Want to Be a Developer - I: How to Think Algorithmically - Extra Credits](https://www.youtube.com/watch?v=WCuUWGmatpU)
* [So You Want to Be a Developer - II: Understand Your Coworkers and Your Users - Extra Credits](https://www.youtube.com/watch?v=kqFcF_jRrx0)

**Todo**

* Mini intro ? -> what is programing, difference hardware / software?
* Class and Object
* things to say -> different programming concepts (oop, functional, pointer, multidim arrays like matlab, databases)


* note: the following chapter is not for a specific programing language, its more a generalization to describe the basic concepts in programing 
* language in the text means programing language 

## Data Types, Variables and Assigning Values

**Data Types** 

* every programing language has their own data types
* basic types which appear in most languages
    - boolean (logical value) - true | false
    - numbers - floating and integer numbers
    - strings - everything written
* Data Types are build in classes, but used different as "normal" classes
* declaring a variable of a data type, lets say the number 15 `a = 15`, the programming language know, that this is a number other languages use the data type while declaring a variable `number a = 15`

**Variables**

* Constant (variables) are values, like Pi, who never change during the program
* variables are changing values in the program, fe. the time changing over a day

**Assigning Values**

* binding concrete values (numbers, words, complex data structures) to a variable is called assigning
* common syntax are `a = 5` or `a := 5`
 

## Conditions

* or lets call it decision making
* programs make decisions based on variables, status or input by user

**If .. Else**

* this structures can check, whether a condition is true or false
* a basic form can be just one condition 
    ```
    if (condition) 
        // when the condition is true (or false) do something
    ```
* two conditions
    ```
    if (condition === true) 
        // when the condition is true do something
    else
        // if it's not true, do something else
    ```
* depending of the programing language, more conditions can be applied
    ```
    status = 'fetch data'
    if (status === 'get data') 
        print('I asked for data')
    else if (status === 'fetch data') 
        print('I'm receiving data')
    else if (status === 'received data') 
        print('I got the data')
    else
        print('I'm lost..')
    ```
* or comparing numbers and intervals
    ```
    b = 10
    if(b < 2)
      print('lower then 2')
    else if(b < 5)
      print('lower then 5')
    else if(b < 10)
      print('lower then 10')
    else
      print('greater or equal then 10')
    
    ```

**Switch Case**

* Similar to a nested if else
* cleaner in terms of code appearance
* usually used for comparison (no greater or lower possible)
* a default value can be defined
* without breaks, multiple cases can be applied
    ```
    status = 'fetch data'
    switch(status)
        case 'get data':
            print('I asked for data')
            break
        case 'fetch data':
            print('I'm receiving data')
            break
        case 'received data':
            print('I got the data')
            break
        default:
            print('I'm lost..')
    ```

## Functions

* structuring code
* reoccurring calculations, parts of the program 

```
function calcRectArea(width, height)
    area = width * height
    return area
    
```

## Loops and Iterations

* Iterating over datastructures
* fe. applaying data preprocessing, draw something for every element in the datastructure
* iterations can increment a number (++, i + 2, i + 10, ...) or decrement (--, i - 2, i - 10, ...)

**While** 
```
i = 0
while(i < 10)
    print(i) // 0..9
    i++
```
**Do While** 
```
i = 0
do
    print(i) // 0
    i++
while(i < 0)
```
**For**
```
for(i = 0; i < 10; i++)
    print(i) // 0..9
```
**ForEach** 
```
arr = ['The','quick','brown','fox','jumps','over','the','lazy','dog.']
sentence = ''

arr.forEach(word)
    sentence = sentence + word+' '
    // short version: sentence += word + ' '

print(sentence) 
// The quick brown fox jumps over the lazy dog.
```

## Cooking Algorithms

```
// Ingredients are variables
flour   = '400g Flour'
milk    = '750ml Milk'
salt    = 'a pinch salt'
eggs    = '3 eggs'
water   = 'sparkling water'
butter  = 'some butter'

// Cooking equipment are constants
PAN     = 'One big Pan'
STOVE   = 'Stove to cook on'

// prepare the dough
bowl = mixing([flour, milk, salt])
wait('30min')
bowl = mixing([water], bowl)

STOVE.heat()

// make one pancake
dough = make_portioning(bowl)
PAN.put_in(butter)
wait('30sec')
PAN.put_in(dough)
wait('30sec')
PAN.switch_side()
wait('30sec')
PAN.empty()

function mixing(ingredients, bowl)
    mixing_bowl = empty
    if(bowl)
        mixing_bowl = bowl

    ingredients.forEach(ing)
        mixing_bowl = mixing_bowl + ing
    stir(bowl)

    return bowl

function stir(bowl)
    print('stir stir stir ' + bowl)

function wait(time)
    print('i\'m waiting for some '+time)

function make_portions(bowl)
    dough = 'one part of the dough'
```

# WebDev

## Basic HTML and CSS

### HTML - Skeleton of a Website

HTML is a Markup Language for Documents

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Loading Datasets</title>

    <!-- if you use files for styles and javascript-->
    <link rel="stylesheet" href="main.css">
    <script src="javascriptfile.js"></script>

    <!-- styles inside html file-->
    <style>
        body{
            color: blue;
            background: grey;
        }
    </style>
</head>
<body>

<script type="text/javascript"> 
    // javascript here
</script>
</body>
</html>
```

* Every element in html is called a "tag"
* most of the tags needs to be closed after opening. `<body></body>`, some just open `<link ...>`
* `<!DOCTYPE html>` - Declares the html document 
* `<html lang="en">` - Defines the language of the content(!) of your html document
* `<head>` - Information about the Website readable by other programs: who made the side, search engine terms, other files to include
* `<meta charset="UTF-8">` - Character Encoding - not every language has the same characters (remember the days where "?" appeared for ä,ö,ß ?)
* `<title>` - Titel of the Website
* `<link>` - Relation to other Documents / Resources
* `<script>` - Can execute script language or load script files
* `<style>` - CSS Stylesheets inside html file
* `<body>` - Contains all the content that a browser represents

### Elements / Tags

* **Headlines** `<h1>Hello World!</h1>` - Headlines are ordered from 1 to 6, a higher number means greater font size
* **Paragraphs** `<p>Multiline Textblock..</p>`
* **Line Break** `<br>` for Example inside a Paragraph
* **Links** `<a href="URL">Text for the Link</a>`
* **Image** `<img src="image.jpg" alt="Text to Show" width="50" height="50">` - Images have a source `src` for loading the picture, the dimensions `width & height` and it can also have a alternative text `alt` for hover or if the image file is missing
* **Lists** 
    Unordered List:
    ```html
    <ul>
    <li>First Item</li>
    <li>Second Item</li>
    </ul>
    ```

    Ordered List:
    ```html
    <ol>
    <li>First Item</li>
    <li>Second Item</li>
    </ol>
    ```
* **Block Element** `<div></div>` - Everything inside a div container is using the complete space from left to right and the hight of its content. Usefull for structuring html content.
* **Inline Elements** `<span></span>` - Can be placed inside text or other Elements. Takes just the space to represent the content.
* in HTML5 are some new Elements for structuring your website instead of using divs `header`, `footer`, `nav`, `aside`, `main`, `article`, `section`

## CSS - Cascading Style Sheets

* Rule-based Language for styling Documents
* Rule-set are definded by a selector and a declaration block 
```css
selector {
    property: value;
}
```

```css
/* select by html tag */
h1 {
    color: red;
}

/* select by class name */
.container {
    margin: 10px;
}

/* select by id (unique!) */
#submit-button{
    background: red;
}

/*  select by id and 
    state of the element */
#submit-button:hover{
    background: #99000;
}
```
### Some Properties

* `font-size`
* `font-family` - change the actual font
* `color` - font color
* `background` - background color
* `border` - border around a element
* `margin` - space around elements, outside the border
* `padding` - space arounf content of an element, inside the border
* `width` and `height`
* `display: flex` - Flexbox is very powerful for building websites and layout the content!

### CSS Frameworks

* [Twitter Bootstrap](http://getbootstrap.com/)
* [Bitters](http://bitters.bourbon.io/) and [Bourbon](https://www.bourbon.io/) Requires Ruby

## Javascript

* Loops, If Else, Functions 
    - link climate scenarios readme
    - different for loops with divs to color?
* Web API?
    - select elements: `document.getElementsByClassName()`, `document.getElementsByTagName()`, `document.getElementById()`
    - append elements `document.createElement()`, `document.append()`, `element.setAttribute(name, value)`
    - add listener `target.addEventListener(type, listener)`
* [JSFiddle](https://jsfiddle.net/w21kheaa/1/)

# Python

