import './Projects.css'

const Projects = () => {

    const tempImage = 'https://placekitten.com/400/150'
    return (
        <div className='projects--container'>

            <div id="projects" className='projects--card'>
                <img className='projects--card--img' src={tempImage}></img>
                <h1>Holoscript</h1>
                <h4>A Twitter Clone.</h4>
            </div>
            <div id="projects" className='projects--card'>
                <img className='projects--card--img' src={tempImage}></img>
                <h1>Where's Waldo</h1>
                <h4>A Where's Waldo game with a scoreboard.</h4>
            </div>
            <div id="projects" className='projects--card'>
                <img className='projects--card--img' src={tempImage}></img>
                <h1>Shopping Cart</h1>
                <h4>A shopping cart project</h4>
            </div>
            <div id="projects" className='projects--card'>
                <img className='projects--card--img' src={tempImage}></img>
                <h1>Quizzical</h1>
                <h4>A fun quiz game.</h4>
            </div>
            <div id="projects" className='projects--card'>
                <img className='projects--card--img' src={tempImage}></img>
                <h1>Personal Bookshelf</h1>
                <h4>A bookshelf to keep track of your books.</h4>
            </div>

        </div>
    )
}

export default Projects