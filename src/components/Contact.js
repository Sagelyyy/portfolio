import Button from './Button'
import './Contact.css'
import Title from './Title'


const Contact = () => {
    return(
        <div className='contact--container'>
            <Title title="Contact" />
            <p>Interested in working together or have a question?</p>
            <input placeholder='Name'/>
            <input placeholder='Email'/>
            <textarea placeholder='Message'/>
            <Button name='Submit' />
        </div>
    )
}

export default Contact