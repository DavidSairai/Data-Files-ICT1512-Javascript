/*
JavaScript 6th Edition
      Chapter 6
      Chapter case

      Snoot Flowers order form
      Author: David Sairai
      Date:   18 May 2021

      Filename: snoot.js
*/

"use strict" //interpret document in JavaScript strict code 

/* global variables */
var twentyNine = document.createDocumentFragment();
var thirty = document.createDocumentFragment();
var thirtyOne = document.createDocumentFragment();

/* setup node building blocks for slection list of days */
function setupDays(){
      var dates = document.getElementById("delivDy").getElementsByTagName("option");
      twentyNine.appendChild(dates[28].cloneNode(true));
      //add 29th
      thirty.appendChild(dates[28].cloneNode(true));
      thirty.appendChild(dates[29].cloneNode(true));
      //add 29th & 30th
      thirtyOne.appendChild(dates[28].cloneNode(true));
      thirtyOne.appendChild(dates[29].cloneNode(true));
      thirtyOne.appendChild(dates[30].cloneNode(true));
      //add 29th, 30th & 31st
}

function updateDays(){
      var deliveryDay = document.getElementById("delivDy");
      var dates = deliveryDay.getElementsByTagName("option");
      var deliveryMonth = deliveryMonth.getElementById("delivMo");
      var deliveryYear = deliveryYear.getElementById("delivYr");
      var selectedMonth = deliveryMonth.options[deliveryMonth.selectedIndex].value;
      while (dates[28]){
            //remove child with index of 28 until this index is empty 
            deliveryDay.removeChild(dates[28]);
      } if (deliveryYear.selectedIndex === -1){
            // if no year is selected, choose the default year so length of year can be determined
            deliveryYear.selectedIndex = 0;
      }if (selectedMonth === "2" && deliveryYear.options[deliveryYear.selectedIndex].index === "2018"){
            // if leap year, feb has 29 days
            deliveryDay.appendChild(twentyNine.cloneNode(true));
      } else if (selectedMonth === "4" || selectedMonth === "6" || selectedMonth === "9" || selectedMonth === "11"){
            // these months have 30 days
            deliveryMonth.appendChild(thirty.cloneNode(true));
      } else if (selectedMonth === "1" || selectedMonth === "3" || selectedMonth === "5" || selectedMonth === "7" || selectedMonth === "8" || selectedMonth === "10" || selectedMonth === "12"){
             //these months have 31 days
             deliveryMonth.appendChild(thirtyOne.cloneNode(true));
      }
}
/* remove default values and fomratting from state and delivery date selection lists */
function removeSelectionDefaults(){
      var emptyBoxes = document.getElementsByTagName("select");
      for (var i = 0; i < emptyBoxes.length; i++){
            emptyBoxes[i].selectedIndex = -1;
      }      
}

      function generatePlaceholder(){
            if(!Modernizer.input.plaaceholder){
                  var messageBox = document.getElementById("customeText");
                  messageBox.value = messageBox.plaaceholder;
                  messageBox.style.color = "rbg(178,184,183);
            }
      }
// create event listeners */
      function createEventListeners(){
            var deliveryMonth = document.getElementById("delivMo");
            if (deliveryMonth.addEventListener){
                  deliveryMonth.addEventListener("change", updateDays, false);
            } else if (deliveryMonth.attachEvent){
                  deliveryMonth.attachEvent("onchange", updateDays);
            }
            var deliveryYear = document.getElementById("delivYr");
            if (deliveryYear.addEventListener){
                  deliveryYear.addEventListener("change", updateDays,false);
            } else if (deliveryYear.attachEvent) {
                  deliveryYear.attachEvent("onchange", updateDays);
            }
      }

/* run initial form confirguration functions */
      function setUppage (){
            removeSelectionDefaults(){
                  setupDays();
                  createEventListeners();
                  generatePlaceholder();
            }
      }
/* run setup function when page finshes loading */
      if (window.addEventListener){
            window.addEventListener("load", setUppage, false);
      } else if(window.attachEvent){
            window.attachEvent("onload", setUppage);
      }