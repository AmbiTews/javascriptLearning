//Coding Challenge 1  and 2

const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

let markHigherBMI;
const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);
markHigherBMI = johnBMI > markBMI

if (markHigherBMI) {
    const diffBMI = johnBMI - markBMI;

    console.log("John's BMI is higher than Mark's!");
    console.log("John's BMI (" + johnBMI + ") is higher  than Mark's (" + markBMI + ") by " + diffBMI);
}
else {
    const diffBMI = markBMI - johnBMI;

    console.log("Mark's BMI is higher than John's!");
    console.log("Mark's BMI (" + markBMI + ") is higher  than John's (" + johnBMI + ") by " + diffBMI);
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
const ifDolphinMS = (avgScoreTeamDolphin >= 100);
const ifKolhasMS = (avgScoreTeamKolas >= 100);
if ((avgScoreTeamDolphin > avgScoreTeamKolas) && (ifDolphinMS)) {
    console.log(`Dolphin has achieved the minimum score of 100 and is the Winner! Score is  ${avgScoreTeamDolphin}`);
} else if ((avgScoreTeamKolas > avgScoreTeamDolphin) && (ifKolhasMS)) {
    console.log(`Kolas has achieved the minimum score and is  the Winner! Score is ${avgScoreTeamKolas}`);
} else {
    console.log("It's a TIE!");
}



//Coding Challenge 3
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
let bill = 275
tip = (bill >= 50 && bill <= 300) ? Number(.15 * bill) : Number(.20 * bill);
let totalBill = bill + tip;
console.log(`Steven should give ${tip} on bill ${bill} which makes total bill as ${totalBill}`);
