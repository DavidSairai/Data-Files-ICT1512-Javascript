/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo gallery
 *    Variables and functions
 *    Author: David Sairai
 *    Date:   17 May 2021

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];

/* add src  values to img elements  based on order  specified in photoOrder array */
function populateFigures (){
   var filename;
   var currentFig;
   for (var i = 1; i < 4; i++);
   filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
   currentFig = document.getElementsByTagName("img")[i - 1];
   currentFig.src = filename;
}

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

/* create EventListeners for left, right arrow and center figure element */
function EventListeners(){
   var leftarrow = document. getElementById("leftarrow");
   if (leftarrow.addEventListener){
      leftarrow.addEventListener("click", leftArrow, false);
   } else if (leftarrow.attachEvent){
      leftarrow.attachEvent("onclick", leftArrow);
   }
   var rightarrow = document.getElementById("rightArrow");
   if (rightarrow.addEventListener){
      rightarrow.addEventListener("onclick", rightArrow, false);
   } else if (rightarrow.attachEvent){
      rightarrow.attachEvent("onclick", rightArrow);
   }
   var mainFig = document.getElementsByTagName("img")[1];
   if (mainFig.addEventListener){
      mainFig.addEventListener("click", zoomFig, false);
   } else if (mainFig.attachEvent){
      mainFig.attachEvent("onclick", zoomFig);
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