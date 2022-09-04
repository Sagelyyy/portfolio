import { useEffect, useState } from 'react'
import { init } from '../utils/backgroundInit';
import './AnimateBackground.css'


const AnimateBackground = () => {

    const [loaded, setLoaded] = useState(false)

    console.log('render')

    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight;


    const settings = {
        size: 10,
        startingX: Math.floor(Math.random() * canvas.width),
        startingY: Math.floor(Math.random() * canvas.height),
        gravity: 0.5,
        radius: 2,
        amount: 100,
        groundLevel: canvas.height * 0.75,
        leftWall: canvas.width * 0.25,
        rightWall: canvas.width * 0.75
    }

    const particles = {}
    let particleIndex = 0

    class Dot {
        constructor() {
            // Set up starting pos and velocites
            this.x = Math.floor(Math.random() * canvas.width)
            this.y = Math.floor(Math.random() * canvas.height)

            // Random velocities
            this.vX = Math.random() * 0.2
            this.vY = Math.random() * 0.1;

            particleIndex++;
            particles[particleIndex] = this;
            this.id = particleIndex;

            console.log(this.x, this.y)
        }
    }

    Dot.prototype.draw = function () {
        this.x += this.vX;
        this.y += this.vY;

        // // Adjust for gravity
        // this.vY += settings.gravity;

        // Create the shapes
        // context.clearRect(settings.leftWall, settings.groundLevel, canvas.width, canvas.height);
        context.beginPath();
        context.fillStyle = "#858AE3";
        // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
        context.arc(this.x, this.y, settings.radius, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
    }

    document.body.appendChild(canvas);


    const init = () => {
        setInterval(function () {
            context.fillStyle = '#49416D';
            context.fillRect(0, 0, canvas.width, canvas.height);
            for (let i in particles) {
                particles[i].draw();
            }
        }, 30);
    }

    const spawnParticles = () => {
        if (!loaded) {
            for (let i = 0; i < settings.amount; i++) {
                new Dot()
                if (i >= settings.density) {
                    setLoaded(true)
                }
            }
        }
    }

    useEffect(() => {
        spawnParticles()
        init()
        console.log(particles)
    }, [])


}

export default AnimateBackground