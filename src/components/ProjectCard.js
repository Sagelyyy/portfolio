const ProjectCard = (props) => {
    return (

        props.right ?

            <div id="projects" className='projects--card'>
                <div className='projects--card--img'>
                    <img
                        src={props.img}>
                    </img>
                </div>
                <div className='projects--card--info'>
                    <h1 className="projects--card--title">{props.title}</h1>
                    <h4>{props.subText}</h4>
                    <p>{props.summary}</p>
                </div>
            </div> :

            <div id="projects" className='projects--card'>
                <div className='projects--card--info'>
                    <h1 className="projects--card--title">{props.title}</h1>
                    <h4>{props.subText}</h4>
                    <p>{props.summary}</p>
                </div>
                <div className='projects--card--img'>
                    <img
                        src={props.img}>
                    </img>
                </div>
            </div>
    )
}

export default ProjectCard