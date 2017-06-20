var fight = function (player, oponent) {
    'use strict';
    if (player === oponent) {
        result.textContent = "tie";
    }
    if (player === "rock") {
        if (oponent === "scissors") {
            // rock wins
            ++playerPoints; // add point for win fight
            playerPointsSection.innerHTML = playerPoints; // update points view
            result.innerHTML = "You win!"; // Present fight result
            //Same things for other if's 
        } else if (oponent === "paper") {
            // paper wins
            ++oponentPoints;
            oponentPointsSection.innerHTML = playerPoints;
            result.innerHTML = "You lose! Try again.";
        }
    }
    if (player === "paper") {
        if (oponent === "rock") {
            // paper wins
            ++playerPoints;
            playerPointsSection.innerHTML = playerPoints;
            result.innerHTML = "You win!";
        } else if (oponent === "scissors") {
            // scissors wins
            ++oponentPoints;
            oponentPointsSection.innerHTML = playerPoints;
            result.innerHTML = "You lose! Try again.";
        }
    }
    if (player === "scissors") {
        if (oponent === "paper") {
            // scissors wins
            ++playerPoints;
            playerPointsSection.innerHTML = playerPoints;
            result.innerHTML = "You win!";

        } else if (oponent === "rock") {
            // rock wins
            ++oponentPoints;
            oponentPointsSection.innerHTML = playerPoints;
            result.innerHTML = "You lose! Try again.";
        }
    }
};