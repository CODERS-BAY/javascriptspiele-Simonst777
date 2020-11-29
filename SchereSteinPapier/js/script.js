let whoHasWon;



function play(numberUser) {
    
    let numberComp = Math.random() * 3;
    numberComp = Math.floor(numberComp) + 1;

    if(numberComp == numberUser) {
        console.log('unentschieden');
        whoHasWon = 'unentschieden!'
    }
    else if (numberComp == 1 && numberUser == 2) {
        console.log('Player has won!');
        whoHasWon = 'Player has won!';
    }
    else if (numberComp == 2 && numberUser == 3) {
        console.log('Player has won!');
        whoHasWon = 'Player has won!';
    }
    else if(numberComp == 3 && numberUser == 1){
        console.log('Player has won!');
        whoHasWon = 'Player has won!';
    }
    else if(numberUser == 3 && numberComp == 1){
        console.log('Computer has won!');
        whoHasWon = 'Computer has won!';
    }
    else if(numberUser == 1 && numberComp == 2){
        console.log('Computer has won!');
        whoHasWon = 'Computer has won!';
    } 
    else if(numberUser == 2 && numberComp == 3){
        console.log('Computer has won!');
        whoHasWon = 'Computer has won!';
    }

    let resultP = document.getElementById('result');
    resultP.append(whoHasWon);



}

