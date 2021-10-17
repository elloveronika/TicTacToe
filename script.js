//creating an empty array to later store the list of boxes
let playerScore = 1;
let botScore = 1;
let myArrOfIBoxIds = [];
//here we are grabbing the container for all the boxes
let boxSections = document.querySelectorAll(".table section");
//creating a for loop to iterate over each itwm
for (let i = 0; i < boxSections.length; i++) {
  myArrOfIBoxIds.push(boxSections[i].id);
  //we are pushing all the box ids into the empty array
} // here we are adding an event listener to identify a click on a box
//only first box is being selected,, how do i select all

// this loop will identify which box was selected by grabbing my array which now holds box numbers
let didWin = false;
//whwen we are trying to decalre a boolean or state a different boolean value when want to start with a false point to then make it true
for (let i = 0; i < myArrOfIBoxIds.length; i++) {
  // console.log(i);
  //each
  document
    .getElementById(myArrOfIBoxIds[i])
    .addEventListener("click", function () {
      if (didWin) {
        return;
      }
      console.log("inside event listener, value of didWin: ", didWin);
      const playerTeamXorO = playerChoice(myArrOfIBoxIds[i]);

      console.log(
        `This is right outside the if else statement player team x or o value: ${playerTeamXorO}`
      );

      //this is reassigning a boolean based on player value
      didWin = checkWin(playerTeamXorO);

      if (didWin) {
        console.log(`this is playerScore ${playerScore++}`);
        return;
      }

      // botPlacement(botChoice(playerTeamXorO));

      //this is returning a boolean based on bot value which is dependant on plare choice
      didWin = checkWin(botPlacement(botChoice(playerTeamXorO)));

      if (didWin) {
        console.log(`this is possibly the bot point ${botScore++}`);
        return;
      }

      // console.log(`this is inside the event listener function ${didWin}`);
    });
  document.getElementsByClassName("botScore").innerText = botScore;

  document.getElementsByClassName("playerScore").innerText = playerScore;
}
//with each if condition , one checking for player win and the other for bot win with the boolean value coming didWin, when the if statement runs we are going to stop the event listener somehow , maybe with a return maybe with a break
//main things i have to handle are the botchoice win and player
//

//called on boxSelect only because it is waiting on an even listener to do anything

function playerChoice(id) {
  let selectedSquare = document.getElementById(id);
  let playerTeamXorO = document.querySelector("select").value;
  selectedSquare.innerText = playerTeamXorO;
  return playerTeamXorO;
}

function botChoice(playerLetter) {
  //here we are identifying if box id has a value and if it doesnt then display bot choice letter
  let botLetter = "";
  if (playerLetter == "O") {
    botLetter = "X";
  } else {
    botLetter = "O";
  }

  return botLetter;
}

//here we are returning the innerText of a box element with the provided id
function getInnerTextById(id) {
  let domElement = document.getElementById(id);
  let innerTextOfElement = domElement.innerText;
  return innerTextOfElement;
}

function botPlacement(botLetter) {
  //creating a new array with the ids of squares with empty spaces
  let idsOfEmptySquares = myArrOfIBoxIds.filter(
    (id) => !Boolean(getInnerTextById(id))
  );
  console.log(idsOfEmptySquares);

  //how to create a condtional that can check if random value has only one box left OR
  if (idsOfEmptySquares.length > 0) {
    const random = Math.floor(Math.random() * idsOfEmptySquares.length);
    const botSelectedSquareId = idsOfEmptySquares[random];
    document.getElementById(botSelectedSquareId).innerText = botLetter;
  }
  return botLetter;
}

//create or add logic that will identify boxes without value to then fill it in with value of bot choice.. maybe with math.random we select a random box without a value

function checkWin(teamXorO) {
  //how can we check the win conditions against my squares' inner texts
  // my win conditions will be in a two dimensional array
  // what is a two dimensional array? nested arrays

  console.log("inside checkWin, teamXorO: ", teamXorO);
  let winConditionsArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let isWinner = winConditionsArr.some(
    (winCondition) =>
      winCondition.every((id) => {
        let isPlayerSquare = getInnerTextById(`box${id}`) == teamXorO;
        console.log(getInnerTextById(`box${id}`), teamXorO, isPlayerSquare);
        return isPlayerSquare;
      })
    //checkWinner is returning a boolean
  );
  console.log("inside checkWinner, isWinner: ", isWinner);
  return isWinner;
}

//how do i stop the game
//calculate player vs bot points
