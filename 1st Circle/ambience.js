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



var divs = document.getElementsByTagName('div');

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;


for ( var i=0; i < divs.length; i++ ) {
 	

    var thisDiv = divs[i];
    

    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);
    
    thisDiv.style.top = randomTop +"px";
    thisDiv.style.left = randomLeft +"px";
    
}

function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}