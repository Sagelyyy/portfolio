import './Scrollbar.css'
import {motion, useScroll} from "framer-motion"

const Scrollbar = () => {
    const { scrollYProgress } = useScroll();

    return(
        <motion.div className="scrollbar" style={{scaleX: scrollYProgress}}></motion.div>
    )
}

export default Scrollbar