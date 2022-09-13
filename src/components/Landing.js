import './Landing.css'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const Landing = () => {

    const containerRef = useRef(null)

    return (

        <div id="main" ref={containerRef} className='landing--container'>
            <motion.div className='landing--text' drag dragConstraints={containerRef} dragSnapToOrigin={true} dragTransition={{ bounceStiffness: 200, bounceDamping: 15 }}>
            
                <h1>Hi 👋, I'm <span className='landing--name'>Chris Weiskopf</span></h1>
                <h1>and I'm a full stack web developer.</h1>
                    <a href='#projects' >
                        <button className='landing--button'>Check out my work ↓</button>
                    </a>
            </motion.div>
        </div>
    )
}

export default Landing