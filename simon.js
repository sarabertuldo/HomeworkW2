
var buttons = document.getElementsByClassName('button');
var winCounter = document.getElementById('count');
var playerClickCounter = 0;
var delay = 0;

var sounds = {
    green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
};

var canClick = false;
var simonsChoices = [];


function playSound(element) {
    sounds[element.id].currentTime = 0;
    sounds[element.id].play();
}

function checkClicked(clickedButton) {
    if (clickedButton === simonsChoices[playerClickCounter]) {
        playerClickCounter++;
        if (playerClickCounter >= simonsChoices.length) {
            var wins = parseInt(winCounter.innerText) + 1;

            winCounter.innerText = wins;


            window.setTimeout(function () {
                getRandomButton();
            }, 300)
            playerClickCounter = 0;
        }
    }
    else {
        canClick = false;
        document.getElementById('footer').style.display = 'block';
    }

}

function highlightButtons() {
    var counter = 0;
    simonsChoices[0].classList.add('active');
    playSound(simonsChoices[0]);
    var buttonInterval = window.setInterval(function () {
        simonsChoices[counter].classList.remove('active');
        counter++;
        if (counter >= simonsChoices.length) {
            window.clearInterval(buttonInterval);
            canClick = true;
            return;
        }
        window.setTimeout(function () {
            playSound(simonsChoices[counter]);
            simonsChoices[counter].classList.add('active');
        }, 200)
    }, delay);
}

function getRandomButton() {
    canClick = false;
    var button = buttons[Math.floor(Math.random() * buttons.length)];
    simonsChoices.push(button);
    highlightButtons();
}

function startGame(del) {
    delay = del;
    document.getElementById('footer').style.display = 'none';
    simonsChoices = [];
    playerClickCounter = 0;
    winCounter.innerText = 0;
    getRandomButton();
}

(function (elements) {
    document.getElementById('footer').removeChild(document.getElementById('newGame'));
    for (var i = 0; i < elements.length; i++) {
        var el = document.createElement('button');
        el.id = 'new' + elements[i][0];
        el.innerText = 'New ' + elements[i][0] + ' Game';
        el.value = elements[i][1];
        el.addEventListener('click', function (e) {
            startGame(e.target.value);
        })
        document.getElementById('footer').appendChild(el);
    }
})([['Easy', 1000], ['Medium', 700], ['Hard', 400]]);

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mousedown', function (e) {
        if (canClick) {
            playSound(e.target);
            e.target.classList.add('active');
        }
    })
    buttons[i].addEventListener('mouseup', function (e) {
        if (canClick) {
            e.target.classList.remove('active');
            checkClicked(e.target);
        }
    })
}




