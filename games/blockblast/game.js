let score=0
let combo=0

function clearLines(){

for(let y=0;y<SIZE;y++){

if(board[y].every(v=>v)){

for(let x=0;x<SIZE;x++){

spawnExplosion(x*CELL,y*CELL)

board[y][x]=0

}

combo++

score+=100*combo

document.getElementById("combo").innerText="COMBO "+combo

}

}

document.getElementById("score").innerText=score

}

function loop(){

drawBoard()

updateParticles()

drawParticles()

requestAnimationFrame(loop)

}

loop()
