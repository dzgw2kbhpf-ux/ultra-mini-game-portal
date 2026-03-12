const canvas=document.getElementById("game")
const ctx=canvas.getContext("2d")

const SIZE=8
const CELL=60

canvas.width=SIZE*CELL
canvas.height=SIZE*CELL

let board=[]

for(let y=0;y<SIZE;y++){

board[y]=[]

for(let x=0;x<SIZE;x++){

board[y][x]=0

}

}

function drawBlock(x,y,color){

let px=x*CELL
let py=y*CELL

let g=ctx.createLinearGradient(px,py,px,py+CELL)

g.addColorStop(0,color)
g.addColorStop(1,"#0aa")

ctx.fillStyle=g

ctx.fillRect(px,py,CELL-3,CELL-3)

}

function drawBoard(){

ctx.clearRect(0,0,canvas.width,canvas.height)

for(let y=0;y<SIZE;y++){
for(let x=0;x<SIZE;x++){

ctx.fillStyle="#1b1f35"

ctx.fillRect(x*CELL,y*CELL,CELL-2,CELL-2)

if(board[y][x]){

drawBlock(x,y,"#00f7ff")

}

}

}

}
