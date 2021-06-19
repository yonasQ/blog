
import React, { useEffect, useState } from 'react'
import { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { getCookie, isAuth } from '../../actions/auth'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

import { getCatagories } from '../../actions/catagory'
import { getTags } from '../../actions/tag'
import { createBlog } from '../../actions/blog'
import { QuillModules, QuillFormats } from '../../helpers/quill'
import { Alert } from 'reactstrap'

const BlogCreate = ({ router }) => {
    const blogFromLS = () => {
        if (typeof window == 'undefined') {
            return false
        }
        if (localStorage.getItem('blog')) {
            return JSON.parse(localStorage.getItem('blog'))
        }
        else {
            return false
        }
    }
    const [Catagories, setCatagories] = useState([])
    const [Tags, setTags] = useState([])
    const [Body, setBody] = useState(blogFromLS);
    const [visible, setVisible] = useState(true);
    
    const [Value, setValue] = useState({
        title: '',
        err: '',
        sizeError: '',
        success: '',
        formData: '',
        hidePublishButton: false
    })

    const [Checked, setChecked] = useState([])
    const [CheckedCatagories, setCheckedCatagories] = useState([])
    useEffect(() => {
        setValue({ ...Value, formData: new FormData() })
        initCatagories()
        initTags()
    }, [router])
    const { title, err, sizeError, success, formData, hidePublishButton } = Value;
    const onDismiss = () => {
        setVisible(false)
        if (err) { setVisible(false) }
        else {
            if (isAuth && isAuth().role === 0) {
                return router.replace(`/user`)
            }
            if (isAuth && isAuth().role === 1) {
                return router.replace(`/admin`)
            }
        }
    };
    const initCatagories = () => {
        getCatagories().then(data => {
            if (data.err) {
                setValue({ ...Value, err: data.err })

            }
            else {
                setCatagories(data.catagories)
            }
        })
    }

    const initTags = () => {
        getTags().then(data => {
            if (data.err) {
                setValue({ ...Value, err: data.err })

            }
            else {
                setTags(data.tags)
            }
        })
    }




    const handleChange = name => e => {
        const value = name == 'photo' ? e.target.files[0] : e.target.value
        formData.set(name, value)
        setValue({ ...Value, [name]: value, formData, err: false })
    }
    const handleBody = e => {
        setBody(e)
        formData.set('body', e)
        if (typeof window != 'undefined') {
            localStorage.setItem('blog', JSON.stringify(e))
        }
    }
    const handleTags = (t) => () => {
        const checkedTag = Checked.indexOf(t)
        const all = [...Checked]
        if (checkedTag === -1) {
            all.push(t)
        }
        else {
            all.splice(checkedTag, 1)
        }
        setChecked(all)
        formData.set('tags', all)
    }
    const handleCatagories = (c) => () => {
        const checkedTag = CheckedCatagories.indexOf(c)
        const all = [...CheckedCatagories]
        if (checkedTag === -1) {
            all.push(c)
        }
        else {
            all.splice(checkedTag, 1)
        }
        setCheckedCatagories(all)
        formData.set('catagories', all)
    }
    const showCatagories = () => {
        return (
            Catagories && Catagories.map((c, i) => {
                return (<li key={i} className="list-unstyled">
                    <input onChange={handleCatagories(c._id)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">{c.name}</label>
                </li>)
            })
        )
    }
    const showTags = () => {
        return (
            Tags.map((t, i) => {
                return (<li key={i} className="list-unstyled">
                    <input onChange={handleTags(t._id)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">{t.name}</label>
                </li>)
            }
            )
        )
    }
    const publishBlog = e => {
        e.preventDefault()
        const token = getCookie('token')
        createBlog(formData, token)
            .then(data => {

                if (data.err) {
                    setVisible(true)
                    setValue({ ...Value, err: data.err, success: '' })
                }
                else {
                    setVisible(true)
                    setValue({ ...Value, err: false, success: `A new blog titled "${data.result.title}" is created` })
                    setBody('')
                }
            })
    }
    const displayError = () => {
        return err ?
            <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                {err}
            </Alert> : ''
    }
    const displaySuccess = () => {
        return success ?
            <Alert color="success" isOpen={visible} toggle={onDismiss}>
                {success}
            </Alert> : ''
    }
    const createBlogForm = (e) => {
        return (
            <form method="post" onSubmit={publishBlog}>
                <div className="form-group">
                    <label className="text-muted">Title</label>
                    <input type="text" onChange={handleChange('title')} value={title} className="form-control" />
                </div>
                <div className="form-group">
                    <ReactQuill modules={QuillModules} formats={QuillFormats} value={Body} placeholder="what's on your mind" onChange={handleBody} />
                </div>
                <button className='btn btn-primary' type="submit">Publish</button>
            </form>
        );
    };

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">

                        {displayError()}
                        {displaySuccess()}

                        {createBlogForm()}
                    </div>
                    <div className="col-md-4">
                        <div>
                            <div className="form-group pb-2">
                                <h5>Featured image</h5>
                                <hr />
                                <small className="text-muted">max size: 1mb</small>
                                <br />
                                <label className="btn btn-outline-info">
                                    Upload featured image
                                    <input type="file" accept="image/*" onChange={handleChange('photo')} hidden />
                                </label>
                            </div>
                        </div>
                        <div>
                            <h5>Catagories</h5>
                            <hr />
                            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}> {showCatagories()}</ul>
                        </div>
                        <div>
                            <h5>Tags</h5>
                            <hr />
                            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}> {showTags()}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}


export default withRouter(BlogCreate)
