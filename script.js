var actionBox = [
    $("#ActionBox1"), $("#ActionBox2"), $("#ActionBox3"),
    $("#ActionBox4"), $("#ActionBox5"), $("#ActionBox6"),
    $("#ActionBox7"), $("#ActionBox8"), $("#ActionBox9"),]
var currTime = moment().format('kk');
//name attr is the time in military time, to be compared to currTime for the if else statements
var boxTime = [
    actionBox[0].attr("name"), actionBox[1].attr("name"), actionBox[2].attr("name"),
    actionBox[3].attr("name"), actionBox[4].attr("name"), actionBox[5].attr("name"),
    actionBox[6].attr("name"), actionBox[7].attr("name"), actionBox[8].attr("name")
];

//if else if statements toggling necessary class
if (boxTime[0] < currTime) {
    actionBox[0].last().addClass("past");
} else if (boxTime[0] == currTime){
    actionBox[0].last().addClass("present");
} else if (boxTime[0] > currTime) {
    actionBox[0].last().addClass("future");
}

if (boxTime[1] < currTime) {
    actionBox[1].last().addClass("past");
} else if (boxTime[1] == currTime){
    actionBox[1].last().addClass("present");
} else if (boxTime[1] > currTime) {
    actionBox[1].last().addClass("future");
}

if (boxTime[2] < currTime) {
    actionBox[2].last().addClass("past");
} else if (boxTime[2] == currTime){
    actionBox[2].last().addClass("present");
} else if (boxTime[2] > currTime) {
    actionBox[2].last().addClass("future");
}

if (boxTime[3] < currTime) {
    actionBox[3].last().addClass("past");
} else if (boxTime[3] == currTime){
    actionBox[3].last().addClass("present");
} else if (boxTime[3] > currTime) {
    actionBox[3].last().addClass("future");
}

if (boxTime[4] < currTime) {
    actionBox[4].last().addClass("past");
} else if (boxTime[4] == currTime){
    actionBox[4].last().addClass("present");
} else if (boxTime[4] > currTime) {
    actionBox[4].last().addClass("future");
}

if (boxTime[5] < currTime) {
    actionBox[5].last().addClass("past");
} else if (boxTime[5] == currTime){
    actionBox[5].last().addClass("present");
} else if (boxTime[5] > currTime) {
    actionBox[5].last().addClass("future");
}

if (boxTime[6] < currTime) {
    actionBox[6].last().addClass("past");
} else if (boxTime[6] == currTime){
    actionBox[6].last().addClass("present");
} else if (boxTime[6] > currTime) {
    actionBox[6].last().addClass("future");
}

if (boxTime[7] < currTime) {
    actionBox[7].last().addClass("past");
} else if (boxTime[7] == currTime){
    actionBox[7].last().addClass("present");
} else if (boxTime[7] > currTime) {
    actionBox[7].last().addClass("future");
}

if (boxTime[8] < currTime) {
    actionBox[8].last().addClass("past");
} else if (boxTime[8] == currTime){
    actionBox[8].last().addClass("present");
} else if (boxTime[8] > currTime) {
    actionBox[8].last().addClass("future");
}


function dispTime() {
    $("#currentDay").text(JSON.stringify(moment().format('dddd, MMMM Do, hh')) + "ish")
}


//Save info on click functions
$(".saveBtn").on("click", function(e) {
    e.preventDefault();
    var value=$(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
});

function dispTask(){
actionBox[0].val(localStorage.getItem("hr9"));  
actionBox[1].val(localStorage.getItem("hr10"));
actionBox[2].val(localStorage.getItem("hr11"));
actionBox[3].val(localStorage.getItem("hr12"));   
actionBox[4].val(localStorage.getItem("hr13"));    
actionBox[5].val(localStorage.getItem("hr14"));    
actionBox[6].val(localStorage.getItem("hr15"));    
actionBox[7].val(localStorage.getItem("hr16"));    
actionBox[8].val(localStorage.getItem("hr17"));
};

dispTime();
dispTask();


