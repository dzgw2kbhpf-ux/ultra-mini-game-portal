let particles=[]

function spawnExplosion(x,y){

for(let i=0;i<20;i++){

particles.push({

x:x,
y:y,

vx:(Math.random()-0.5)*6,
vy:(Math.random()-0.5)*6,

life:40

})

}

}

function updateParticles(){

particles.forEach(p=>{

p.x+=p.vx
p.y+=p.vy

p.life--

})

particles=particles.filter(p=>p.life>0)

}

function drawParticles(){

particles.forEach(p=>{

ctx.fillStyle="cyan"

ctx.fillRect(p.x,p.y,4,4)

})

}
