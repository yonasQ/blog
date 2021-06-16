import fetch from 'isomorphic-fetch'
import { API } from '../config'
import { userSessionExpired } from './auth'
export const create = (tag, token) => {
    return fetch(`${API}/tag`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(tag)
    })
        .then(response => {
            userSessionExpired(response)
            return response.json()
        })
        .catch(err => err)
}
export const getTags = () => {
    return fetch(`${API}/tags`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => err)
}
export const removeTag = (slug, token) => {
    return fetch(`${API}/tag/${slug}`, {
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
export const getTag = (slug) => {
    return fetch(`${API}/tag/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => err)
}