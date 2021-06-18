import Link from 'next/link'
import { Router } from 'next/router'
import React, { useState, useEffect } from 'react'
import { Alert, Spinner } from 'reactstrap'
import { getCookie, isAuth, setLocalstorage } from '../../actions/auth'
import { getProfile, updateProfile } from '../../actions/user'
import { API } from '../../config'

const ProfileUpdate = () => {
    const [Values, setValues] = useState({
        username: '',
        name: '',
        password: '',
        email: '',
        about: '',
        error: false,
        success: false,
        loading: false,
        photo: '',
        userData: ''
    })
    
    const token = getCookie('token')
    const [visible, setVisible] = useState(true);
    const onDismiss = () => {
        setVisible(false)
    };
    const { userData, username, name, password, email, error, success, loading, photo, about } = Values
    useEffect(() => {
        init()
    }, [])

    const init = () => {
        return getProfile(token)
            .then(data => {
                if (data.err) {
                    setValues({ ...Values, error: data.err })
                }
                else {

                    setValues({ ...Values, username: data.user.username, email: data.user.email, photo: data.user.photo ? data.user.photo : '', name: data.user.name, about: data.user.about })
                    
                }
            })
    }
    const handleChange = name => e => {
        const value = name == 'photo' ? e.target.files[0] : e.target.value
        let userUpdateData = new FormData()
        userUpdateData.set(name, value)
        name == 'password' ? '' : password == '' ? '' : userUpdateData.set('password', password)
        if (name == 'password' && value == '') {
            userUpdateData.delete('password')
        }
        setValues({ ...Values, [name]: value, userData: userUpdateData, error: false, success: false })
    }
    const handleSubmit = e => {
        e.preventDefault()

        setValues({ ...Values, loading: true })

        updateProfile(token, userData)
            .then((data) => {

                if (!data.user) {
                    setVisible(true)
                    setValues({ ...Values, error: data.err, success: false, loading: false })
                }
                else {
                    setVisible(true)
                    setValues({ ...Values, username: data.user.username, email: data.user.email, name: data.user.name, about: data.user.about, loading: false, success: true })
                    setLocalstorage('user', data.user)
                }
            })
    }

    const updateProfileForm = () => {
        return <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="text-muted">Profile Photo</label>
                <br />
                <label className="btn btn-outline-info">
                    Select Photo
                    <input type="file" accept='image/*' hidden onChange={handleChange('photo')} />
                </label>
            </div>
            <div className="form-group">
                <label className="text-muted">Username</label>
                <input type="text" className="form-control" value={username} onChange={handleChange('username')} />
            </div>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" className="form-control" value={name} onChange={handleChange('name')} />
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input type="email" className="form-control" value={email} onChange={handleChange('email')} />
            </div>
            <div className="form-group">
                <label className="text-muted">About</label>
                <textarea type="text" className="form-control" value={about} onChange={handleChange('about')} />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input type="password" className="form-control" value={password} onChange={handleChange('password')} />
            </div>
            <button type="submit" className="btn btn-primary">Submit{loading && <Spinner size='sm' className="ml-1" color="light" />}</button>
        </form>

    }
    const showError = () => {
        return error ?
            <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                {error}
            </Alert> : ''
    }
    const showSuccess = () => {
        return success ?
            <Alert color="success" isOpen={visible} toggle={onDismiss}>
                Profile updated.
            </Alert> : ''
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        {
                            photo && <img src={`${API}/user/photo/${isAuth() && isAuth().username}`} alt="user profile" style={{ borderRadius: '50%', maxHeight: 'auto', width: '100%' }} className="img img-fluid mb-3" />
                        }
                    </div>
                    <div className="col-md-8 mb-5">
                        {showError()}
                        {showSuccess()}
                        {updateProfileForm()}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProfileUpdate
