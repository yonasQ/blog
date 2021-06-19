import fetch from 'isomorphic-fetch'
import { API } from '../config'
import queryString from 'query-string'
import { isAuth, userSessionExpired } from './auth'

let requestEndPoint;
if (isAuth() && isAuth().role == 1) {
    requestEndPoint = `${API}`
}
else if (isAuth() && isAuth().role == 0) {
    requestEndPoint = `${API}/user`
}
export const createBlog = (blog, token) => {
    return fetch(`${requestEndPoint}/blog`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            userSessionExpired(response)
            return response.json()
        })
        .catch(err => err)
}
export const listBlogsWithCatagoriesAndTags = (skip, limit) => {
    const data = { skip, limit };

    return fetch(`${API}/blogs-catagories-tags`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    })
        .then(response => {
            return response.json()
        })
        .catch(err => err)
}
export const singleBlog = (slug) => {
    return fetch(`${API}/blog/${slug}`, {
        method: 'GET',
    })
        .then(response => {

            return response.json()
        })
        .catch(err => err)
}
export const listRelatedBlogs = (relate) => {

    return fetch(`${API}/blog/related`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(relate)

    })
        .then(response => {
            return response.json()
        })
        .catch(err => err)
}
export const list = (username) => {
    let endPoint = username ? `${API}/${username}` : `${API}`

    return fetch(`${endPoint}/blog`, {
        method: 'GET',
    })
        .then(response => {
            return response.json()
        })
        .catch(err => err)
}
export const removeBlog = (slug, token) => {
    return fetch(`${requestEndPoint}/blog/${slug}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            userSessionExpired(response)
            return response.json()
        })
        .catch(err => err)
}
export const updateBlog = (blog, token, slug) => {
    return fetch(`${requestEndPoint}/blog/${slug}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            userSessionExpired(response)
            return response.json()
        })
        .catch(err => err)
}
export const listSearch = (params) => {

    let query = queryString.stringify(params)

    return fetch(`${API}/blogs/search?${query}`, {
        method: 'GET',
    })
        .then(response => {
            return response.json()
        })
        .catch(err => err)
}
