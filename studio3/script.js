(function(){
    'use strict'
    console.log('reading JS');

    const gameStart = document.querySelector('#gameStart');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    const gameData = {
        cards: ['images/cloves1.pdf', 'images/cloves2.pdf', 'images/cloves3.pdf', 'images/cloves4.pdf', 'images/cloves5.pdf', 'images/dia1.pdf', 'images/dia2.pdf', 'images/dia3.pdf', 'images/dia4.pdf', 'images/dia5.pdf', 'images/hearts1.pdf', 'images/hearts2.pdf', 'images/hearts3.pdf', 'images/hearts4.pdf', 'images/hearts5.pdf', 'images/spades1.pdf', 'images/spades2.pdf', 'images/spades3.pdf', 'images/spades4.pdf', 'images/spades5.pdf'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };
    startGame.addEventListener('click', function(){
        gameControl.innerHTML = '<h2>You`re playing!</h2>';
        gameControl.innerHTML += '<button id="quit">End Game</button>';

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });

        // setUpTurn();
    });
});