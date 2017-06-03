var playerChooseView = function battle(v) {
    'use strict';
    //if player choise rock, change image playerCard to rockCard...
    //if player choise paper, change image playerCard to paperCard...
    //if player choise scissors, change image playerCard to scissorsCard...
    if (v === 'rock') {
        playerCard.src = "img/rockCard.png";
    } else if (v === 'paper') {
        playerCard.src = "img/paperCard.png";
    } else {
        playerCard.src = "img/scissorsCard.png";
    }
};