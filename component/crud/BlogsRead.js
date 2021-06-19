import React, { useEffect, useState } from 'react'
import { getCookie, isAuth } from '../../actions/auth'
import { list, removeBlog } from '../../actions/blog'
import Router from 'next/router'
import Link from 'next/link'
import moment from 'moment'
import { Alert } from 'reactstrap'

const BlogsRead = ({ username }) => {
    const [Blogs, setBlogs] = useState([])
    const [Message, setMessage] = useState('')
    const [visible, setVisible] = useState(true);
    const onDismiss = () => {
        setVisible(false)
    }
    const token = getCookie('token')
    useEffect(() => {
        LoadBlogs()
    }, [])

    const LoadBlogs = () => (
        list(username)
            .then((data) => {
                if (data.err) {
                    console.log(data.err)
                }
                else {
                    setBlogs(data.blogs)
                }
            })
    )
    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete this blog?')
        if (answer) {
            removeBlog(slug, token)
                .then(data => {
                    if (data.err) {
                        setVisible(true)
                        console.log(data.err)
                    }
                    else {
                        setVisible(true)
                        setMessage(data.message)
                        LoadBlogs()
                    }
                })
        }
    }
    const showUpdateButton = blog => {
        if (isAuth && isAuth().role === 0) {
            return <Link href={`/user/crud/${blog.slug}`}>
                <a className="btn btn-sm btn-warning">Update</a>
            </Link>
        }
        if (isAuth && isAuth().role === 1) {
            return <a href={`/admin/crud/${blog.slug}`} className="btn btn-sm btn-warning">Update</a>
            
        }
    }
    const showAllBlogs = () => {
        return Blogs.map((blog, i) => {
            return <div className='pb-5' key={i}>
                <h3>{blog.title}</h3>
                <p className="mark">
                    Written by {blog.postedBy.name} | Published on {moment(blog.createdAt).fromNow()}
                </p>
                <button className="btn mr-2 btn-sm btn-danger" onClick={() => deleteConfirm(blog.slug)}>Remove</button>
                {showUpdateButton(blog)}
            </div>
        })
    }
    return (
        <React.Fragment>

            <div className="row">
                <div className="col-md-12">
                    {
                        Message && <Alert color="warning" isOpen={visible} toggle={onDismiss}>
                            {Message}
                        </Alert>
                    }
                    {showAllBlogs()}
                </div>
            </div>

        </React.Fragment>
    )
}

export default BlogsRead
