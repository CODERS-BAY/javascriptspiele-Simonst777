let calcMonster = 0;
let g = document.getElementById('planets');
g = g.options[g.selectedIndex].value;




function calculateMonsterdistance() {

    let monsterDistance = document.getElementById('entfernungMonster');
    calcMonster = Math.random() * 90 +10;
    calcMonster = Math.round(calcMonster);
    monsterDistance.innerHTML = calcMonster;

    console.log(monsterDistance);
}

function shoot() {
    
    let degree = parseInt(document.getElementById('winkel').value);
    console.log(degree);
    degree = degree * (Math.PI/180);

    let force = parseInt(document.getElementById('kraft').value);
    console.log(force);
    let forceCalc;
    forceCalc = (((force * force) * Math.sin(2 * degree)) / g);
    forceCalc = Math.round(forceCalc);
    console.log(forceCalc);

    let htmlresult = document.getElementById('result');
    

    if(forceCalc == calcMonster) {
    
    htmlresult.innerHTML = forceCalc + ' Sie haben getroffen!';
  
    
    }
    else  {
        htmlresult.innerHTML = forceCalc +' Bitte versuchen Sie es nochmal!';
    }
}


