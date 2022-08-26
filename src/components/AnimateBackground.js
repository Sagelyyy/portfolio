import './AnimateBackground.css'
import { animate, motion } from "framer-motion";
import { useEffect, useState } from "react";



const AnimateBackground = () => {

   const [motionData, setMotionData] = useState([])

    const createElems = (x) => {
        let i =0
        while(x > i){
            setMotionData((old) => {
                return([
                    ...old,
                    {x:((Math.random() * 500) + 100), ease:'easeOut', duration: 3}
                ])
            })
            console.log(x)
            x -= 1
        }
    }

    useEffect(() => {
        if(motionData.length === 0){
            console.log('create!')
            createElems(5)
        }
    },[motionData])

    const motionElems = motionData.length > 1 ? motionData.map(item => 
    
    <motion.div 
    className='animate--item'
    animate={{x: item.x}}
    transition={{ease: item.ease, duration: item.duration, repeat:Infinity, repeatType: 'reverse'}}
    >
    
    </motion.div>) : null

    return(

        <div className="animate--container">
            {motionElems}
        </div>
    )
}

export default AnimateBackground