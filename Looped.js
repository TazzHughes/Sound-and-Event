//prompt user to enter first name
firstName = prompt("firstName");
//prompt user to enter last name
lastName = prompt("lastName");
//create a new var for the full name
var fullName;
//this combines the first and last name with a space
fullName = firstName +" "+ lastName
//full name length should be less than 20 characters
while(fullName.length > 20){
    //if full name is more than 20 characters alert for shorter name
    alert("Please Enter a name less than 20 characters")
    //if full is more than 20 characters after alert prompt to re-enter first and last name
    firstName = prompt("firstName");
    lastName = prompt("lastName");
    //check character length again
    fullName = firstName +""+ lastName
    
}
//Prompt to enter badge number 
badgeNumber = prompt("badge Number")
//badge number has to be less than 1000
while(badgeNumber > 1000){
    //if badge number is more than 1000 alert will pop up
    alert("Please enter a badge number less than 1000")
    //if alert is triggered promt to re-enter badge number
    badgeNumber = prompt("badge Number")
}
//this function is my alert for the countdown
function myAlert() {
    //for loop will run/countdown 10 times
    for(count =10; count > -1; count--) {
        //if countdown is less than 5
        if(count < 5 ){
            //Alert user less than halfway if countdown is less than 5 plus shw current countdown
        alert("WARNING less than halfway to launch" + count)
        }
    //alerts will show the actual countdown/numbers
        else {alert("count=" +count);}
    
    }
}
//calling the function
myAlert();
//setting function to play audio that will link to start button
function playAudio()
{
 //creating var for audio adding actual audio
var audio = new Audio('Outerspace.mp3');
//Calling the function to play audio
audio.play();
}
//The idea was to create a function that would pause the audio that would be linked to stop button
function stopAudio()
{
    //Tried setting the variable to pause audio
    var audio = Audio('');
    //This would call the function to stop playback
    audio.pause();
}