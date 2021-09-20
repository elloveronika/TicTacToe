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
document.querySelector(".table").addEventListener("click", boxSelect);
// here we are adding an event listener to identify a click on a box
//only first box is being selected,, how do i select all

function boxSelect() {
  // this loop will identify which box was selected by grabbing my array which now holds box numbers
  for (let i = 0; i < myArr.length; i++) {
    document.getElementById(myArr[i]).addEventListener("click", function () {
      playerChoice(myArr[i]);
      botChoice(playerChoice(myArr[i]));
      botPlacement(botChoice(playerChoice(myArr[i])));
    });
    //this is test
  }
}

function playerChoice(choice) {
  let select = document.getElementById(choice);
  let playerSelect = document.querySelector("select").value;
  select.innerText = playerSelect;
  //   select.addEventListener("click");
  //   if (playerSelect == "O") {
  //     this.innerText = "O";
  //   } else {
  //     this.innerText = "X";
  //   }
  return playerSelect;
  // await botChoice(playerChoice())
  //maybe somehow call  botchoice  inside this function
}

function botChoice(playerLetter) {
  //here we are identifying if box id has a value and if it doesnt then display bot choice letter
  let botLetter = "";
  if (playerLetter == "O") {
    botLetter = " X ";
  } else {
    botLetter = "O";
  }

  console.log(botLetter);
  return botLetter;
}
function botPlacement(placement) {
  for (let i = 0; i < myArr.length; i++) {
    let value = document.getElementById(myArr[i]).innerText;
    //   console.log(`this is inside for loop: ${myArr[i]}`);
    if (value == "") {
      //   let random = Math.random();
      //out of the 8 boxes available here how do i get a random box
      //using math random to give me a number out of the boxes without a value,
      document.getElementById(myArr[i]).innerText = placement;
    }
  }
  console.log(`this is inside botPlacement ${placement}`);
}

//create or add logic that will identify boxes without value to then fill it in with value of bot choice.. maybe with math.random we select a random box without a value

function checkWin() {
  //create a function that will start keep track for placement of each value in order to have a winner.. if statement to check for all possible winning outcomes
  //
  //
}
