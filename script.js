$(document).ready(function(){

    // Gets the local storage values for all time blocks and sets them if they already exist.
    // 9AM
    var t0 = localStorage.getItem("9am");
    $("#9-am").text(t0);

    // 10AM
    var t1 = localStorage.getItem("10am");
    $("#10-am").text(t1);

    // 11AM
    var t2 = localStorage.getItem("11am");
    $("#11-am").text(t2);

    // 12PM
    var t3 = localStorage.getItem("12pm");
    $("#12-pm").text(t3);

    // 1PM
    var t4 = localStorage.getItem("1pm");
    $("#1-pm").text(t4);

    // 2PM
    var t5 = localStorage.getItem("2pm");
    $("#2-pm").text(t5);

    // 3PM
    var t6 = localStorage.getItem("3pm");
    $("#3-pm").text(t6);

    // 4PM
    var t7 = localStorage.getItem("4pm");
    $("#4-pm").text(t7);
    
    // 5PM
    var t8 = localStorage.getItem("5pm");
    $("#5-pm").text(t8);

//-------------------------------------------------------------------------------------------
    $(".saveBtn").on("click", function() {
        //console.log(this);
        var value = $(this).siblings(".description").val(); // This gets the VALUE of the description in jQuery
        var time = $(this).siblings(".hour").text();
        localStorage.setItem(time, value);
        $("this").siblings(".description").textContent(localStorage.value);

    });
    // Displays the current date and time
    $("#currentDay").text(moment().format("llll"));// I used moment function to get date and time format

    // Determines which color class to apply based on the current hour
    var elements = $(".time-block");
    var d = new Date();
   var h = d.getHours();
      // I use for loop to add and remove the time interval Past, Present and Future 
    for (i = 0; i < elements.length; i++) {
        var t = parseInt(elements[i].getAttribute("data-hour"));

        if (h < t) {
            elements[i].classList.add('future');
            elements[i].classList.remove('past');
            elements[i].classList.remove('present');
        }  else if (h > t) {
            elements[i].classList.add('past');
            elements[i].classList.remove('future');
            elements[i].classList.remove('present');
        } else if (h === t) {
            elements[i].classList.add('present');
            elements[i].classList.remove('future');
            elements[i].classList.remove('past');
        } else if (h > 16 && h < 9) {
            elements[i].classList.add('future');
            elements[i].classList.remove('past');
            elements[i].classList.remove('present');
        }
    }

});