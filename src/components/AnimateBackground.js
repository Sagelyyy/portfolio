import { useEffect, useState } from 'react'
import './AnimateBackground.css'


const AnimateBackground = () => {


    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    
    const cursor = 
          {
      x: Math.floor(Math.random() * canvas.width), 
      y: Math.floor(Math.random() * canvas.height)
          }
      canvas.height = window.innerHeight - 50;
      canvas.width = window.innerWidth - 50;
    
    const settings = {
      cursorRadius: 50,
      x: 100,
      y: 100,
      radius: 1,
      density: 1500,
      top: 0,
      bottom: canvas.height,
      left: 0,
      right: canvas.width
    }
    
    const randomColor = () => {
      const colors = ['#858AE3', '#E0EFDE', '#E08D79', '#EE6352']
      return colors[Math.floor(Math.random()*colors.length)]
    }
    
    
    const dots = []
    
    class Particle {
      constructor(){
         this.x = Math.floor(Math.random() * canvas.width)
         this.y = Math.floor(Math.random() * canvas.height)
         this.rColor = randomColor()
        
         const plusOrMinus = Math.random() < 0.5 ? -1 : 1; 
         this.vX = plusOrMinus * Math.random() * 0.07
         this.vY = plusOrMinus * Math.random() * 0.07
      }
      
    
      
      draw = () => {
            requestAnimationFrame(this.draw)
            this.x += this.vX
            this.y += this.vY
            ctx.beginPath();
            ctx.fillStyle = "#858AE3";
            ctx.arc(this.x, this.y, settings.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
        
        // Collision with wall detection
        
          if ((this.y + settings.radius) > settings.bottom) {
                this.vY *= -1.1;
                this.vX *= 0.5;
                this.y = settings.bottom - settings.radius;
            }
    
            if ((this.y - settings.radius) <= settings.top) {
                this.vY *= -1.1;
                this.vX *=  0.5;
                this.y = settings.top + settings.radius;
            }
    
            if (this.x - (settings.radius) <= settings.left) {
                this.vX *= -1;
                this.vY *= -0.5;
                this.x = settings.left + (settings.radius);
            }
    
            if (this.x + (settings.radius) >= settings.right) {
                this.vX *= -1;
                this.vY *= -0.5;
                this.x = settings.right - settings.radius;
            }
        
        // Collision with mouse detection
        
            if(this.x + settings.cursorRadius >= cursor.x && this.x -settings.cursorRadius <= cursor.x &&
              this.y + settings.cursorRadius >= cursor.y && this.y -settings.cursorRadius <= cursor.y){
              // this.vX *= -1.001
              // this.vY *= -1.001
              ctx.arc(this.x, this.y, settings.radius +1, 0, Math.PI * 2, true);
              ctx.fillStyle = this.rColor;
              ctx.fill()
    
            }
      }
    }
    
    const animate = (item) => {
      requestAnimationFrame(item)
    }
    
    const spawnParticles = () => {
      for(let i = 0; i < settings.density; i += 1){
        dots.push(new Particle())
      }
    }
    
    
    const init = () => {
      sphere()
      spawnParticles()
      for(let i in dots){
        dots[i].draw()
      }
    }
    
    canvas.addEventListener("mousemove", (e) => 
     {
      cursor.x = e.clientX
      cursor.y = e.clientY
    })
    
    const sphere = () => {
    
      animate(sphere)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "#49416D"
      ctx.beginPath()
      ctx.arc(cursor.x, cursor.y, settings.cursorRadius, 0, 2 * Math.PI);
      ctx.fill()
    
    }
    
    useEffect(() =>{
        document.querySelector('.App').appendChild(canvas)
        init()
    })

}

export default AnimateBackground