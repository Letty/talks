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

### D3 Example

## Coding Workshop Two

## Links

* [Browser Developer Tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)
* [Statements on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
* [Operands on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
* [ES6 Features](http://es6-features.org/#Constants)
* [Canvas API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
* [D3js Documentation](https://github.com/d3/d3/wiki)