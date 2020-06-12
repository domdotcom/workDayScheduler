$(document).ready(function() {

// all function calls
timeblockCreation();
compareTime();
pageRefresh();

// DOM Ready Close
});

// Moment
var currentDay = moment().format('MMMM DD, YYYY');
// add current day to its html id
$('#currentDay').text(currentDay);

var workdayHours = 
['8:00am','9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm'];

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
        // add local storage to textarea
        var textArea = $("<textarea>").attr({ class: "col-12 flex", id: "textareabutton" + (i + 1) }).text(localStorage.getItem("textareabutton" + (i + 1)));
        $(descriptionRow).append(textArea);

        //right side column save button
        var saveBtn = $("<button>");
        $(saveBtn).attr({ class: "saveBtn col-1 flex fas fa-lock", id: "button" + (i + 1) });
        $(newRow).append(hour, description, saveBtn);
    };
// save input to scheduler
    $('button').click(function(e) {
        event.preventDefault();
        // console.log('save button clicked');
        var eachButton = this.id;
        var toStore = $(('#textarea' + eachButton)).val();
        localStorage.setItem(('textarea' + eachButton), toStore);
    });
    
};
  
// check current timeslot, change color of time block before, current, past

function compareTime() {
    for (var i = 0; i < workdayHours.length; i++){
        
        var timeslot = moment().hour(8+i);
        // time past
        if (moment().isAfter(timeslot)){
            $('#description' + (i + 1)).css('background','#f1d1d1');
        // time future
        } else if (moment().isBefore(timeslot)) {
            $('#description' + (i + 1)).css('background','#e8e4e1');
        // time current
        } else {
            $('#description' + (i + 1)).css('background','#cceabb');
        }
    };
};

// reload page continually to keep colors updated
function pageRefresh() {
    setTimeout(function(){ location.reload(); }, 120000);
  };







