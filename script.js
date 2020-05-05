var saveButton = $(".save-button");




//This changes the rows color

$("#8Task").attr("data-index", moment("8:00 am", "h:mm a").format("HH"));
$("#9Task").attr("data-index", moment("9:00 am", "h:mm a").format("HH"));
$("#10Task").attr("data-index", moment("10:00 am", "hh:mm a").format("HH"));
$("#11Task").attr("data-index", moment("11:00 am", "hh:mm a").format("HH"));
$("#12Task").attr("data-index", moment("12:00 pm", "hh:mm a").format("HH"));
$("#13Task").attr("data-index", moment("1:00 pm", "h:mm a").format("HH"));
$("#14Task").attr("data-index", moment("2:00 pm", "h:mm a").format("HH"));
$("#15Task").attr("data-index", moment("3:00 pm", "h:mm a").format("HH"));
$("#16Task").attr("data-index", moment("4:00 pm", "h:mm a").format("HH"));
$("#17Task").attr("data-index", moment("5:00 pm", "h:mm a").format("HH"));
$("#18Task").attr("data-index", moment("6:00 pm", "h:mm a").format("HH"));



//jQuery
$(document).ready(function() {

    $(".current-date").append();

    function currentDay(){
    $(".current-date").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    } setInterval(currentDay, 1000);

    console.log(currentDay);

    //function and variables to change color. This whill do a loop through all the elements inside the tr

    $("tr").each(function(i) {
        var currentHour = parseInt(moment().format('H'));
        console.log(currentHour);
        var chooseHour = parseInt($(this).find(".save-button").attr("data-index"));
        
        console.log(currentHour);
        console.log(chooseHour);

        if (chooseHour === currentHour){
            $(this).find('.form-control').addClass('present');
        } else if (chooseHour < currentHour){
            $(this).find('.form-control').addClass('past');
        } else {
            $(this).find('.form-control').addClass('future');
        }
    })
    
   
//}

    


    //Variables to create the local storage/

    var tasks = ["#task1", ]
  
    saveButton.on("click", function(){
        var hr = $(this).attr("data-index");
        var task = $("task").val();
        localStorage.setItem(hr, task);

    })
    


})










//This is to chance the row colors based on time






    


//Display current date
