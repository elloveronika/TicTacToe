//creating an empty array to later store the list of boxes
let myArrOfIBoxIds = [];
//here we are grabbing the container for all the boxes
let boxSections = document.querySelectorAll(".table section");
//creating a for loop to iterate over each itwm
for (let i = 0; i < boxSections.length; i++) {
  myArrOfIBoxIds.push(boxSections[i].id);
  //we are pushing all the box ids into the empty array
}
// console.log(myArrOfIBoxIds)
// document.querySelectorAll(".box").addEventListener("click", boxSelect);
// here we are adding an event listener to identify a click on a box
//only first box is being selected,, how do i select all

function boxSelect() {
  // this loop will identify which box was selected by grabbing my array which now holds box numbers
  for (let i = 0; i < myArrOfIBoxIds.length; i++) {
    console.log(i);
    document
      .getElementById(myArrOfIBoxIds[i])
      .addEventListener("click", function () {
        const playerTeamXorO = playerChoice(myArrOfIBoxIds[i]);
        // checkWin(playerTeamXorO);

        botPlacement(botChoice(playerTeamXorO));
        // checkWin(botChoice(playerChoice(myArrOfIBoxIds[i])));
      });
    //this is test
  }
}
boxSelect();
//called on boxSelect only because it is waiting on an even listener to do anything

function playerChoice(id) {
  let select = document.getElementById(id);
  let playerTeamXorO = document.querySelector("select").value;
  select.innerText = playerTeamXorO;
  return playerTeamXorO;
}

function botChoice(playerLetter) {
  //here we are identifying if box id has a value and if it doesnt then display bot choice letter
  let botLetter = "";
  if (playerLetter == "O") {
    botLetter = " X ";
  } else {
    botLetter = "O";
  }

  //   console.log(botLetter);
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
}

//create or add logic that will identify boxes without value to then fill it in with value of bot choice.. maybe with math.random we select a random box without a value

function checkWin(teamXorO) {
  //how can we check the win conditions against my squares' inner texts
  // my win conditions will be in a two dimensional array
  // what is a two dimensional array? nested arrays
}

//add logic that will use setTimeout to play against playchoice , this will be used on botchoice
// how can we get an array of table that is being updaed each time so that we can check to see if we have a winning condition
//the array that we are currently returning is technically not updating bot choice in its array
//do i create more logic inside the bot placement?
// or do I create a function that is calling on bot placement each time player makes a selection?
