const shapes=[

[[1]],

[[1,1]],
[[1],[1]],

[[1,1,1]],
[[1],[1],[1]],

[[1,1],[1,1]]

]

function clone(x){

return JSON.parse(JSON.stringify(x))

}

function randomShape(){

return clone(shapes[Math.floor(Math.random()*shapes.length)])

}

function generateSmartPiece(){

return randomShape()

}
