import { motion } from "framer-motion";
import Button from "./Button";


const ProjectCard = (props) => {

    const varients = {
        offScreen: { x: - 100 },
        onScreen: { x: 0 }
    }

    return (

        props.right ?

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -200 }
                }}
                id="projects" className='projects--card'>
                <div className='projects--card--img'>
                    <img
                        src={props.img}
                        alt={props.alt}>
                    </img>
                </div>
                <div className='projects--card--info'>
                    <h1 className="projects--card--title">{props.title}</h1>
                    <h4>{props.subText}</h4>
                    <p>{props.summary}</p>
                    {props.preview}
                    {props.repo}
                </div>
            </motion.div> :

            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 200 }
            }}
            id="projects" className='projects--card'>
                <div className='projects--card--info'>
                    <h1 className="projects--card--title">{props.title}</h1>
                    <h4>{props.subText}</h4>
                    <p>{props.summary}</p>
                    {props.preview}
                    {props.repo}
                </div>
                <div className='projects--card--img'>
                    <img
                        src={props.img}
                        alt={props.alt}>
                    </img>
                </div>
            </motion.div>
    )
}

export default ProjectCard