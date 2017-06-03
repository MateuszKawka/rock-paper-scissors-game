var oponentChooseView = function battle(v) {
    'use strict';
    //if oponent choise rock, change image oponentCard to rockCard...
    //if oponent choise paper, change image oponentCard to paperCard...
    //if oponent choise scissors, change image oponentCard to scissorsCard...
    if (v === 'rock') {
        oponentCard.src = "img/rockCard.png";
    } else if (v === 'paper') {
        oponentCard.src = "img/paperCard.png";
    } else {
        oponentCard.src = "img/scissorsCard.png";
    }
};