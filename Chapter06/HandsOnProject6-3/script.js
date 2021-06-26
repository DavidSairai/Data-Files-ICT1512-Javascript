/*  JavaScript 6th Edition
    Chapter 6
    Hands-on Project 6-3

    Author: David Sairai
    Date:   12 May 2021
    Filename: script.js
*/

"use strict"; 
  
    // Create Global variable
        var formValidity = true;

        /* remove fallback placeholder text */
        function zeroPlaceholder() {
            var addressBox = document.getElementById("addrinput");
            addressBox.style.color = "black";
            if (addressBox.value === addressBox.zeroPlaceholder){
                addressBox.value = "";
            }
        }

    /* restore placeholder text if box contains no user entry */
    function checkplaceholder() {
        var addressBox = document.getElementById("addrinput");
        if (addressBox.value === ""){
            addressBox.style.color = "rgb(178,184,183)";
            addressBox.value = addressBox.placeholder;
        }
    }

    /* add placeholder text for browsers that don't support placeholder attribute */
    function generateHolder(){
        if (Modernizr.input.placeholder){
            var addressBox = document.getElementById("addrinput");
            addressBox.value = addressBox.placeholder;
            addressBox.style.color = "rbg(178.184.183)";
            if (addressBox.addEventListener){
                addressBox.addEventListener("focus", zeroPlaceholder, false);
                addressBox.addEventListener("blur", checkplaceholder, false);
            } else if (addressBox.attachEvent){
                addressBox.attachEvent("onfocus", zeroPlaceholder);
                addressBox.attachEvent("onblur", checkplaceholder);
            }
        }
    }

/* function to check after each character a user types */
function advanceSsn(){
    var ssnFields = document.getElementsByClassName("ssn");
    var currentField = document.activeElement;
    if (currentField.value.length === currentField.maxLength){
        if (currentField === ssnFields)
    }
}
    /* run initial form configuration */
    function setUpPage(){
        createEventListeners();
        generateHolder();
    }
    if (window.addEventListener){
        window.addEventListener("load", setUpPage, false);
    } else if (window.attachEvent){
        window.attachEvent("onload", setUpPage);
    }
    
    // Create function to validate fields on form
        function validateRequired() {
            var inputElements = document.querySelectorAll("#contactinfo input");
            var errorDiv = document.getElementById("errorText");
            var elementCount = inputElements.length;var requiredValidity = true;
            var currentElement;
        try 
         {
        for(var i = 0; i < elementCount; i++) {
    
    /* validate all input elements in fieldset */
    currentElement = inputElements[i];
        if (currentElement.value === "") {
            currentElement.style.background = "rgb(255,233,233)";
            requiredValidity = false;
        } 
        else
         {
        currentElement.style.background = "white";
        }
       }
        if (requiredValidity === false) {
            throw "Please complete all fields.";
        } 
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    } 
    catch(msg) {
       errorDiv.style.display = "block";
       errorDiv.innerHTML = msg;
       formValidity = false;
    }
 }

    /* create event listeners */
    function createEventListeners() {
        var form = document.getElementsByTagName("form")[0];
       if (form.addEventListener) {
           form.addEventListener("submit", validateForm, false);
        } 
        else if (form.attachEvent) {
           form.attachEvent("onsubmit", validateForm);
        }
        var ssnFields = document.getElementsByClassName("ssn");
        for (var i = 0; i < ssnFields.length; i++) {
            if (ssnFields[i].addEventListener){
                ssnFields[i].addEventListener("input", advanceSsn, false);
            } else if (ssnFields[i].attachEvent){
                ssnFields[i].attachEvent("oninput", advanceSsn);
            }
        }
    }

    /* validate form */
    function validateForm(evt) {
       if (evt.preventDefault) {
          evt.preventDefault(); // prevent form from submitting
        } 
        else {
            evt.returnValue = false; // prevent form from submitting in IE8
        }
            formValidity = true; // reset value for revalidation
            validateRequired();
        if (formValidity === true) {
           document.getElementsByTagName("form")[0].submit();
    }

    /* validate numbers*/
    function validateForm(evt) {
        if (evt.preventDefault) {
           evt.preventDefault(); // prevent form from submitting
        } else {
           evt.returnValue = false; // prevent form from submitting in IE8
           formValidity = true; // reset value for revalidation
           validateRequired();
           validateNumbers();
        if (formValidity === true) {
           document.getElementsByTagName("form")[0].submit();
        }
       }
    }
}

    /* run setup functions when page finishes loading */
    if (window.addEventListener) {
        window.addEventListener("load", createEventListeners, false);
    } else if (window.attachEvent) {
       window.attachEvent("onload", createEventListeners);
    } 

    /* validate number fields for older browsers */
    function validateNumbers() {
       var numberInputs = document.querySelectorAll(
           "#contactinfo input[type=number]");
       var elementCount = numberInputs.length;
       var numErrorDiv = document.getElementById("numErrorText");
       var numbersValidity = true;
       var currentElement;
       try {
          for (var i = 0; i < elementCount; i++) {

    // validate all input elements of type "number" in fieldset
    currentElement = numberInputs[i];
    if (isNaN(currentElement.value) || (currentElement.value === "")) {
             currentElement.style.background = "rgb(255,233,233)";
             numbersValidity = false;
            } else {
               currentElement.style.background = "white";
            }
   }
       if (numbersValidity === false) {
          throw "Zip and Social Security values must be numbers.";
       }
       numErrorDiv.style.display = "none";
       numErrorDiv.innerHTML = "";
    }
    catch(msg) {
      numErrorDiv.style.display = "block";
      numErrorDiv.innerHTML = msg;
      formValidity = false;
    }
 }