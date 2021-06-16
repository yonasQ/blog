import React, { useState, useEffect } from "react";
import { preSignup, isAuth } from '../../actions/auth'
import { Spinner } from 'reactstrap';
const SignupComponent = () => {
    const [values, setvalues] = useState(
        {
            name: "",
            email: "",
            password: "",
            loading: false,
            showForm: true,
            error: '',
            message: "",
        }
    )
    useEffect(() => {
        isAuth() && Router.push(`/`)
    }, [])
    const { name, email, password, error, loading, message, showForm } = values
    const handleSubmit = (e) => {
        e.preventDefault();
        setvalues({ ...values, loading: true, error: false })
        const user = { name, email, password };
        preSignup(user)
            .then(data => {
                if (data.err) {
                    setvalues({ ...values, error: data.err, loading: false })
                }
                else {
                    setvalues({
                        ...values,
                        name: "",
                        email: "",
                        password: "",
                        loading: false,
                        showForm: false,
                        error: '',
                        message: data.message,
                    })
                }
            })
    }
    const handleChange = (name) => (e) => {
        setvalues({ ...values, error: false, [name]: e.target.value })
    }

    const signupForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input onChange={handleChange('name')} value={name} type="text" className="form-control" placeholder="type your name" />
                </div>
                <div className="form-group">
                    <input onChange={handleChange('email')} value={email} type="email" className="form-control" placeholder="type your email" />
                </div>
                <div className="form-group">
                    <input onChange={handleChange('password')} value={password} type="password" className="form-control" placeholder="type your password" />
                </div>
                <button className="btn btn-primary" type="submit">Signup</button>

            </form>
        )
    }
    const showLoading = () => loading ? <div className=" text-center">  <Spinner color="primary" /></div> : '';
    const showError = () => error ? <div className="alert alert-danger">{error}</div> : '';
    const showMessage = () => message ? <div className="alert alert-info">{message}</div> : '';
    return (
        <React.Fragment>
            { showLoading()}
            { showMessage()}
            { showError()}
            { showForm && signupForm()}
        </React.Fragment>
    )
}

export default SignupComponent
