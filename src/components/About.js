import './About.css'
import Title from './Title'


const About = () => {
    return (
        <div id="about" >
            <Title title="About me" />
            <div className='about--container'>
                <div className="about--text">
                    <p>I've had a life long passion for programming. From tinkering with my own arduinos and raspberry pi, to writing a python
                        web scraper using selenium to grab D&D spells from a website for a personal Discord bot. I've always found enjoyment
                        in programming and love to create beautiful websites.
                    </p>
                </div>
                <div className="about--technologies">
                    <div className="about--tech--container">
                        <i className="devicon-html5-plain colored"></i>
                        <p>HTML5</p>
                    </div>
                    <div className="about--tech--container">
                        <i className="devicon-firebase-plain colored"></i>
                        <p>FIREBASE</p>
                    </div>
                    <div className="about--tech--container">
                        <i className="devicon-css3-plain colored"></i>
                        <p>CSS</p>
                    </div>
                    <div className="about--tech--container">
                        <i className="devicon-react-original colored"></i>
                        <p>REACT</p>
                    </div>
                    <div className="about--tech--container">
                        <i className="devicon-javascript-plain colored"></i>
                        <p>JAVASCRIPT</p>
                    </div>
                    <div className="about--tech--container">
                        <i className="devicon-git-plain colored"></i>
                        <p>GIT</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About