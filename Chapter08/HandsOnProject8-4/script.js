/*    JavaScript 6th Edition
      Chapter 8
      Hands-on Project 8-4

      Author: David Sairai
      Date:   3 June 2021

      Filename: script.js
*/
   "use strict"; // interpret document contents in JavaScript strict mode

   // Global Variable
        var list = [];
   
    // Function Generate List
    function generateList() {
        var listItems = document.getElementsByTagName("li");
        for (var i = listItems.length - 1; i >= 0; i--) 
        {
            document.getElementsByTagName("ol")[0].
            removeChild(listItems[i]);
        }
        for (var i = 0; i < list.length; i++) {
            var newItem = "<span class='first'>first</span>" + list[i];
            var newListItem = document.createElement("li");
            newListItem.innerHTML = newItem;
            document.getElementsByTagName("ol")[0].appendChild(newListItem);
            var firstButtons = document.querySelectorAll(".first");
            var lastFirstButton = firstButtons[firstButtons.length - 1];
            if (lastFirstButton.addEventListener)
            {
                lastFirstButton.addEventListener("click", moveToTop, false);
            } else if (lastFirstButton.attachEvent) {
                lastFirstButton.attachEvent("onclick", moveToTop);
            }
        }
    }   

    // Function add Items
    function addItem() {
        var newItem = document.getElementById("newItem");
        list.push(newItem.value);
        newItem.focus();
        newItem.value = "";
        generateList();
    }

    // Function moveTop
   function moveToTop(evt) {
       if (evt === undefined) { // get caller element in IE8
        evt = window.event;
   }
        var callerElement = evt.target || evt.srcElement;
        var listItems = document.getElementsByTagName("li");
        var parentItem = callerElement.parentNode;
        for (var i = 0; i < list.length; i++) {
            if (parentItem.innerHTML.search(list[i]) !== -1) {
                var itemToMove = list.splice(i, 1);
                list.unshift(itemToMove);
            }
        }
        generateList();
    }

    // Function createEventListener
    function createEventListener() {
        var addButton = document.getElementById("button");
        if (addButton.addEventListener) {addButton.addEventListener("click", addItem, false);
    } else if (addButton.attachEvent) {
        addButton.attachEvent("onclick", addItem);
    }
   }
   if (window.addEventListener) {
       window.addEventListener("load", createEventListener, false);
  } else if (window.attachEvent) {
      window.attachEvent("onload", createEventListener);
    }