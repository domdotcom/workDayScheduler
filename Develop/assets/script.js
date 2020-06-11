// DOM Ready
$(document).ready(function() {
var submit = document.getElementsByTagName('button');
// Moment
var currentDay = moment().format('MMMM DD, YYYY');
// add current day to its html id
$('#currentDay').text(currentDay);

var workdayHours = 
['8:00am','9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', 
'4:00pm', '5:00pm', '6:00pm','7:00pm', '8:00pm', '9:00pm', '10:00pm', '11:00pm'];

// Function creating time blocks, for loop through all hours array,create divs dynamically
function timeblockCreation(){
    for (i = 0; i < workdayHours.length; i++){
        var newRow = $('<div>')
        $(newRow).attr({class: 'row', id: 'row' + (i + 1) });
        $('.container').append(newRow);
        // left side time column
        var hour = $("<div>");
        $(hour).attr({ class: "hour col-1 flex", id: 8 + i }).text(workdayHours[i]);
        // text area for client input
        var description = $("<div>");
        $(description).attr("class", "description col-10");
        var descriptionRow = $("<div>").attr({ class: "row", id: "description" + (i + 1) });
        $(description).append(descriptionRow);
        var textArea = $("<textarea>").attr({ class: "col-12 flex", id: "textareabutton" + (i + 1) });
        $(descriptionRow).append(textArea);
        //right side column save button
        var saveBtn = $("<button>");
        $(saveBtn).attr({ class: "saveBtn col-1 flex", id: "button" + (i + 1) }).text("Save to schedule");
        $(newRow).append(hour, description, saveBtn);
    };
};
  

// still need to:
// check current timeslot, change color of time block before, current, past

function compareTime() {
    for (var i = 0; i < workdayHours.length; i++){
        
        var timeslot = moment().hour(8 + i);
        if (moment().isAfter(timeslot)){
            $('#description' + (i + 1)).css('background','#f1d1d1');
        } else if (moment().isBefore(timeslot)) {
            $('#description' + (i + 1)).css('background','#e8e4e1');
        } else {
            $('#description' + (i + 1)).css('background','#cceabb');
        }
    };
};

// add input to local storage
$('button').click(function() {
    event.preventDefault();

    localStorage.setItem

});

// clear schedule at end of day

 

// all functions calls
timeblockCreation();
compareTime();



// DOM Ready Close
});