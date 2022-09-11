import { motion } from "framer-motion"


const ProjectCard = (props) => {
    return (

        props.right ?

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                id="projects" className='projects--card'>
                <div className='projects--card--img'>
                    <img 
                        src={props.img}>
                    </img>
                </div>
                <div className='projects--card--info'>
                    <h1 className="projects--card--title">{props.title}</h1>
                    <h4>{props.subText}</h4>
                    <p>{props.summary}</p>
                    <div className="projects--card--button">Preview</div>
                    <div className="projects--card--button">Repository</div>
                </div>
            </motion.div> :

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} id="projects" className='projects--card'>
                <div className='projects--card--info'>
                    <h1 className="projects--card--title">{props.title}</h1>
                    <h4>{props.subText}</h4>
                    <p>{props.summary}</p>
                    <div className="projects--card--button">Preview</div>
                    <div className="projects--card--button">Repository</div>
                </div>
                <div className='projects--card--img'>
                    <img
                        src={props.img}>
                    </img>
                </div>
            </motion.div>
    )
}

export default ProjectCard