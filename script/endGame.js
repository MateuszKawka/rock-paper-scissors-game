var end = function () {
    'use strict';
    //Check for win
    if (playerPoints === 5) {
        alert('You win, for destroy you enemy again reload page');
    } else if (oponentPoints === 5) {
        alert('You lose, for try again reload page');
    }
};