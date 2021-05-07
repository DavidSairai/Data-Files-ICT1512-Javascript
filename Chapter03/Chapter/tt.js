/*
     *  JavaScript 6th Edition
     *  Chapter 3
     *  Chapter case

     *  Tipton Turbines
     *  Calendar web page
     *  Author: David Sairai
     *  Date: 21 April 2021
     * Filename: tt.js
   */
  // global variables 
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var opponents = ["Lightning", "Combines", "Combines", "Combines", "Lightning", "Lightning", "Lightning", "Lightning", "Barn Raisers", "Barn Raisers", "Barn Raisers", "Sodbusters", "Sodbusters", "Sodbusters", "Sodbusters", "(off)", 
    "River Riders", "River Riders", "River Riders", "Big Dippers", "Big Dippers","Big Dippers", "(off)", "Sodbusters", "Sodbusters", "Sodbusters", "Combines", "Combines", "Combines", "(off)", "(off)"];

    var gameLocation = ["away", "away", "away", "away", "home", "home", "home", "home", "home", "home", "home", "away", "away", "away", "away", "", "away", "away", "away", "away", "away", "away", "", "home", "home", "home", "home", "home", "home", "", ""];

    //function to place daysOfWeek values in header row cells
    function addColumnHeaders(){
        var i = 0;
        while (1 < 7) {
            document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
            i++;
        }
    }
    //runs addColumnHeaders() function when page loads
    window.addEventListener("load", addColumnHeaders, false);

    //function to place day of the month value in first p element
    //within each table data cell that has an id
    function addCalendarDates(){
        var i = 1;
        var paragraphs = "";
        do{
            var tableCell = document.getElementById("08-" + i);
            paragraphs = tableCell.getElementsByTagName("p");
            paragraphs[0].innerHTML = i;
            i++;    
        }
        while (i <= 31);
    }
    //function to populate the calendar
    function setUpPage(){
        addColumnHeaders();
        addCalendarDates();
    }
    //runs setUpPage() function when page loads
    window.addEventListener("load", setUpPage, false);