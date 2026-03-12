if("serviceWorker" in navigator){

navigator.serviceWorker.register("sw.js")

}

function vibrate(){

if(navigator.vibrate){

navigator.vibrate(20)

}

}

function saveScore(game,score){

let data=JSON.parse(
localStorage.getItem("scores")||"{}"
)

if(!data[game]){

data[game]=[]

}

data[game].push(score)

data[game].sort((a,b)=>b-a)

data[game]=data[game].slice(0,10)

localStorage.setItem(
"scores",
JSON.stringify(data)
)

}

function getScores(game){

let data=JSON.parse(
localStorage.getItem("scores")||"{}"
)

return data[game]||[]

}
