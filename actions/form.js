import fetch from 'isomorphic-fetch'
import { API } from '../config'
export const contactForm = (data) => {
    let requestEndPoint;
    if (data.authorEmail) {
        requestEndPoint = `${API}/contact-blog-author`
    }
    else{
        requestEndPoint = `${API}/contact`
    }

    return fetch(`${requestEndPoint}`, {
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