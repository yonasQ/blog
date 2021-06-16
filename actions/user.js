import fetch from 'isomorphic-fetch'
import { API } from '../config'
import { userSessionExpired } from './auth'
export const getPublicProfile = (username) => {
    return fetch(`${API}/user/${username}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => err)
}

export const getProfile = (token) => {

    return fetch(`${API}/profile`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            userSessionExpired(response)
            return response.json()
        })
        .catch(err => err)
}
export const updateProfile = (token, user) => {
    return fetch(`${API}/user/update`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: user
    })
        .then(response => {
            userSessionExpired(response)
            return response.json()
        })
        .catch(err => err)
}
