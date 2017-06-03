var rockCard = document.querySelector("#rock"),
    paperCard = document.querySelector("#paper"),
    scissorsCard = document.querySelector("#scissors"),
    
    oponentCard = document.querySelector("#oponentCardImage"),
    playerCard = document.querySelector("#playerCardImage"),
    
    playerPoints = 0,
    oponentPoints = 0,

    playerPointsSection = document.querySelector("#playerPoints"),
    oponentPointsSection = document.querySelector("#oponentPoints"),

    result = document.querySelector("#result");


rockCard.addEventListener('click', function () {
    'use strict';
    var playerChoice = "rock",
        computerChoice = oponentChoice();
    //
    fight(playerChoice, computerChoice);
    //Change player card use view;
    playerChooseView(playerChoice);
    //Change oponent card use view
    oponentChooseView(computerChoice);
    //Check who win
    end();
    //And the same things in other addEventListeners.
});

paperCard.addEventListener('click', function () {
    'use strict';
    var playerChoice = "paper",
        computerChoice = oponentChoice();
    fight(playerChoice, computerChoice);
    playerChooseView(playerChoice);
    oponentChooseView(computerChoice);
    end();
});

scissorsCard.addEventListener('click', function () {
    'use strict';
    var playerChoice = "scissors",  
        computerChoice = oponentChoice();
    fight(playerChoice, computerChoice);
    playerChooseView (playerChoice);
    oponentChooseView(computerChoice);
    end();
});

