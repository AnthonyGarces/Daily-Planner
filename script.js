const actionBox = document.getElementsByClassName("ActionBox");
const saveAction = document.getElementsByClassName("SaveAction");
const actionArea = document.getElementsByClassName("ActionArea");
const actionBox2 = $("#ActionBox2");
const form2 = $("");
var time = 



//Need to take the input and store it in an array
//need to 
//moment() is how you call the current time with moments.js
//look up methods in the moments.js documentation to learn how to manipulate that data
console.log(moment());

$("#Save2").on("click", function(e) {
    e.preventDefault();
    var time= actionBox2.attr("name");
    var action = actionBox2.val();
      
    localStorage.setItem(time, action);
});
actionBox2.val(localStorage.getItem("10AM"));  

//as a challenge, see if i can write the code to run on a single click event
//siblings on a dom tree, look up jquery methods, each method specifically, tables are places to look
//the traversing doms methods on the cheatsheet is where i wanna look