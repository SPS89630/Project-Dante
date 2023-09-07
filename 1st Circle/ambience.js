function random_music(audio)
{
  
return audio[Math.floor(Math.random()*audio.length)];
     
}

var audio = ['../media/audio/heartbeat-6895.mp3','../media/deepsigh.mp3','../media/meanbreath.mp3','../media/cocnretefootsteps.mp3'];
console.log(random_music(audio));
document.getElementById("ambience").src = random_music(audio);



function random_music2(audio2)
{
  
return audio2[Math.floor(Math.random()*audio2.length)];
     
}

var audio2 = ['../media/audio/heartbeat-6895.mp3','../media/deepsigh.mp3','../media/meanbreath.mp3','../media/cocnretefootsteps.mp3'];
console.log(random_music2(audio2));
document.getElementById("ambience2").src = random_music2(audio2);



// collect all the divs
var divs = document.getElementsByTagName('div');
// get window width and height
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// i stands for "index". you could also call this banana or haircut. it's a variable
for ( var i=0; i < divs.length; i++ ) {
 	
    // shortcut! the current div in the list
    var thisDiv = divs[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);
    
    // update top and left position
    thisDiv.style.top = randomTop +"px";
    thisDiv.style.left = randomLeft +"px";
    
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}