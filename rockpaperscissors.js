// 
// ## Step One: Getting the Buttons to work:
// 
// * Select all three buttons and using any sort of selection method you prefer.
// * Attach event listeners to each of them and make sure those are working. 
// This can be done with a simple function that just does a console log on click.

function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1)
    return randomNumber;
}

let buttons = document.getElementsByClassName("choice");
let value;
let winCount = 0;
let loseCount = 0;

for (let i = 0; i < buttons.length; i++) 
{
    buttons[i].addEventListener("click", e=> {
        let value = e.target.value;
        document.getElementById('user').innerText =`You picked ${value}!` ;
        let cpu = computerChoice();
        let user = userChoice(value);
        console.log(cpu);
        if (cpu === 1) {
            document.getElementById('computer').innerText = 'Computer chose rock!';
        }
        if (cpu === 2) {
            document.getElementById('computer').innerText = 'Computer chose paper!';
        }
        if (cpu === 3) {
            document.getElementById('computer').innerText = 'Computer chose scissors!';
        };

    function userChoice(choice) {
   
       if (userChoice === 1) {
           document.getElementById('user').innerText = 'You chose rock!';
       }
       if (userChoice === 2) {
           document.getElementById('user').innerText = 'You chose paper!';
       }
       if (userChoice === 3) {
           document.getElementById('Use').innerText = 'You chose scissors!';
       };
      if (cpu === userChoice) { document.getElementById}('computer').innerText = "It is a tie!";
    };
})
}
e.currentTarget
// 
// let dwayne = document.getElementById("dwayne");
// 
// dwayne.addEventListener("click", function userChoice(choice); {


//    if (userChoice === 1) {
//        document.getElementById('user').innerText = 'You chose rock!';
//    }
//    if (userChoice === 2) {
//        document.getElementById('user').innerText = 'You chose paper!';
//    }
//    if (userChoice === 3) {
//        document.getElementById('Use').innerText = 'You chose scissors!';
//    };
//   if (cpu === userChoice) { document.getElementById}('computer').innerText = "It is a tie!";
// };

//
// ## Step Two: Have the computer randomly select one
// * Build a function that that randomly selects a value [1, 2, 3]  or [rock, paper, scissors]. Either one of those is (or another option) is fine but explain why you chose the one you wanted to.
// * Return that value from the function

// // 
// // ## Step Three: Make the buttons do different things
// * Refactor the event listeners for the buttons to pass in a variable (or pull the value from elsewhere in the html). 
// * Based off the button clicked put a message in the page as to which button you clicked. This can be a div somewhere saying: "You chose rock!" or whatever other thing you prefer.
// * Take the value returned from the AI rock paper scissors function and log that onto the screen as well.
// 
// ## Step Four: Finishing Touches
// * Now you have a working version of Rock Paper Scissors for selecting items but you have to visually check to see who won. 
// * Compare your choice to the computers choice and add a message of who won the game or if it was a tie.
// * Add code to keep track of not only which game it is: this will show the current game so it will start at 1 as it's game 1 at the beginning,  but also what your current wins losses and ties are. 
// * Also add a message for the player to pick again to start a new game.
// 
//
// 
// prompt("Do you want to play again?")
// function newGame 