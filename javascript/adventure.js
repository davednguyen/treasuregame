console.log("hello");    

// start to write game steps
// define the size of the game play area
var maxX =2;
var maxY =2;

//user start location
var userX = 0;
var userY = 0;

// hide the treasure location 
var treasureX = 2;
var treasureY = 2;

//flag that controls loop
var treasureFound = false;

//get user 's name
var name = prompt("welcome brave adventure ! what are you called?");

while(!treasureFound){
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
            userX = newX;
            userY = newY;
            // if(userX == treasureX && userY == treasureY){
            //     console.log("you found the treasure");
            //     treasureFound = true;
            // }
        }else{
            console.log("there is no location to move next")
        }
   }else if (direction == "east"){
        newX = userX +1;
        newY = userY;
         // you can do combound conditional check
         if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY)
         {
            userX = newX;
            userY = newY;
            // if(userX == treasureX && userY == treasureY){
            //     console.log("you found the treasure");
            //     treasureFound = true;
            // }
        }else{
            console.log("there is no location to move next")
        }
   }else if (direction == "south"){
       newX = userX;
       newY = userY -1;
        // you can do combound conditional check
        if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY)
        {
            userX = newX;
            userY = newY;
            // if(userX == treasureX && userY == treasureY){
            //     console.log("you found the treasure");
            //     treasureFound = true;
            // }
        }else{
            console.log("there is no location to move next")
        }
   }else if (direction == "west"){
       newX = userX-1;
       newY = userY;
        // you can do combound conditional check
        if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY)
        {
            userX = newX;
            userY = newY;
            // if(userX == treasureX && userY == treasureY){
            //     console.log("you found the treasure");
            //     treasureFound = true;
            // }else{

            // }
        }else{
            console.log("there is no location to move next")
        }
   }else{
       console.log("please enter a real drection");
   }

   if(userX == treasureX && userY == treasureY){
    console.log("you found the treasure");
    treasureFound = true;
   }

   treasureFound = true;
};