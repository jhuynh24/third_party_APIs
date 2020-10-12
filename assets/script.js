$(document).ready(function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY'));
    
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log(time, text);
        localStorage.setItem(time, text);
    });

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));


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

    var interval = setInterval(currentTime, 1000);

})