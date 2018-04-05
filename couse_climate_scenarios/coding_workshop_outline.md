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

### D3 Example

## Coding Workshop Two

## Links

* [Statements on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
* [ES6 Features](http://es6-features.org/#Constants)