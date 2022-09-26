import Button from './Button'
import './Footer.css'


const Footer = () => {
    return(
        <div className="footer--container">
            <Button href='#about' name='About' />
            <h6>Christian Weiskopf ©2022</h6>
            <Button href='#projects' name='Projects' />
        </div>
    )
}

export default Footer