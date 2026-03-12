const audioCtx=new (window.AudioContext||window.webkitAudioContext)()

function beep(freq){

let o=audioCtx.createOscillator()
let g=audioCtx.createGain()

o.connect(g)
g.connect(audioCtx.destination)

o.frequency.value=freq

o.start()

g.gain.exponentialRampToValueAtTime(
0.0001,
audioCtx.currentTime+0.2
)

}
