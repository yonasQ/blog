import Layout from '../../../../component/Layout'
import Link from "next/link"
import Router, { withRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { signup } from '../../../../actions/auth';
import { Alert } from 'reactstrap';
import { Spinner } from 'reactstrap';

const ResetPassword = ({ router }) => {
    const [Values, setValues] = useState({

        message: '',
        error: '',
        loading: false,
        showButton: true
    })
    const { error, message, showButton, loading } = Values
    const [visible, setVisible] = useState(true);
    const onDismiss = () => {
        setVisible(false)
        if (message) {
            Router.replace('/signin')
        }
        else{
            Router.replace('/signup')
        }
    };

    const clickButton = (e) => {
        e.preventDefault()
        setValues({ ...Values, loading: true })
        signup({ activationLink: router.query.id })
            .then(data => {
                if (data.err) {
                    setValues({ ...Values, error: data.err, showButton: false, loading: false })
                }

                else {
                    setValues({ ...Values, message: data.message, showButton: false, loading: false })
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
    const showLoading = () => loading ? <div className=" text-center mb-3">  <Spinner color="primary" /></div> : '';
    const ActivateAccountButton = () => (
        <button className="btn btn-outline-primary" onClick={clickButton}>Activate account</button>
    )
    return (
        <React.Fragment>
            <Layout>
                <div className="container">
                        <div className="mt-5 text-center">
                            <h2>Activate account</h2>
                            <br />
                            {showLoading()}
                            {showError()}
                            {showSuccess()}
                            {showButton && ActivateAccountButton()}
                        </div>
                    </div>
            </Layout>
        </React.Fragment>
    )

}
export default withRouter(ResetPassword);