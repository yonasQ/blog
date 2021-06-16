import React, { useState } from 'react'
import { Alert } from 'reactstrap'
import { forgotPassword } from '../../../actions/auth'
import Layout from '../../../component/Layout'

const ForgotPassword = () => {
    const [Values, setValues] = useState({
        email: '',
        message: '',
        error: '',
        showForm: true
    })
    const { error, email, showForm, message } = Values
    const [visible, setVisible] = useState(true);
    const onDismiss = () => {
        setVisible(false)
    };
    const handleChange = name => e => {
        setValues({ ...Values, error: false, [name]: e.target.value, message: '' })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setValues({ ...Values, message: '', error: '' })
        forgotPassword(email)
            .then(data => {
                if (data.err) {
                    setVisible(true)
                    setValues({ ...Values, error: data.err, message: '' })
                }

                else {
                    setValues({ ...Values, error: '', message: data.message, showForm: false, email: '' })
                }

            })
    }
    const showError = () => {
        return error ?
            <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                {error}
            </Alert> : ''
    }
    const showSuccess = () => {
        return message ?
            <Alert color="success" isOpen={visible} toggle={onDismiss}>
                {message}
            </Alert> : ''
    }
    const forgotPasswordForm = () => (


        <form onSubmit={handleSubmit}>
            <div className="form-group pt-3">
                <input type="email" value={email} onChange={handleChange('email')} className="form-control" placeholder='Type your email' />
            </div>
            <button type="submit" className="btn btn-primary">Send password reset link</button>
        </form>

    )
    return (
        <React.Fragment>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h2>Forgot Password</h2>
                            <br />
                            {showError()}
                            {showSuccess()}
                            {showForm && forgotPasswordForm()}
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default ForgotPassword
