
//Assignment 1

let country = "India";
let continent = "Asia";
let population = 3;
let isIsland = false;
let language;

console.log(country);
console.log(continent);
console.log(population);
console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);



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
