var saveButton = $(".save-button");
var currentHour = moment().format("HH"); 

//This changes the rows color

$(".row1").attr("data-time", moment("8:00 am", "h:mm a").format("HH"));
$(".row2").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$(".row3").attr("data-time", moment("10:00 am", "hh:mm a").format("HH"));
$(".row4").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));
$(".row5").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));
$(".row6").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$(".row7").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$(".row8").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$(".row9").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$(".row10").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));
$(".row11").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));

//A loop to change the colors

for (var i= 0; i <= 12; i++){
    
}


//jQuery
$(document).ready(function() {
    $(".current-date").append();

    function currentDay(){
    $(".current-date").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    } setInterval(currentDay, 1000);

    console.log(currentDay);

})

//This is to chance the row colors based on time






    


//Display current date
