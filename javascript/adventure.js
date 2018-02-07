console.log("hello");    
//clear info on the page for new game
clearLocation("steps");
clearLocation("player");
clearLocation("playerLoc");
clearLocation("treasureLoc");

// start to write game steps
// define the size of the game play area
var maxX =2;
var maxY =2;

//user start location
//set random location for player
var randomPLayerX = Math.floor((Math.random()*2) + 0);
var randomPlayerY = Math.floor((Math.random()*2) + 0);
var userX =randomPLayerX;
var userY =randomPlayerY;
//display player location
document.getElementById("playerLoc").innerHTML = "Player starting location: ("+userX+","+userY+")";

// hide the treasure location
//set random location for treasure  
var randomX = Math.floor((Math.random()*2) + 0);
var randomY = Math.floor((Math.random()*2) + 0);
var treasureX = randomX;
var treasureY = randomY;

//flag that controls loop
var treasureFound = false;

//play game process
//get user 's name
var name = prompt("welcome brave adventure ! what are you called?");
document.getElementById("player").innerHTML = "player: " + name;
// set number of times user can play
var count = 0;

//start the game
while(!treasureFound && count <= 10){
   var direction = prompt("what direciton would you like to go in? (north, south, east, west");
   console.log(direction)
   //temp vars, only use for checking validity of new user location after a move
   var newX;
   var newY;
   //see what new user location should be 
   //check if new user location is valid
   //check if new user location is treasure

   if(direction == "north"){
        newX = userX;
        newY = userY + 1;
        //neither value < 0, neither is > max
        // you can do combound conditional check
        if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
            var currentLocation = "from x: " +userX + "and from y: " + userY;
            updateLogTable(userX,userY,newX,newY)
            userX = newX;
            userY = newY;            
            var info = currentLocation + " to location x: " + userX + ", location y: " + userY;            
            updateColor(userX,userY,"blue");
            console.log(info);
            document.getElementById("gameNote").innerHTML = info;
        }else{
            var note = "there is no location to move next";
            console.log(note);
            document.getElementById("gameNote").innerHTML = note;
            updateLogTable(userX,userY,userX,userY);
        }
   }else if (direction == "east"){
        newX = userX +1;
        newY = userY;
         // you can do combound conditional check
         if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY)
         {
            var currentLocation = "from x: " +userX + " and from y: " + userY;
            updateLogTable(userX,userY,newX,newY)
            userX = newX;
            userY = newY;         
            var info = currentLocation + " to location x: " + userX + ", location y: " + userY;           
            updateColor(userX,userY, "blue");
            console.log(info);
        }else{
            var note = "there is no location to move next";
            console.log(note);
            document.getElementById("gameNote").innerHTML = note;
            updateLogTable(userX,userY,userX,userY);
        }
   }else if (direction == "south"){
       
       newX = userX;
       newY = userY -1;
        // you can do combound conditional check
        if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY)
        {
            var currentLocation = "from x: " +userX + " and from y: " + userY;
            updateLogTable(userX,userY,newX,newY)
            userX = newX;
            userY = newY;
            var info = currentLocation + " to location x: " + userX + ", location y: " + userY;           
            updateColor(userX,userY, "blue");
            console.log(info);
        }else{
            var note = "there is no location to move next";
            console.log(note);
            document.getElementById("gameNote").innerHTML = note;
            updateLogTable(userX,userY,userX,userY);
        }
   }else if (direction == "west"){
       
       newX = userX-1;
       newY = userY;
        // you can do combound conditional check
        if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY)
        {
            var currentLocation = "from x: " +userX + " and from y: " + userY;
            updateLogTable(userX,userY,newX,newY)
            userX = newX;
            userY = newY;
            var info = currentLocation + " to location x: " + userX + ", location y: " + userY;           
            updateColor(userX,userY,"blue");
            console.log(info);
        }else{
            var note = "there is no location to move next";
            console.log(note);
            document.getElementById("gameNote").innerHTML = note;
            updateLogTable(userX,userY,userX,userY);
        }
   }else{
        var info = "please enter a real drection";
       console.log(info);
       document.getElementById("gameNote").innerHTML = info;         
   }

     //update steps 
     //update times user can play
     count = count +1;
     document.getElementById("steps").innerHTML = "total steps played: " + count;
     upateText(userX,userY,count);

   //when user found treasure
   if(userX == treasureX && userY == treasureY){
    console.log("you found the treasure");
    treasureFound = true;
    //display treasure location
    document.getElementById("treasureLoc").innerHTML = "Treasure location: ("+treasureX+","+treasureY+")";
    //update treasure location to the map
    upateText(treasureX,treasureY, "treasure location");
    document.getElementById("gameNote").innerHTML = "congrat!!... you have won the game..!!"; 
    count = 0;
   }
   //update location of player on the man
   updateColor(treasureX,treasureY,"green");
};

    //end the game when user hit more than 10 times
    if(count > 10){
        document.getElementById("treasureLoc").innerHTML = "Treasure location: ("+treasureX+","+treasureY+")";
        document.getElementById("gameNote").innerHTML = "game times already ended..please play again.."; 
        upateText(treasureX,treasureY, "treasure location");
        count = 0;
    };

//update color to HTML element
function updateColor( x, y, color){
    var elementId = "position"+x+y;
    document.getElementById(elementId).style.backgroundColor = color;
}

//update value to HTML element 
function upateText(x,y,val){
 var elementId = "position"+x+y;
    if(val != "treasure location"){
        document.getElementById(elementId).innerHTML = "step number: " + val;
    }else{
        document.getElementById(elementId).innerHTML = val;    
    } 
}

//update log table
function updateLogTable(fromX,fromY,toX,toY){
    var currentLocation = "from (" +fromX + "," + fromY+")";
    var info = currentLocation + " to (" +toX + "," + toY+")";
    var findTableElement = document.getElementById("logColumn");
    var createTH = document.createElement("th");              
    findTableElement.appendChild(createTH).innerHTML = info;
}

//clear location
function clearLocation(elementId){
    document.getElementById(elementId).innerHTML = "";
}