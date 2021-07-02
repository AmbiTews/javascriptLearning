//JavaScript Fundamentals – Part 1

//Coding Challenge 1
/*

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/
/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/
const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

let markHigherBMI;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = johnBMI > markBMI;

if (markHigherBMI) {
  const diffBMI = johnBMI - markBMI;

  console.log("John's BMI is higher than Mark's!");
  console.log(
    "John's BMI (" +
      johnBMI +
      ") is higher  than Mark's (" +
      markBMI +
      ") by " +
      diffBMI
  );
} else {
  const diffBMI = markBMI - johnBMI;

  console.log("Mark's BMI is higher than John's!");
  console.log(
    "Mark's BMI (" +
      markBMI +
      ") is higher  than John's (" +
      johnBMI +
      ") by " +
      diffBMI
  );
}

// Coding Challenge #3

/*
const avgScoreTeamDolphin = (96 + 108 + 89) / 3;
const avgScoreTeamKolas = (88 + 91 + 110) / 3;


if (avgScoreTeamDolphin > avgScoreTeamKolas) {
    console.log(`Dolphin is the Winner! Score is  ${avgScoreTeamDolphin}`);
} else if (avgScoreTeamKolas > avgScoreTeamDolphin) {
    console.log(`Kolas is the Winner! Score is ${avgScoreTeamKolas}`);
} else {
    console.log("It's a TIE!");
}
*/
const avgScoreTeamDolphin = (97 + 112 + 101) / 3;
const avgScoreTeamKolas = (109 + 95 + 123) / 3;
const ifDolphinMS = avgScoreTeamDolphin >= 100;
const ifKolhasMS = avgScoreTeamKolas >= 100;
if (avgScoreTeamDolphin > avgScoreTeamKolas && ifDolphinMS) {
  console.log(
    `Dolphin has achieved the minimum score of 100 and is the Winner! Score is  ${avgScoreTeamDolphin}`
  );
} else if (avgScoreTeamKolas > avgScoreTeamDolphin && ifKolhasMS) {
  console.log(
    `Kolas has achieved the minimum score and is  the Winner! Score is ${avgScoreTeamKolas}`
  );
} else {
  console.log("It's a TIE!");
}

//Coding Challenge 4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
*/

let tip;
let bill = 275;
tip = bill >= 50 && bill <= 300 ? Number(0.15 * bill) : Number(0.2 * bill);
let totalBill = bill + tip;
console.log(
  `Steven should give ${tip} on bill ${bill} which makes total bill as ${totalBill}`
);

//JavaScript Fundamentals – Part 2
//Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

("use strict");

const calcAverage = (s1, s2, s3) => {
  let avg = (s1 + s2 + s3) / 3;
  return avg;
};
const avgDolhins = calcAverage(85, 54, 41);
const avgKolas = calcAverage(23, 34, 27);

const checkWinner = (avgDolhins, avgKolas) => {
  const winner =
    avgDolhins >= 2 * avgKolas
      ? `Dolhins wins ${avgDolhins} vs. ${avgKolas}`
      : avgKolas >= 2 * avgDolhins
      ? `Kolas wins ${avgKolas} vs. ${avgDolhins}`
      : `No one wins`;

  return winner;
};

console.log(`Average Score of Dolphin Team is  ${avgDolhins}`);
console.log(`Average Score of Kolas Team is  ${avgKolas}`);
console.log(checkWinner(avgDolhins, avgKolas));

//Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
*/

const calcTip = (billValue) => {
  const tipVal =
    billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
  return tipVal;
};

const bill = new Array(125, 555, 44);
const tip = new Array();
const totalBill = new Array();

let i, j, k;
const billLength = bill.length;
for (i = 0; i < billLength; i++) {
  tip.push(calcTip(bill[i]));
}
console.log(`Bill values are :  ${bill}`);
console.log(`Tips values are :  ${tip}`);

const tipLength = bill.length;

for (j = 0, k = 0; j < billLength, k < tipLength; j++, k++) {
  totalBill.push(bill[j] + tip[k]);
}
console.log(`Total Bills are  : ${totalBill}`);

//Coding Challenge #3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

const markMiller = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const johnSmith = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const str =
  markMiller.calcBMI() > johnSmith.calcBMI()
    ? `${markMiller["fullName"]}'s  BMI ${markMiller["bmi"]} is higher than ${johnSmith["fullName"]}'s ${johnSmith["bmi"]} !`
    : `${johnSmith["fullName"]}'s  BMI ${johnSmith["bmi"]} is higher than ${markMiller["fullName"]}'s ${markMiller["bmi"]} !`; // through calcBMI we set the age property and post that we can retrieve it multiple times. Without running the object method that sets the age property we can't get the set property value;
console.log(str);

//Coding Challenge 4
/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints:
*/

const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
const tips = new Array();
const totals = new Array();
const billLength = bills.length;

const calcTip = (bills) => {
  for (let i = 0; i < billLength; i++) {
    var tip =
      bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2;
    tips.push(tip);
    totals.push(tip + bills[i]);
  }
  console.log(`Tips are ${tips}`);
  console.log(`Total Bill are ${totals}`);
  console.log(`Bills are ${bills}`);
};

console.log(calcTip(bills));
