import './Projects.css'

const Projects = () => {

    const tempImage = 'https://placekitten.com/400/150'
    return (
        <div className='projects--container'>

            <div id="projects" className='projects--card'>
                <div className='projects--card--img'>
                    <img
                        src="https://camo.githubusercontent.com/e1590875694ed0939c7a89d69f5966cf4dca53d637e5f925eee721948d4bf31c/68747470733a2f2f692e696d6775722e636f6d2f6e4d61786856742e706e67">
                    </img>
                </div>
                <div className='projects--card--info'>
                    <h1>Holoscript</h1>
                    <h4>A Twitter Clone.</h4>
                    <p>Fullstack social media app built with React and firebase.</p>
                </div>
            </div>
            <div id="projects" className='projects--card'>
                <div className='projects--card--img'>
                    <img src={tempImage}></img>
                </div>
                <div className='projects--card--info'>
                    <h1>Where's Waldo</h1>
                    <h4>A Where's Waldo game with a scoreboard.</h4>
                </div>
            </div>
            <div id="projects" className='projects--card'>
                <div className='projects--card--img'>
                    <img src={tempImage}></img>
                </div>
                <div className='projects--card--info'>
                    <h1>Shopping Cart</h1>
                    <h4>A shopping cart project</h4>
                </div>
            </div>
            <div id="projects" className='projects--card'>
                <div className='projects--card--img'>
                    <img src={tempImage}></img>
                </div>
                <div className='projects--card--info'>
                    <h1>Quizzical</h1>
                    <h4>A fun quiz game.</h4>
                </div>
            </div>
            <div id="projects" className='projects--card'>
                <div className='projects--card--img'>
                    <img src={tempImage}></img>
                </div>
                <div className='projects--card--info'>
                    <h1>Personal Bookshelf</h1>
                    <h4>A bookshelf to keep track of your books.</h4>
                </div>
            </div>

        </div>
    )
}

export default Projects