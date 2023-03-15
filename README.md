# Sorting hat

 Sorting hat from hogwarts houses, for entertainment and study of JavaScript.
 
 --- Attention! This project is for study only ---
 
 ## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Type your name
- View Sorting Hat dialog
- Take a Hogwarts House Selection Test
- View result


### Screenshot

![](https://github.com/carolmedici/sorting-hat/blob/main/assets/images/print2.png)
![](https://github.com/carolmedici/sorting-hat/blob/main/assets/images/print.png)
![](https://github.com/carolmedici/sorting-hat/blob/main/assets/images/print3.png)


### Links

- Solution URL: [https://github.com/carolmedici/sorting-hat](https://github.com/carolmedici/sorting-hat)
- Live Site URL: [https://carolmedici.github.io/sorting-hat/](https://carolmedici.github.io/sorting-hat/)

## My process

### Built with

- HTML
- CSS custom properties
- DOM Manipulation
- Functions
- Arrays
- addEventListener

### What I learned

I learned to manipulate the DOM in different ways, to use addEventListener, create a delay.


```
<div class="gryffindorHouse hide">
    <img class="coat-of-arms" src="assets/images/grifinoria.gif" alt="Gryffindor image">
    <h2 class="H-result">Gryffindor!</h2>
    <p class="H-about">Gryffindor is one of the four Houses of Hogwarts School of Witchcraft and Wizardry, founded by Godric Gryffindor. Godric instructed the sorting hat to choose a few particular characteristics he most values. Such character traits of students Sorted into Gryffindor are courage, chivalry, and determination.</p>
</div>
```
```css
.hide {
  display: none;
}
```
```js
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}
```


### Continued development


Keep practicing and evolving in JS, start using REACT

## Author

- LinkedIn - [Carolina Médici](https://www.linkedin.com/in/carolina-medici/)
- Frontend Mentor - [@carolmedici](https://www.frontendmentor.io/profile/carolmedici)




