import React, { useState } from "react"
import { Alert } from "reactstrap"
import { contactForm } from '../../actions/form'

const ContactForm = ({ authorEmail }) => {
    const [Values, setValues] = useState({
        message: '',
        name: '',
        email: '',
        sent: false,
        buttonText: 'Send Message',
        error: false,
        success: false
    })
    const { message, name, email, sent, error, success, buttonText } = Values
    const [visible, setVisible] = useState(true);
    const onDismiss = () => {
        setVisible(false)
    };
    const handleChange = name => e => {
        let value = e.target.value
        setValues({ ...Values, [name]: value, error: false, success: false, buttonText: 'Send Message' })
    }
    const handleSubmit = e => {
        e.preventDefault()
        setValues({ ...Values, buttonText: 'Sending...' })
        let data
        if (authorEmail) {
            data = { authorEmail, name, email, message }
        }
        else {
            data = { name, email, message }
        }
        contactForm(data)
            .then(data => {
                if (data.err) {
                    setValues({ ...Values, error: data.err, success: false, sent: false })
                    setVisible(true)
                }
                else {
                    setValues({ ...Values, success: `Thank you for contacting us.`, message: '', name: '', email: '', error: false, sent: true, buttonText: 'Sent' })
                    setVisible(true)
                }
            })
    }
    const ContactForm = () => (
        <form onSubmit={handleSubmit} className="pb-4">
            <div className="form-group">
                <label className="lead text-muted">Name</label>
                <input type='text' className="form-control" value={name} onChange={handleChange('name')}></input>
            </div>
            <div className="form-group">
                <label className="lead text-muted">Email</label>
                <input type='text' className="form-control" value={email} onChange={handleChange('email')}></input>
            </div>
            <div className="form-group">
                <label className="lead text-muted">Message</label>
                <textarea type='text' className="form-control" rows="7" value={message} onChange={handleChange('message')}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">{buttonText}</button>
        </form>
    )
    const showError = () => {
        return error ?
            <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                {error}
            </Alert> : ''
    }
    const showSuccess = () => {
        return sent ?
            <Alert color="success" isOpen={visible} toggle={onDismiss}>
                {success}
            </Alert> : ''
    }
    return (
        <React.Fragment>
            {showError()}
            {showSuccess()}
            {ContactForm()}
        </React.Fragment>
    )
}

export default ContactForm
