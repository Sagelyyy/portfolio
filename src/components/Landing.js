import './Landing.css'


const Landing = () => {
    return (
        <div className='landing--container'>
            <div className='landing--text'>
                <h1>Hi 👋, I'm <span className='landing--name'>Chris Weiskopf</span></h1>
                <h1>and I'm a full stack web developer.</h1>
                <button className='landing--button'>Check out my work ↓</button>
            </div>
        </div>
    )
}

export default Landing