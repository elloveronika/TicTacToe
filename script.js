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
// document.querySelectorAll(".box").addEventListener("click", boxSelect);
// here we are adding an event listener to identify a click on a box
//only first box is being selected,, how do i select all

function boxSelect() {
  // this loop will identify which box was selected by grabbing my array which now holds box numbers
  for (let i = 0; i < myArr.length; i++) {
    console.log(i);
    document.getElementById(myArr[i]).addEventListener("click", function () {
      playerChoice(myArr[i]);
      botChoice(playerChoice(myArr[i]));
      botPlacement(botChoice(playerChoice(myArr[i])), i);
    });
    //this is test
  }
}
boxSelect();
//called on boxSelect only because it is waiting on an even listener to do anything

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

  //   console.log(botLetter);
  return botLetter;
}
function botPlacement(botLetter, playerPlacement) {
  //   console.log(`hi player ${playerPlacement}`);
  let random = Math.floor(Math.random() * myArr.length);
  let randomValue = document.getElementById(myArr[random]).innerText;

  let theMappedArrayOfIds = myArr.map((id) => {
    let theDom = document.getElementById(id);
    let theInnerText = theDom.innerText;
    return theInnerText;
    // console.log(Boolean(theInnerText));
  });
  let newMaapedIds = theMappedArrayOfIds.filter((x) => !Boolean(x));
  console.log(newMaapedIds);
  // console.log(random);
  //how to create a condtional that can check if random value has only one box left OR
  if (newMaapedIds.length > 1) {
    while (randomValue !== "") {
      console.log(random);
      random = Math.floor(Math.random() * myArr.length);
      randomValue = document.getElementById(myArr[random]).innerText;
      // return randomValue;

      // random++
    }
  }

  //create a function that will identify empty string
  //using the boolean object method???
  console.log(
    `this is random ${random} and this is randomValue ${randomValue}`
  );
  document.getElementById(myArr[random]).innerText = botLetter;
  // let value = document.getElementById(myArr[i]).innerText;
  // for (let i = 0; i < myArr.length; i++) {
  // while()

  //
  //   console.log(`this is inside for loop: ${myArr[i]}`);
  // console.log(`hi bot ${myArr[i]}`);
  // while (randomValue !== "") {
  //   console.log(`this is inside while loop ${random++}`);
  // console.log(`this is random ${random()}`);
  // while (randomValue !== "") {
  //
  //   random++;
  // }

  //   if (value == "" && randomValue == "" && myArr[random] !== myArr[i]) {
  //     //   let random = Math.random();
  //     //out of the 8 boxes available here how do i get a random box
  //     //using math random to give me a number out of the boxes without a value,
  //     document.getElementById(myArr[random]).innerText = botLetter;
  //     console.log(`this is inside if  statement ${i} & ${playerPlacement} `);
  //   }
  // }

  //   console.log(`this is inside botPlacement ${botLetter}`);
}
//create or add logic that will identify boxes without value to then fill it in with value of bot choice.. maybe with math.random we select a random box without a value

function checkWin() {
  //create a function that will start keep track for placement of each value in order to have a winner.. if statement to check for all possible winning outcomes
  //
  //
}
//add logic that will use setTimeout to play against playchoice , this will be used on botchoice
