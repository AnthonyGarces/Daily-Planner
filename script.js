const actionBox = document.getElementsByClassName("ActionBox");
const saveAction = document.getElementsByClassName("SaveAction");
const actionArea = document.getElementsByClassName("ActionArea");
// var actionBox = [$("#ActionBox1"), $("#ActionBox2")]
const actionBox1 = $("#ActionBox1");
const actionBox2 = $("#ActionBox2");
const actionBox3 = $("#ActionBox3");
const actionBox4 = $("#ActionBox4");
const actionBox5 = $("#ActionBox5");
const actionBox6 = $("#ActionBox6");
const actionBox7 = $("#ActionBox7");
const actionBox8 = $("#ActionBox8");
const actionBox9 = $("#ActionBox9");
const form2 = $("");
var time = 



//Need to take the input and store it in an array
//need to 
//moment() is how you call the current time with moments.js
//look up methods in the moments.js documentation to learn how to manipulate that data
console.log(moment());
$("#Save1").on("click", function(e) {
    e.preventDefault();
    var time= actionBox1.attr("name");
    var action = actionBox1.val();
    localStorage.setItem(time, action);
});

$("#Save2").on("click", function(e) {
    e.preventDefault();
    var time= actionBox2.attr("name");
    var action = actionBox2.val();
    localStorage.setItem(time, action);
});

$("#Save3").on("click", function(e) {
    e.preventDefault();
    var time= actionBox3.attr("name");
    var action = actionBox3.val();
    localStorage.setItem(time, action);
});

$("#Save4").on("click", function(e) {
    e.preventDefault();
    var time= actionBox4.attr("name");
    var action = actionBox4.val();
    localStorage.setItem(time, action);
});

$("#Save5").on("click", function(e) {
    e.preventDefault();
    var time= actionBox5.attr("name");
    var action = actionBox5.val();
    localStorage.setItem(time, action);
});

$("#Save6").on("click", function(e) {
    e.preventDefault();
    var time= actionBox6.attr("name");
    var action = actionBox6.val();
    localStorage.setItem(time, action);
});

$("#Save7").on("click", function(e) {
    e.preventDefault();
    var time= actionBox7.attr("name");
    var action = actionBox7.val();
    localStorage.setItem(time, action);
});

$("#Save8").on("click", function(e) {
    e.preventDefault();
    var time= actionBox8.attr("name");
    var action = actionBox8.val();
    localStorage.setItem(time, action);
});

$("#Save9").on("click", function(e) {
    e.preventDefault();
    var time= actionBox9.attr("name");
    var action = actionBox9.val();
    localStorage.setItem(time, action);
});
actionBox1.val(localStorage.getItem("09AM"));  
actionBox2.val(localStorage.getItem("10AM"));
actionBox3.val(localStorage.getItem("11AM"));
actionBox4.val(localStorage.getItem("12PM"));   
actionBox5.val(localStorage.getItem("01PM"));    
actionBox6.val(localStorage.getItem("02PM"));    
actionBox7.val(localStorage.getItem("03PM"));    
actionBox8.val(localStorage.getItem("04PM"));    
actionBox9.val(localStorage.getItem("05PM"));    


//as a challenge, see if i can write the code to run on a single click event
//siblings on a dom tree, look up jquery methods, each method specifically, tables are places to look
//the traversing doms methods on the cheatsheet is where i wanna look