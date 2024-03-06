(function(){
    'use strict';
    console.log('running js');

    const gameStart = document.querySelector('#gameStart');
    const gameControl = document.querySelector('#gameControl');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    const gameData = {
        cards: ['images/cloves1.pdf', 'images/cloves2.pdf', 'images/cloves3.pdf', 'images/cloves4.pdf', 'images/cloves5.pdf', 'images/dia1.pdf', 'images/dia2.pdf', 'images/dia3.pdf', 'images/dia4.pdf', 'images/dia5.pdf', 'images/hearts1.pdf', 'images/hearts2.pdf', 'images/hearts3.pdf', 'images/hearts4.pdf', 'images/hearts5.pdf', 'images/spades1.pdf', 'images/spades2.pdf', 'images/spades3.pdf', 'images/spades4.pdf', 'images/spades5.pdf'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        q1: ["red", "black"],
        q2:["higher", "lower"],
        q3:["inside", "outside"],
        q4: ["spades", "hearts", "diamonds", "cloves"],
        index: 0,
        currentPlayer: 0 // Index of the current player
    };

    gameStart.addEventListener('click', function(){
        gameControl.innerHTML = '<h2>You`re Playing!</h2>';
        gameControl.innerHTML += '<button id="quit">Quit</button>';

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });

        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML = `<p>${gameData.players[gameData.currentPlayer]} choose a card</p>`;
    
        const currentQuestion = gameData.index % 4; // Alternates between 0, 1, 2, 3
        let buttonHTML = '';
    
        switch (currentQuestion) {
            case 0: // Question 1: Red or Black
                buttonHTML = '<button class="roll" data-choice="red">Red</button><button class="roll" data-choice="black">Black</button>';
                break;
            case 1: // Question 2: Higher or Lower
                buttonHTML = '<button class="roll">Higher</button><button class="roll">Lower</button>';
                break;
            case 2: // Question 3: Inside or Outside
                buttonHTML = '<button class="roll">Inside</button><button class="roll">Outside</button>';
                break;
            case 3: // Question 4: Suite
                buttonHTML = '<button class="roll" data-choice="spades">Spades</button><button class="roll" data-choice="hearts">Hearts</button><button class="roll" data-choice="diamonds">Diamonds</button><button class="roll" data-choice="cloves">Cloves</button>';
                break;
            default:
                break;
        }
    
        actionArea.innerHTML = buttonHTML;
        
        document.querySelectorAll('.roll').forEach(function(btn) {
            btn.addEventListener('click', function() {
                const choice = this.getAttribute('data-choice');
                flipCard(choice);
            });
        });
    };

    function flipCard(choice) {
        const randomCardIndex = Math.floor(Math.random() * gameData.cards.length);
        const randomCard = gameData.cards[randomCardIndex];
        
        const currentQuestion = gameData.index % 4; // Alternates between 0, 1, 2, 3
        
        switch (currentQuestion) {
            case 0: // Question 1: Red or Black
                if ((choice === "red" && randomCard.includes("hearts")) || 
                    (choice === "black" && !randomCard.includes("hearts"))) {
                    game.innerHTML += "<p>Correct! The card is " + choice + ".</p>";
                } else {
                    game.innerHTML += "<p>Incorrect! The card is " + (choice === "red" ? "black" : "red") + ".</p>";
                }
                break;
            case 1: // Question 2: Higher or Lower
                // Logic to compare the card with the previous card can be implemented here
                // For simplicity, let's just display the randomly chosen card
                game.innerHTML += "<p>The card chosen is: " + randomCard + "</p>";
                break;
            case 2: // Question 3: Inside or Outside
                // Logic to check if the current card is inside or outside the range of the previous two cards
                // For simplicity, let's just display the randomly chosen card
                game.innerHTML += "<p>The card chosen is: " + randomCard + "</p>";
                break;
            case 3: // Question 4: Suite
                const suite = randomCard.split("/")[1].split(".")[0]; // Extract suite from card URL
                if (gameData.q4.includes(suite)) {
                    game.innerHTML += "<p>Correct! The suite is " + suite + ".</p>";
                } else {
                    game.innerHTML += "<p>Incorrect! The suite is not " + suite + ".</p>";
                }
                break;
            default:
                break;
        }
        // Increment index to alternate between players
        gameData.index++;

        // Alternate between players for each question
        gameData.currentPlayer = (gameData.currentPlayer + 1) % 2;
    };
})();