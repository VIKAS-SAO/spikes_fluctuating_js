const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
var slider = document.getElementById("myRange");
let numbers = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
let angle = Math.PI/numbers;



canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
  let colors=['red','blue','green','yellow','black','orange','grey']

class SPIKE{
    constructor(radius,color,angle_start,angle){
        this.radius  = radius;
        this.color = color;
        this.angle_start = angle_start;
        this.angle  = angle;
        this.speed = 10 + Math.random()*10;
    }
    draw(){
        let centerX = canvas.width/2;
        let centerY = canvas.height/2;
        ctx.beginPath()
         ctx.arc(centerX,centerY,this.radius ,this.angle_start,this.angle_start+this.angle ,false)
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
 
slider.oninput = function() {
    let numbers = slider.value * 4;  
    let angle =2*Math.PI/numbers;
    console.log(angle)
    for(let i=0;i<Math.floor(2*Math.PI/angle);i++){
        spikes[i] = new SPIKE(Math.random()*179+21, colors[Math.floor(Math.random()*colors.length)],angle*i,angle );
    }

 }

 function animate(){
    requestAnimationFrame(animate) 
     ctx.fillStyle ='white';
    ctx.clearRect(0,0,canvas.width , canvas.height)
    for(let i=0;i<2*Math.PI/spikes[0].angle;i++){
        spikes[i].update()
    }
   
   
   

}
animate()