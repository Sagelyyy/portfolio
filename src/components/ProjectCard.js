const ProjectCard = (props) => {
    return(
        <div id="projects" className='projects--card'>
        <div className='projects--card--img'>
            <img
                src={props.img}>
            </img>
        </div>
        <div className='projects--card--info'>
            <h1>{props.title}</h1>
            <h4>{props.subText}</h4>
            <p>{props.summary}</p>
        </div>
    </div>
    )
}

export default ProjectCard