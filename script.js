const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
  const angle = Math.PI/18;
  let colors=['red','blue','green','yellow','black','orange','grey']

class SPIKE{
    constructor(radius,color,angle_start){
        this.radius  = radius;
        this.color = color;
        this.angle_start = angle_start;
        this.speed = 10 + Math.random()*10;
    }
    draw(){
        let centerX = canvas.width/2;
        let centerY = canvas.height/2;
        ctx.beginPath()
         ctx.arc(centerX,centerY,this.radius ,this.angle_start,this.angle_start+angle ,false)
         ctx.lineTo(centerX,centerY)
         ctx.fillStyle = this.color; 
         ctx.fill();
        ctx.closePath() 
    } 
    update(){
        this.radius+=this.speed;
        if(this.radius>400){
            this.speed =- this.speed;
        }
        if(this.radius<40){
            this.speed =- this.speed;
        } 
         this.draw()  
    }
    
} 
window.addEventListener('resize',function(){
    canvas.height= window.innerHeight;
    canvas.width = window.innerWidth;
})
  

let spikes = new Array()
for(let i=0;i<2*Math.PI/angle;i++){
    spikes[i] = new SPIKE(Math.random()*179+21, colors[Math.floor(Math.random()*colors.length)],angle*i);
}
console.log(spikes)



 function animate(){
    requestAnimationFrame(animate) 
     ctx.fillStyle ='white';
    ctx.clearRect(0,0,canvas.width , canvas.height)
    for(let i=0;i<36;i++){
        spikes[i].update()
    }
   
   
   

}
animate()