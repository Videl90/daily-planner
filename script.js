var saveButton = $(".save-button");



//jQuery
$(document).ready(function() {

    /*function inputText(){
        for (var i = 1 ; i <= 11; i++);{
            var key = i + ":00";
            //var task = $(".form-control").val(localStorage.getItem(key));
            console.log(task);
            console.log(localStorage.getItem(key));
        }
    }
    inputText();*/
    
    renderTasks()

    function renderTasks() {        
        
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
        
       
    
        //Variables to create the local storage/
            saveButton.on("click", function(){
            var hr = $(this).attr("data-index");
            console.log(hr);
            var task = $(this).siblings("td").children().val();
            console.log(this)
            localStorage.setItem(hr, task);
            
        })
    
    
    }
    
    $(".time8").val(localStorage.getItem("8:00"));
    $(".time9").val(localStorage.getItem("9:00"));
    $(".time10").val(localStorage.getItem("10:00"));
    $(".time11").val(localStorage.getItem("11:00"));
    $(".time12").val(localStorage.getItem("12:00"));
    $(".time13").val(localStorage.getItem("13:00"));
    $(".time14").val(localStorage.getItem("14:00"));
    $(".time15").val(localStorage.getItem("15:00"));
    $(".time16").val(localStorage.getItem("16:00"));
    $(".time17").val(localStorage.getItem("17:00"));
    $(".time18").val(localStorage.getItem("18:00"));
 })


    
    







