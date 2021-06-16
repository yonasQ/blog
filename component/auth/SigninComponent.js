import React, { useEffect, useState } from "react";
import { authentication, isAuth, signin } from '../../actions/auth'
import { Spinner } from 'reactstrap';
import Router from "next/router";
import Link from "next/link";
const SigninComponent = () => {
    const [values, setvalues] = useState(
        {
            email: "",
            password: "",
            loading: false,
            showForm: true,
            error: '',
        }
    )
    useEffect(() => {
        isAuth() && Router.push(`/`)
    }, [])
    const { email, password, error, loading, showForm } = values
    const handleSubmit = (e) => {
        e.preventDefault();
        setvalues({ ...values, loading: true, error: false })
        const user = { email, password };
        signin(user)
            .then(data => {
                if (data.err) {
                    setvalues({ ...values, error: data.err, loading: false })
                }
                else {
                    authentication(data, () => {
                       if(isAuth() && isAuth().role===1){
                           Router.push(`/admin`)
                       }
                       else{
                           Router.push(`/user`)
                       }
                    })
                }
            })
    }
    const handleChange = (name) => (e) => {
        setvalues({ ...values, error: false, [name]: e.target.value })
    }

    const signinForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input onChange={handleChange('email')} value={email} type="email" className="form-control" placeholder="type your email" />
                </div>
                <div className="form-group">
                    <input onChange={handleChange('password')} value={password} type="password" className="form-control" placeholder="type your password" />
                </div>
                <button className="btn btn-primary" type="submit">Signin</button>

            </form>
        )
    }
    const showLoading = () => loading ? <div className="alert text-center">  <Spinner color="primary" /></div> : '';
    const showError = () => error ? <div className="alert alert-danger">{error}</div> : '';
    return (
        <React.Fragment>
            { showLoading()}
            { showError()}
            { showForm && signinForm()}
            <hr />
            <Link href='/auth/password/forgot'>
                <a>Forget password</a>
            </Link>
        </React.Fragment>
    )
}

export default SigninComponent
