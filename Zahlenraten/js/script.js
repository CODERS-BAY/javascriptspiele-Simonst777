let counter;
let randomNumber; 



function saveCounter() {

counter = document.getElementById('counterValue').value;

let divCounter = document.getElementById('counter');
divCounter.style.display = 'none';
console.log('display none');

let saveNumber = document.getElementById('saveNumber');
saveNumber.style.display = 'none';

let divGuessing = document.getElementById('guessing');
divGuessing.style.display = 'block';


let howMuchNumber = document.getElementById('howMuchValue').value;


randomNumber = Math.random()*howMuchNumber+1;  // 0 - 1 ;  1 - 50  0,99*50
randomNumber = Math.floor(randomNumber);
    

}


function play() {
    
    if(counter > 1){
        let guessingNumb = document.getElementById('guessingNumber').value;
        guessingNumb=parseInt(guessingNumb);
        console.log(guessingNumb);
        console.log(randomNumber);

        if(randomNumber > guessingNumb ) {
                let numbertosmall = document.getElementById('notEnough');
                numbertosmall.style.display = 'block';
                numbertosmall.append(" Deine Zahl war" + guessingNumb + ".");
        }
        else if (randomNumber < guessingNumb) {
            let numberbig = document.getElementById('tooMuch');
            numberbig.style.display = 'block';
            numberbig.append(" Deine Zahl war: " + guessingNumb + ".");
        }
        else {
            let youHaveWon = document.getElementById('won');
            youHaveWon.style.display = 'block';
            let playAgain = document.getElementById('playAgain');
            playAgain.style.display = 'block';
           
        }

    } 
    else {
        let divGameOver = document.getElementById('gameOver');
        divGameOver.style.display = 'block';
        let playAgain = document.getElementById('playAgain');
        playAgain.style.display = 'block';
    }
    counter--;
    
   
}
function playAgainFunc() {
    
    location.reload();
}
