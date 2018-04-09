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
    * command is ```python -m SimpleHTTPServer <portnumber>```
    * or if you use pyhton 3 ```python -m http.server <portnumber>``
    replace  ```<portnumber>``` with a four digit number
    * check your browser under  ```localhost:<portnumber>```

### Coding
* Variables and Data structure
    - const 
    - let
    - Simple Variables
        + `let a = 'Hello';`
        + `let b = 23847628;`
        + `let c = 2.342;`
    - Arrays
        + `let d = [1,2,45,21,52,66,89,123];`
        + `let e = [1,'hello', 234.32,'foo'];`
    - Objects
        + `let f = {'name': 'John', 'age': 42} `
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
            for(let i = 0; i < 10; i++){
                console.log(i)
            }
            ```
        + forEach [Array.forEach on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
            ```javascript
            let arr = ['The','quick','brown','fox','jumps','over','the','lazy','dog.'];
            let sentence = '';

            arr.forEach((word) => {
                sentence += word+' ';
            })
            console.log(sentence)
            ```
        + while / do while [while on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
            ```javascript
            let i = 0;
            while(i < 10){
                console.log(i)
            }
            ```
* Functions
    - With return value
        ```javascript
        function calcDigitSum(numb){
            let dsum = 0;
            let numbs = numb.toString().split('').map((val)=> {
                return parseInt(val);
            });

            numbs.forEach((n) => { 
                dsum += n;
            })
            return dsum;
        }

        let ds = calcDigitSum(1337); // ds = 14
        ```

    - Without return value
        ```javascript
        function showConcatenatedArray(arr){
            let conc = '';

            arr.forEach((a) => {
                conc += a+' ';
            });
            console.log(conc)
        }
        let arr = ['The','quick','brown','fox','jumps','over','the','lazy','dog.'];
        showConcatenatedArray(arr); 
        // The quick brown fox jumps over the lazy dog.
        ```

    - Function binded to Variables
        ```javascript
        let sumAll = (arr) => {
            let sum = 0
            arr.forEach((a) => {
                sum += a;
            })
            return sum;
        }

        let b = sumAll([1,3,3,7]); // 14
        ```

### Examples
* [D3js with SVG ES5](https://github.com/SensesProject/fhp-course-material/blob/master/svg_es5.html)
* [D3js with SVG ES6](https://github.com/SensesProject/fhp-course-material/blob/master/svg_es6.html)
* [Canvas ES5](https://github.com/SensesProject/fhp-course-material/blob/master/canvas_es5.html)
* [Canvas ES6](https://github.com/SensesProject/fhp-course-material/blob/master/canvas_es6.html)

## Coding Workshop Two

## Links

* [Browser Developer Tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)
* [Statements on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
* [Operands on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
* [ES6 Features](http://es6-features.org/#Constants)
* [Canvas API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
* [D3js Documentation](https://github.com/d3/d3/wiki)