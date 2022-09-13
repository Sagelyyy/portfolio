import { useEffect, useState, useRef } from 'react'
import './AnimateBackground.css'


const AnimateBackground = () => {

  const canvas = useRef()
  const [ctx, setCtx] = useState()
  const [dimensions, setDimensions] = useState({ height: window.innerHeight, width: window.innerWidth - 15 })
  const [settings, setSettings] = useState({
    cursorRadius: 50,
    x: 100,
    y: 100,
    radius: 1,
    density: 1500,
    top: 0,
    left: 0,
  })

  const cursor = {
    x: 500,
    y: 500
  }

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (canvas.current != null) {
      setCtx(canvas.current.getContext("2d"))
      setSettings((old) => {
        return {
          ...old,
          bottom: dimensions.height,
          right: dimensions.width
        }
      })
    }

    setLoaded(true)
  }, [canvas])

  useEffect(() => {
    if (loaded) {
      canvas.current.addEventListener("mousemove", (e) => {
        cursor.x = e.clientX
        cursor.y = e.clientY + getScroll()
      })
      init()
    }
  }, [loaded])

  const randomColor = () => {
    const colors = ['#858AE3', '#E0EFDE', '#E08D79', '#EE6352']
    return colors[Math.floor(Math.random() * colors.length)]
  }


  const dots = []

  class Particle {
    constructor() {
      this.x = Math.floor(Math.random() * dimensions.width)
      this.y = Math.floor(Math.random() * dimensions.height)
      this.rColor = randomColor()

      const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      this.vX = plusOrMinus * Math.random() * 0.07
      this.vY = plusOrMinus * Math.random() * 0.07
    }

    draw = () => {
      if (ctx) {
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
          this.y = Math.floor(settings.bottom - settings.radius);
        }

        if ((this.y - settings.radius) <= settings.top) {
          this.vY *= -1.1;
          this.vX *= 0.5;
          this.y = Math.floor(settings.top + settings.radius);
        }

        if (this.x - (settings.radius) <= settings.left) {
          this.vX *= -1;
          this.vY *= -0.5;
          this.x = Math.floor(settings.left + settings.radius);
        }

        if (this.x + (settings.radius) >= settings.right) {
          this.vX *= -1;
          this.vY *= -0.5;
          this.x = Math.floor(settings.right - settings.radius);
        }

        if (this.x + settings.cursorRadius >= cursor.x && this.x - settings.cursorRadius <= cursor.x &&
          this.y + settings.cursorRadius >= cursor.y && this.y - settings.cursorRadius <= cursor.y) {
          // this.vX *= -1.001
          // this.vY *= -1.001
          ctx.arc(this.x, this.y, settings.radius + 1, 0, Math.PI * 2, true);
          ctx.fillStyle = this.rColor;
          ctx.fill()
        }
      }
    }
  }

  const animate = (item) => {
    requestAnimationFrame(item)
  }

  const getScroll = () => {
    let htmlScroll = document.getElementsByTagName('html')[0].scrollTop
    return htmlScroll
  }

  const spawnParticles = () => {
    for (let i = 0; i < settings.density; i += 1) {
      dots.push(new Particle())
    }
  }


  const init = () => {
    sphere()
    spawnParticles()
    for (let i in dots) {
      dots[i].draw()
    }
  }



  const sphere = () => {
    animate(sphere)
    ctx.clearRect(0, 0, dimensions.width, dimensions.height)
    ctx.fillStyle = "#49416D"
    ctx.beginPath()
    ctx.arc(Math.floor(cursor.x), Math.floor(cursor.y), settings.cursorRadius, 0, 2 * Math.PI);
    ctx.fill()
  }



  return (
    <canvas ref={canvas} id="landing" height={dimensions.height} width={dimensions.width}></canvas>
  )

}

export default AnimateBackground