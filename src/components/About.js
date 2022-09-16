import './About.css'
import Title from './Title'


const About = () => {
    return (
        <div>
            <Title title="About me" />
            <div className='about--container'>
                <div className="about--text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, corporis nobis id dolore explicabo expedita
                        reprehenderit minus quas voluptate deleniti corrupti quo exercitationem veritatis doloremque error consequatur
                        nihil unde non.</p>
                </div>
                <div className="about--technologies">
                    <div className="about--tech--container">
                        <i class="devicon-html5-plain colored"></i>
                        <p>HTML5</p>
                    </div>
                    <div className="about--tech--container">
                        <i class="devicon-firebase-plain colored"></i>
                        <p>FIREBASE</p>
                    </div>
                    <div className="about--tech--container">
                        <i class="devicon-css3-plain colored"></i>
                        <p>CSS</p>
                    </div>
                    <div className="about--tech--container">
                        <i class="devicon-react-original colored"></i>
                        <p>REACT</p>
                    </div>
                    <div className="about--tech--container">
                        <i class="devicon-javascript-plain colored"></i>
                        <p>JAVASCRIPT</p>
                    </div>
                    <div className="about--tech--container">
                        <i class="devicon-git-plain colored"></i>
                        <p>GIT</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About