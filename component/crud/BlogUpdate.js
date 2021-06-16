import React, { useEffect, useState } from 'react'
import { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { getCookie, isAuth } from '../../actions/auth'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import '../../node_modules/react-quill/dist/quill.snow.css'
import { getCatagories } from '../../actions/catagory'
import { getTags } from '../../actions/tag'
import { singleBlog, updateBlog } from '../../actions/blog'
import { QuillModules, QuillFormats } from '../../helpers/quill'
import { API } from '../../config'
import { default as FormData } from "form-data";
import { Alert } from 'reactstrap'

const BlogUpdate = ({ router }) => {
    const [Body, setBody] = useState('')
    const [Value, setValue] = useState({
        title: '',
        error: '',
        formData: '',
        success: ''
    })
    const [blog, setblog] = useState({})
    const [Catagories, setCatagories] = useState([])
    const [Tags, setTags] = useState([])
    const [Checked, setChecked] = useState([])
    const [CheckedCatagories, setCheckedCatagories] = useState([])
    useEffect(() => {
        setValue({ ...Value, formData: new FormData() })
        initBlogs()
        initCatagories()
        initTags()

    }, [router])
    const [visible, setVisible] = useState(true);
    
    const { title, error, success, formData } = Value;
    const onDismiss = () => {
        if(error){setVisible(false)}
        else {
            if (isAuth && isAuth().role === 0) {
                return router.replace(`/user`)
            }
            if (isAuth && isAuth().role === 1) {
                return router.replace(`/admin`)
            }
        }
    };
    const token = getCookie('token')
    const initBlogs = async () => {
        if (router.query.slug) {
            await singleBlog(router.query.slug)
                .then(data => {
                    if (data.err) {
                        console.log(data.err)
                    }
                    else {
                        setblog(data.blog)
                        setValue({ ...Value, title: !data.blog ? '' : data.blog.title })
                        setBody(!data.blog ? '' : data.blog.body)
                        setChecked(data.blog.tags.map(t => { return t._id }))
                        setCheckedCatagories(data.blog.catagories.map(c => { return c._id }))
                    }
                })
        }
    }

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
    let blogUpdateForm = new FormData()
    
    const handleChange = name => e => {
        const value = name == 'photo' ? e.target.files[0] : e.target.value
        blogUpdateForm.set(name,value)
        setValue({ ...Value, [name]: value, formData: blogUpdateForm, error: false })
    }
    const handleBody = e => {
        setBody(e)
        
        blogUpdateForm.set('body', e)
        setValue({ ...Value,formData: blogUpdateForm, error: false })
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
       
        blogUpdateForm.set('tags', all)
        setValue({ ...Value, formData: blogUpdateForm, error: false })
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
        blogUpdateForm.set('catagories', all)
        setValue({ ...Value, formData: blogUpdateForm, error: false })
    }

    const checkCatagories = id => {

        return CheckedCatagories.indexOf(id) == -1 ? false : true
    }
    const checkTags = id => {

        return Checked.indexOf(id) == -1 ? false : true
    }

    const showCatagories = () => {
        return (
            Catagories && Catagories.map((c, i) => {
                return (<li key={i} className="list-unstyled">
                    <input onChange={handleCatagories(c._id)} checked={checkCatagories(c._id)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">{c.name}</label>
                </li>)
            })
        )
    }
    const showTags = () => {
        return (
            Tags.map((t, i) => {
                return (<li key={i} className="list-unstyled">
                    <input onChange={handleTags(t._id)} checked={checkTags(t._id)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">{t.name}</label>
                </li>)
            }
            )
        )
    }
    const editBlog = (e) => {
        e.preventDefault()

        updateBlog(formData, token, router.query.slug)
            .then(data => {

                if (data.err) {
                    setVisible(true)
                    setValue({ ...Value, success: '', error: data.err })
                }
                else {
                    setVisible(true)
                    setValue({ ...Value, error: '', success: `Blog titled "${data.response.title}" is successfully updated` })
                }
            })
    }
    const updateBlogForm = (e) => {
        return (
            <form method="post" onSubmit={editBlog}>
                <div className="form-group">
                    <label className="text-muted">Title</label>
                    <input type="text" onChange={handleChange('title')} value={title} className="form-control" />

                </div>
                <div className="form-group">
                    <ReactQuill modules={QuillModules} formats={QuillFormats} value={Body} placeholder="what's on your mind" onChange={handleBody} />
                </div>
                <button className='btn btn-primary' type="submit">Update</button>
            </form>
        );
    };
    const displayError = () => {
        return error ?
            <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                {error}
            </Alert> : ''
    }
    const displaySuccess = () => {
        return success ?
            <Alert color="success" isOpen={visible} toggle={onDismiss}>
                {success}
            </Alert> : ''
    }
    return (
        <React.Fragment>
            <div className="container-fluid pb-5">
                <div className="row">
                    <div className="mb-3 col-md-8 ">
                        {displayError()}
                        {displaySuccess()}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        {updateBlogForm()}
                        {
                            JSON.stringify(blog.photo) ?
                                <div>
                                    <h4 className="pt-5 pb-3 mb-0 font-weight-light">Featured image</h4>
                                    <img style={{ width: '100%' }}
                                        src={`${API}/blog/photo/${blog.slug}`} alt={`${blog.title}`} className=" img img-fluid featured-image" />
                                </div>
                                : ''
                        }
                       

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
                                    <input onChange={handleChange('photo')} type="file" accept="image/*" hidden/>
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

export default withRouter(BlogUpdate)
