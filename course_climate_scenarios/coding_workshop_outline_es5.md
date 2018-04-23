# Visualizing Climate Scenarios

**Table of Contents**
1. [Coding Workshop One](#coding-workshop-one)
2. [Coding Workshop Two](#coding-workshop-two)
3. [Links](#links)

## Coding Workshop One

### Basic WebDev
* HTML
* CSS
* JavaScript
* Browser Tools - Inspector, Console 
* [JSFiddle](https://jsfiddle.net/)

### Development Tools
* find a suitable editor for your OS (Sublime Text, Notepad++, Atom)
* install a webserver
    * on mac os and linux is a [python](https://www.python.org/) server already installed, you just need to start this server in the directory of your project 
    * you need to navigate with the Command Line (Terminal) to your project folder
        - open the Terminal
        - navigate to your folder in finder / explorer
        - type in the terminal `cd ` note: their is a space!
        - drag the folder in the terminal
        - now you have something like this in your terminal `cd /User/Student/project-folder`
        - hit enter
        - now you are in your directory, run the server
    * command is ```python -m SimpleHTTPServer <portnumber>```
    * or if you use pyhton 3 ``` python -m http.server <portnumber>```
    replace  ```<portnumber>``` with a four digit number
    * if you use Windows, the command is `py` (when you install Python 3)
    * check your browser under  ```localhost:<portnumber>```

### Coding
* Variables and Data structure
    - const 
    - var
    - Simple Variables
        + `var a = 'Hello';`
        + `var b = 23847628;`
        + `var c = 2.342;`
    - Arrays
        + `var d = [1,2,45,21,52,66,89,123];`
        + `var e = [1,'hello', 234.32,'foo'];`
    - Objects
        + `var f = {'name': 'John', 'age': 42} `
* Control Flows
    - Conditions
        + if..else [if..else on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
            ```javascript
            if (condition === true){
                doSomething();
            }else{ // condition false
                doAnotherThing();
            }
            ```
       
        + switch [switch defintion on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
            ```javascript
            switch(expression){
                case value1:
                    do();
                    break;
                case value2:
                    doTwo();
                    break;
                default:
                    doDefault();
            }
            ```
    - Loops
        + for [for on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
            ```javascript
            for(var i = 0; i < 10; i++){
                console.log(i)
            }
            ```
        + forEach [Array.forEach on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
            ```javascript
            var arr = ['The','quick','brown','fox','jumps','over','the','lazy','dog.'];
            var sentence = '';

            arr.forEach(function(word){
                sentence += word+' ';
            })
            console.log(sentence)
            ```
        + while / do while [while on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
            ```javascript
            var i = 0;
            while(i < 10){
                console.log(i)
            }
            ```
* Functions
    - With return value
        ```javascript
        function calcDigitSum(numb){
            var dsum = 0;
            var numbs = numb.toString().split('').map(function(val){
                return parseInt(val);
            });

            numbs.forEach(function(n){ 
                dsum += n;
            })
            return dsum;
        }

        var ds = calcDigitSum(1337); // ds = 14
        ```

    - Without return value
        ```javascript
        function showConcatenatedArray(arr){
            var conc = '';

            arr.forEach(function(a){
                conc += a+' ';
            });
            console.log(conc)
        }
        var arr = ['The','quick','brown','fox','jumps','over','the','lazy','dog.'];
        showConcatenatedArray(arr); 
        // The quick brown fox jumps over the lazy dog.
        ```

    - Function binded to Variables
        ```javascript
        var sumAll = function(arr){
            var sum = 0
            arr.forEach(function(a){
                sum += a;
            })
            return sum;
        }

        var b = sumAll([1,3,3,7]); // 14
        ```

### Examples
* [D3js with SVG ES5](https://github.com/SensesProject/fhp-course-material/blob/master/svg_es5.html)
* [D3js with SVG ES6](https://github.com/SensesProject/fhp-course-material/blob/master/svg_es6.html)
* [Canvas ES5](https://github.com/SensesProject/fhp-course-material/blob/master/canvas_es5.html)
* [Canvas ES6](https://github.com/SensesProject/fhp-course-material/blob/master/canvas_es6.html)

## Coding Workshop Two

* Change geometric primitives (rect into circle svg and canvas)
* Interaction and Transitions
* Showing differences (?)

SVG

* [Basic Shapes SVG on MDN (Scroll to "SVG elements by categorie")](https://developer.mozilla.org/en-US/docs/Web/SVG/Element)
* [Basic Shapes SVG on W3C](https://www.w3.org/TR/SVG/shapes.html)
* [Events in Javascript](https://developer.mozilla.org/en-US/docs/Web/Events)
* [Eventhandling with D3js](https://github.com/d3/d3-selection/blob/master/README.md#handling-events)
* [D3 Example - Barchart with Tooltip](http://bl.ocks.org/Caged/6476579)
* [D3 Example with Interaction and Transitions](https://bl.ocks.org/mbostock/3885705)

Canvas

* [Drawing Shapes with canvas on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
* [Basic Animations with Canvas on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
* [Mouse interaction with Hit Regions](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility)
* [Canvas Tutorial for Shapes, Animation and Mouse Detection](https://www.html5canvastutorials.com/)

## Links

* [Browser Developer Tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)
* [Statements on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
* [Operands on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
* [ES6 Features](http://es6-features.org/#Constants)
* [Canvas API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
* [D3js Documentation](https://github.com/d3/d3/wiki)
* [Chroma JS](https://github.com/gka/chroma.js)
* [D3js](https://github.com/Letty/infovis-with-d3js)