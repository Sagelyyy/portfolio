import ProjectCard from './ProjectCard'
import './Projects.css'
import Title from './Title'
import Button from './Button'

const Projects = () => {
    return (
        <div id="projects" className='projects--container'>
            <Title title="Projects" />
            <ProjectCard
                right={true}
                img="https://camo.githubusercontent.com/e1590875694ed0939c7a89d69f5966cf4dca53d637e5f925eee721948d4bf31c/68747470733a2f2f692e696d6775722e636f6d2f6e4d61786856742e706e67"
                alt="Social media project"
                title={<Title title="Holoscript" />}
                subText="A Twitter Clone"
                summary="A fullstack social media app built with React and firebase."
                preview={<Button name="Preview" href="https://sagelyyy.github.io/holoscript/" target="_blank" />}
                repo={<Button name="Repository" href="https://github.com/Sagelyyy/holoscript" target="_blank" />}
            />
            <ProjectCard
                right={false}
                img="https://camo.githubusercontent.com/fd4a90e2b66db3a35570625334bccaf7c49e48bf3e261e5a599dff476d897d24/68747470733a2f2f692e696d6775722e636f6d2f73364c6c7247762e706e67"
                alt="Waldo game project"
                title={<Title title="Waldo" />}
                subText="A puzzle adventure game"
                summary="A fullstack game built with react and firebase for scoring"
                preview={<Button name="Preview" href="https://sagelyyy.github.io/wheres-waldo/" target="_blank" />}
                repo={<Button name="Repository" href="https://github.com/Sagelyyy/wheres-waldo" target="_blank" />}
            />
            <ProjectCard
                right={true}
                img="https://camo.githubusercontent.com/112c13846f21a9f14f698439a01cba2f9c8824409c45b6cd986fcf7ee1014b03/68747470733a2f2f692e696d6775722e636f6d2f69494c694542302e6a7067"
                alt="Bookshelf project"
                title={<Title title="Bookshelf" />}
                subText="A personal bookshelf"
                summary="A fullstack personal library built using react and firebase with google auth to save your books"
                preview={<Button name="Preview" href="https://sagelyyy.github.io/react-bookshelf/" target="_blank" />}
                repo={<Button name="Repository" href="https://github.com/Sagelyyy/react-bookshelf" target="_blank" />}
            />
        </div>
    )
}

export default Projects