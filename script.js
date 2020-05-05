var saveButton = $(".save-button");


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
$(".row11").attr("data-time", moment("6:00 pm", "h:mm a").format("HH"));



//jQuery
$(document).ready(function() {

    $(".current-date").append();

    function currentDay(){
    $(".current-date").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    } setInterval(currentDay, 1000);

    console.log(currentDay);

    //function and variables to change color
   
    var currentHour = parseInt(moment().format('H'));
    var chooseHour = parseInt($('#hour').text());
    
    console.log(currentHour);
    console.log(chooseHour);

    if (chooseHour === currentHour){
        $(".form-control").addClass('present');
    } else if (chooseHour < currentHour){
        $(".form-control").addClass('past');
    } else {
        $(".form-control").addClass('future');
    }


    //Variables to create the local storage/
  
    saveButton.on("click", function(){
        var hr = $(this).attr("data-index");
        var task = $("#task").val();
        localStorage.setItem(hr, task);

    })
    


})










//This is to chance the row colors based on time






    


//Display current date
