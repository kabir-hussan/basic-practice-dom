// Option 1: directly added in HTML

//Option 2: using function in js file
//Important: It will use most of times
//HTML:  <button onclick="makePurple()">Make Purple</button>
function makePurple()
{
    document.body.style.backgroundColor= 'purple';
}

//Option:3
//HTML: <button id="make-yellow">Make Yellow</button>

const makeYellowButton= document.getElementById('make-yellow');
makeYellowButton.onclick=makeYellow;

function makeYellow()
{
    document.body.style.backgroundColor= 'yellow';
}

// Option: 3 another [We will use it sometimes]
//HTML:  <button id="make-blue">Make Blue</button>

const makeBlueButton= document.getElementById('make-blue');
makeBlueButton.onclick= function makeBlue(){
    document.body.style.backgroundColor= 'blue';
}

// AddEventListener Option: 4

// html part:     <!-- option 4 -->
    // <button id="make-pink">Make Pink</button>

const makePinkButton= document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink)

function makePink(){
    document.body.style.backgroundColor= 'pink';
}

// Option: 4 another
// HTML: <button id="make-orange">Make Orange</button>

const orangeButton= document.getElementById('make-orange');
orangeButton.addEventListener('click', function makeOrange(){
    document.body.style.backgroundColor='orange';
})

// Option : 4 Final
//Important: It will use most times***
// HTML:  <button id="make-green">Make Green</button>
document.getElementById('make-green').addEventListener("click", function(){
    document.body.style.backgroundColor='green';
})