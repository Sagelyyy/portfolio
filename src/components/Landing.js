import './Landing.css'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { init } from '../utils/backgroundInit'

const Landing = () => {

    // useEffect(() => {init()},[])

    return (

        <div className='landing--container'>
            <motion.div className='landing--text' drag dragConstraints={{ left: 50, right: 50, top: -100, bottom: 100 }}>
            
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