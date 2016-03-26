// Declaring variables
var bestTime;
var start = new Date().getDate();

// Get random color function
function getRandomColor() {

    var letters = '0123456789ABCDEF'.split('');

    var color = '#';

    for (var i = 0; i < 6; i++ ) {

        color += letters[Math.floor(Math.random() * 16)];

    }

    return color;
}

// Random shapes, colors, positions and sizes appear function
function makeShapeAppear() {

    var top = Math.random() * 400;

    var left = Math.random() * 400;

    var width = Math.random() * 400;

    var height = (Math.random() * 200) + 100;

    if (Math.random() > 0.5){

        document.getElementById("shape").style.borderRadius = "50%";

    }else {

        document.getElementById("shape").style.borderRadius = "0";
    }


    document.getElementById("shape").style.backgroundColor = getRandomColor(); 

    document.getElementById("shape").style.height = height + "px";

    document.getElementById("shape").style.width = width + "px";

    document.getElementById("shape").style.top = top + "px";

    document.getElementById("shape").style.left = left + "px";

    document.getElementById("shape").style.display = "block";

    start = new Date().getTime();

}

// Random shape object randomly apppear function  
function appearAfterDelay() {

    setTimeout(makeShapeAppear, Math.random() * 2000);

}

appearAfterDelay();

 /* After user click on random shape object a new timer starts for new random shape
    by seconds. If user beats curent time then new best time is saved by seconds. */        
document.getElementById("shape").onclick = function() {

    document.getElementById("shape").style.display ="none"; 

    var end = new Date().getTime();

    var timeTaken = (end - start) / 1000;

    if (bestTime == null || undefined || timeTaken < bestTime) {                   
        bestTime = timeTaken;
        document.getElementById("bestTime").innerHTML = bestTime + "s"; 
    } 


    document.getElementById("timeTaken").innerHTML = timeTaken + "s";

    appearAfterDelay();

}