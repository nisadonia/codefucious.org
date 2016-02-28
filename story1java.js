// JavaScript Document

console.log("javascript is running");

function pictureTree() {
    var myTree =" ";
    var myColor =" ";
    //var myYears =" ";
	myTree = document.getElementById("fruit").value;
    myColor = document.getElementById("color").value;
    
	document.getElementById("afterQuest").innerHTML = "<form id='tree' name='tree' onsubmit='display(); return false;' method='post'>" +
        "<label>String character = </label>" + userName + "<label>;<br /></label>"+
		"<label>String world = </label>" + userWorld + "<label>;<br /></label>"+
        "<label>String fruit = </label>" + myTree + "<label>;<br /></label>"+
        "<label>String color = </label>" + myColor + "<label>;<br /></label>"+
        "<label>boolean water = </label>" + myWater + "<label>;<br /></label>"+
        "<label>String temp = </label>" + myTemp + "<label>;<br /></label>"+
        "<label>int cycle = </label>" + myCycle + "<label>;<br /></label>"+
        "<label>int size = </label>" + mySize + "<label>;<br /></label>"+
        "<label>String dogColor = </label>" + myDogColor + "<label>;<br /></label>"+
        "<label>int years = </label>" + myYears + "<label>;<br /></label>"+
		"</form>" +
		"<p id='returnMessage'></p>";
    
	return false;
        //"<img src='./pictures/Tree/Apple/treeapblue.png' />" + myTree + "<label>;<br /></label>"+

}

function display() {
    var myTree =" ";
    var userName =" ";
    var userWorld =" ";
    var myColor =" ";
    var myWater =" ";
    var myTemp = " ";
    var myCycle =" ";
    var mySize =" ";
    var myYears =" ";
	myTree = document.getElementById("fruit").value;
    userName = document.getElementById("form").userName.value;
    userWorld = document.getElementById("form").userWorld.value;
    myColor = document.getElementById("color").value;
    myWater = document.getElementById("water").value;
    myTemp = document.getElementById("temp").value;
    myCycle = document.getElementById("cycle").value;
    mySize = document.getElementById("size").value;
    myDogColor = document.getElementById("dogColor").value;
    myYears = document.getElementById("years").value;
    
		document.getElementById("afterQuest").innerHTML = "<form id='display' name='display' onsubmit='display(); return false;' method='post'>" +
"<label>Welcome to </label>" + userWorld + "<label>, </label>"+ userName + "<label>! This is a world populated by </label>" + myColor + "<label> </label>" + myTree + "<label> trees and </label>" + myDogColor + "<label> colored animals. Do the trees on this world require water? Did you say </label>" + myWater + "<label>? Let me check my guide... You're right! Anyway, these trees take </label>" + myCycle + "<label> months to be fully grown. On this world, the animals are as big as </label>" + mySize + "<label> </label>" + myTree + "<label>s! Isn't that cool? They live for </label>" + myYears + "<label> years!</label> </form>";
	
	return false;
}

