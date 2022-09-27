import './Contact.css'
import Button from './Button'
import Title from './Title'
import { sendEmail } from '../firebase'
import { useState } from 'react'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        sendEmail(formData)
        setFormData({
            name: '',
            email: '',
            message: ''
        })
        setSubmitted(true)
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setFormData(old => {
            return({
                ...old,
                [name]: value
            })
        })
    }


    // TODO: Add recaptcha
    return (
        <div className='contact--container'>
            <Title title="Contact" />
            <p>Interested in working together or have a question?</p>
            {submitted ? <p>Thanks for reaching out!</p> : null}
            <form onSubmit={handleSubmit}>
                <input required onChange={handleChange} name='name' placeholder='Name' value={formData.name} />
                <input required  type="email"  onChange={handleChange} name='email' placeholder='Email' value={formData.email}/>
                <textarea required onChange={handleChange} name='message' placeholder='Message' value={formData.message}/>
                <Button name="Submit" />
            </form>
        </div>
    )
}

export default Contact