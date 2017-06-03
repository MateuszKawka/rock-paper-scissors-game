var oponentChoice = function () {
    'use strict';
    //Random number between 0-1
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        return "rock";
    } else if (computerChoice <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
};