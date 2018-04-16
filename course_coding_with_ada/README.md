# Coding with Ada - Outline

1. Programing Fundamentals | Concepts
2. WebDev (HTML/CSS/JavaScript)
3. Python

## Programing Fundamentals

**Todo**

* Mini intro ? -> what is programing, difference hardware / software?
* Class and Object
* things to say -> different programming concepts (oop, functional, pointer, multidim arrays like matlab, databases)


* note: the following chapter is not for a specific programing language, its more a generalization to describe the basic concepts in programing 
* language in the text means programing language 

### Data Types, Variables and Assigning Values

*Data Types* 

* every programing language has their own data types
* basic types which appear in most languages
    - boolean (logical value) - true | false
    - numbers - floating and integer numbers
    - strings - everything written

*Variables*

* Constants are values, like Pi, who never change during the program
* variables are changing values in the program

*Assigning Values*

* binding concrete values (numbers, words, complex data structures) to a variable is called assigning
* common syntax are `a = 5` or `a := 5`
 

### Conditions

* or lets call it decision making
* programs make decisions based on variables, status or input by user

*If .. Else*

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

*Switch Case*

* Similar to a nested if else
* usually used for comparison (no greater or lower possible)
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

### Functions
### Loops and Iterations

## WebDev
## Python

