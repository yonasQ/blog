import Layout from '../../../../component/Layout'
import Link from "next/link"
import Router, { withRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { resetPassword } from '../../../../actions/auth';
import { Alert } from 'reactstrap';

const ResetPassword = ({ router }) => {
    const [Values, setValues] = useState({
        password: '',
        newPassword: '',
        message: '',
        error: '',
        showForm: true
    })
    const { password, error, newPassword, message, showForm } = Values
    const [visible, setVisible] = useState(true);
    const onDismiss = () => {
        setVisible(false)
        if (message) {
            Router.replace('/signin')
        }
    };
    const handleChange = name => e => {
        setValues({ ...Values, error: false, [name]: e.target.value, message: '' })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setValues({ ...Values, message: '', error: '' })
        if (password == newPassword) {
            resetPassword({ newPassword, resetPasswordLink: router.query.id })
                .then(data => {
                    if (data.err) {
                        setVisible(true)
                        setValues({ ...Values, error: data.err, message: '' })
                        if (data.err == 'Expired link. Try again. ') {
                            setValues({ ...Values, error: data.err, showForm: false, message: '' })
                        }
                    }

                    else {
                        setValues({ ...Values, error: '', message: data.message, showForm: false, newPassword: '', password: '' })
                    }

                })
        }
        else {
            setVisible(true)
            setValues({ ...Values, message: '', error: 'Password did not match. ' })
        }
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
    const resetPasswordForm = () => (


        <form onSubmit={handleSubmit}>
            <div className="form-group pt-3">
                <input type="password" value={password} onChange={handleChange('password')} className="form-control" placeholder='Type password' />
            </div>
            <div className="form-group">
                <input type="password" value={newPassword} onChange={handleChange('newPassword')} className="form-control" placeholder='Confirm password' />
            </div>
            <button type="submit" className="btn btn-primary">Change password</button>
        </form>

    )
    return (
        <React.Fragment>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h2 >Reset Password</h2>
                            <br />
                            {showError()}
                            {showSuccess()}
                            {showForm && resetPasswordForm()}
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )

}
export default withRouter(ResetPassword);