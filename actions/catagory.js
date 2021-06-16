import fetch from 'isomorphic-fetch'
import { API } from '../config'
import { userSessionExpired } from './auth'
export const create = (catagory, token) => {
    return fetch(`${API}/catagory`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(catagory)
    })
        .then(response => {
            userSessionExpired(response)
            return response.json()
        })
        .catch(err => err)
}
export const getCatagories = () => {
    return fetch(`${API}/catagories`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => err)
}
export const removeCatagory = (slug, token) => {
    return fetch(`${API}/catagory/${slug}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            userSessionExpired(response)
            return response.json()
        })
        .catch(err => err)
}
export const getCatagory = (slug) => {
    return fetch(`${API}/catagory/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => err)
}