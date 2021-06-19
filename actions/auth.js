import fetch from 'isomorphic-fetch'
import cookie from 'js-cookie'
import  Router  from 'next/router'
import { API } from '../config'

export const userSessionExpired = response => {
    if (response.status == 401) {
     
        signout(() => {
            
            Router.push({
                pathname: '/signin',
                query: {
                    message: 'Your session is expired. please signin.'
                }
            })

        })
    }
    else {
     
        return;
    }
}

export const preSignup = (user) => {
    return fetch(`${API}/pre-signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => err)
}
export const signup = (user) => {
    return fetch(`${API}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => err)
}

export const signin = (user) => {
    return fetch(`${API}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => err)
}

export const setCookie = (key, value) => {
    if (process.browser) {
        cookie.set(key, value, {
            expires: 1
        })
    }
}
export const removeCookie = (key) => {
    if (process.browser) {
        cookie.remove(key, {
            expires: 1
        })
    }
}
export const getCookie = (key) => {
    if (process.browser) {
        return cookie.get(key)
    }
}
export const setLocalstorage = (key, value) => {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value))
    }
}
export const removeLocalstorage = (key) => {
    if (process.browser) {
        localStorage.removeItem(key)
    }
}

export const authentication = (data, next) => {
    setCookie('token', data.token)
    setLocalstorage('user', data.user)
    next()
}
export const signout = (next) => {
    removeCookie('token')
    removeLocalstorage('user')
    next()
    return fetch(`${API}/signout`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return err
        })
}
export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = getCookie('token')
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'))
            }
            else {
                return false
            }
        }
    }
}

export const forgotPassword = (email) => {
    return fetch(`${API}/forgot-password`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email})
    })
        .then(response => {
            return response.json()
        })
        .catch(err => err)
}

export const resetPassword = (resetInfo) => {
    return fetch(`${API}/reset-password`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(resetInfo)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => err)
}