# Coding with Ada - Outline

1. Programing Fundamentals | Concepts
2. WebDev (HTML/CSS/JavaScript)
3. Python

# Programing Fundamentals

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

**Variables**

* Constant (variables) are values, like Pi, who never change during the program
* variables are changing values in the program

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

**For**
```
for(i = 0; i < 10; i++)
    console.log(i) // 0..9
```
**ForEach** 
```
arr = ['The','quick','brown','fox','jumps','over','the','lazy','dog.']
sentence = ''

arr.forEach(word)
    sentence += word+' '

print(sentence) 
// The quick brown fox jumps over the lazy dog.
```
**While** 
```
i = 0
while(i < 10)
    print(i) // 0..9
```
**Do While** 
```
i = 0
do
    print(i) // 0
while(i < 0)
    
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
    print('stir stir stir')

function wait(time)
    print('i\'m waiting for some '+time)

function make_portions(bowl)
    dough = 'one part of the dough'
```

# WebDev
# Python

