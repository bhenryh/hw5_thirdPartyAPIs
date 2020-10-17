$(document).ready(function () {

    var CurrentDate = moment();
    $("#currentDay").text(moment().format('LLLL'));

    $(".saveBtn").on("click", function(){
        var active = $(this).siblings(".description").val()
        var hour = $(this).parent().attr("id")
        localStorage.setItem(hour, active)
    })
    function hourLoop() {
        var currentTime = moment().hours()
        console.log(currentTime);
        $(".time-block").each(function() {
            var timeCheck = parseInt($(this).attr("id").split("-")[1])
            console.log(timeCheck)
            if (timeCheck < currentTime) {
                $(this).children(".description").addClass("past")
            } else if (timeCheck === currentTime) {
                $(this).children(".description").addClass("present")
                $(this).children(".description").removeClass("past")
            } else {
                $(this).children(".description").addClass("future")
                $(this).children(".description").removeClass("past")
                $(this).children(".description").removeClass("present")
            }

        })
    }
    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    $("#hour-12 .description").val(localStorage.getItem("hour-12"))
    $("#hour-13 .description").val(localStorage.getItem("hour-13"))
    $("#hour-14 .description").val(localStorage.getItem("hour-14"))
    $("#hour-15 .description").val(localStorage.getItem("hour-15"))
    $("#hour-16 .description").val(localStorage.getItem("hour-16"))



    hourLoop();


})
