import ProjectCard from './ProjectCard'
import './Projects.css'

const Projects = () => {

    const tempImage = 'https://placekitten.com/400/150'
    return (
        <div className='projects--container'>
            <ProjectCard
                img="https://camo.githubusercontent.com/e1590875694ed0939c7a89d69f5966cf4dca53d637e5f925eee721948d4bf31c/68747470733a2f2f692e696d6775722e636f6d2f6e4d61786856742e706e67"
                title="HoloScript"
                subText="A Twitter Clone"
                summary="A fullstack social media app built with React and firebase."
            />
            <ProjectCard 
                img={tempImage}
                title="Where's Waldo"
                subText="A puzzle adventure game"
                summary="A fullstack game built with react and firebase for scoring"
            />
            <ProjectCard
                img={tempImage}
                title="Shopping Cart"
                subText="A shopping cart app built with react"
            />
        </div>
    )
}

export default Projects