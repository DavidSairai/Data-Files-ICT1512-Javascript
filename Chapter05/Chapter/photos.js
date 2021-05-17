/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo gallery
 *    Variables and functions
 *    Author: David Sairai
 *    Date: 17 May 2021  

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

/* open center figure in separate window */
function zoomFig() {
   
}

/*event listenr fo left arrow, right arrow, center figure element*/
function createEventListeners(){
   var leftArrow = document.getElementById("leftarrow");
   if(leftArrow.addEventListener) {
      leftArrow.addEventListener("click", leftArrow, false);
      else if(leftArrow.attachEvent){
         leftArrow.attachEvent("onclick", leftArrow);
      }
   var right = document.getElementsById("rightarrow")'
   if(righarrow.addEventListener){
      rightArrow.addEventListener("click", rightArrow, false);
      else if(rightArrow.attachEvent){
         rightArrow.attachEvent("onclick", rightArrow);
      }
   }
   }
}
/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}