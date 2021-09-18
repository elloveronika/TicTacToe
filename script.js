//creating an empty array to later store the list of boxes
let myArr = [];
//here we are grabbing the container for all the boxes
let boxSections = document.querySelectorAll(".table section");
//creating a for loop to iterate over each itwm
for (let i = 0; i < boxSections.length; i++) {
  myArr.push(boxSections[i].id);
  //we are pushing all the box ids into the empty array
}
// console.log(myArr)
document.querySelector(".box").addEventListener("click", boxSelect);
// here we are adding an event listener to identify a click on a box

function boxSelect() {
  // this loop will identify which box was selected by grabbing my array which now holds box numbers
  for (let i = 0; i < myArr.length; i++) {
    document.getElementById(myArr[i]).addEventListener("click", function () {
      playerChoice(), console.log(botChoice(playerChoice()));
    });
    //this is test
  }
}

function playerChoice() {
  let select = document.querySelector(".box");
  let playerSelect = document.querySelector("select").value;
  select.innerText = playerSelect;
  //   select.addEventListener("click");
  if (playerSelect == "O") {
    this.innerText = "O";
  } else {
    this.innerText = "X";
  }
  return playerSelect;
  // await botChoice(playerChoice())
  //maybe somehow call  botchoice  inside this function
}

function botChoice(playerLetter) {
  let botLetter = "";
  if (playerLetter == "O") {
    return "hi im X ";
  } else {
    return "hello, im o";
  }
}
//create or add logic that will identify boxes without value to then fill it in with value of bot choice.. maybe with math.random we select a random box without a value

function checkWin() {
  //create a function that will start keep track for placement of each value in order to have a winner.. if statement to check for all possible winning outcomes
  //
  //
}
