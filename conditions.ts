let classDay: string = "wednesday";
if (classDay === "wednesday") {
  console.log("Go to the class");
} else {
  console.log("Do nothing");
}

// else if condition

let homeFood: string = "DaalChawal";
let moneyIHave: number = 100;
let zingerBurger: number = 350;
if (homeFood === "DaalChawal" && moneyIHave == 300) {
  console.log("Go out and buy biryani");
} else if (moneyIHave >= zingerBurger) {
  console.log("buy Zinger");
} else {
  console.log("eat daalChawal");
}

let isRaining = true;
if (isRaining) {
  console.log("wear rain coat");
} else {
  console.log("wear sunGlasses");
}

//switch condition

let weekDayNumber: number = 3;

switch (weekDayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
}
