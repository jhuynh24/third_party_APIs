$(document).ready(function() {

    // Set the date
    $("#currentDay").text(moment().format('MMMM Do YYYY'));

    // Save button code
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log(time, text);
        localStorage.setItem(time, text);
    });


    // Code for local storage persistance
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));


    // Code to access the current time for the scheduling display
    function currentTime() {
        var hour = moment().hour();
        console.log(hour);
        $(".time-block").each(function() {
            var time = parseInt($(this).attr("id"));
            if (time < hour) {
                $(this).addClass("past");
            }  
            else if (time === hour) {
                $(this).addClass("present");
                $(this).removeClass("past");
            }
            else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
        })
    }

    // Code for updating the clock
    var interval = setInterval(currentTime, 1000);

})