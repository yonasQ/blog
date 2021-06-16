import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../component/Layout'
import React, { useState, useEffect } from 'react'
import { singleBlog, listRelatedBlogs } from '../../actions/blog'
import moment from 'moment'
import renderHTML from "react-render-html"
import SmallCard from '../../component/blog/smallCard'
import { API, DOMAIN, APP_NAME } from '../../config'
import DisqusThread from '../../component/DisqusThread'

const SingleBlog = ({ blog, query }) => {
    const head = () => (
        <Head>
            <title>{blog.title} | {APP_NAME}</title>
            <meta name="description" content={blog.mdesc} />
            <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:title" content={`${blog.title} | ${APP_NAME}`} />
            <meta property="og:description" content={blog.mdesc} />
            <meta property="og:type" content="website" />
            <link property="og:url" href={`${DOMAIN}/blogs/${query.slug}`} />
            <link property="og:site_name" href={`${APP_NAME}`} />
            <link property="og:image" href={`${API}/blog/photo/${blog.slug}`} />
            <link property="og:image:secure_url" href={`${API}/blog/photo/${blog.slug}`} />
            <link property="og:image:type" href={`image/jpg`} />

        </Head>
    )
    const [RelatedBlogs, setRelatedBlogs] = useState([])
    const loadRelatedBlogs = () => {
        const { _id, catagories } = blog
        const relate = { _id, catagories }
        return listRelatedBlogs({ relate })
            .then((data) => {
                if (data.err) {
                    console.log(err)
                }
                setRelatedBlogs(data.blogs)
            })

    }
    useEffect(() => {
        loadRelatedBlogs()
    }, [])
    const blogCatagories = () => {
        return blog.catagories.map((c, i) => (
            <Link key={i} href={`/catagories/${c.slug}`}>
                <a className="btn btn-primary ml-1 mr-1 mt-3">{c.name}</a>
            </Link>
        ))
    }
    const blogTags = () => {
        return blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-primary ml-1 mr-1 mt-3">{t.name}</a>
            </Link>
        ))
    }
    const showRelatedBlogs = () => {

            return RelatedBlogs.map((blog, i) => 
             (
             <div className="col-md-4" key={i}>
                <article>
                    <SmallCard blog={blog} />
                </article>
            </div>
            )
        )
}
const disqusComment = ()=>{
    return(
        <div>
            <DisqusThread id={blog._id} title={blog.title} path={`/blogs/${blog.slug}`}/>
        </div>
    )
}
    return (
        <React.Fragment>
            {head()}
            <Layout>
                <main>
                    <article>
                        <div className="container-fluid">
                            <section>
                                <div className="row" >

                                    {
                                        JSON.stringify(blog.photo) ?
                                            <img style={{width:'100%'}}
                                                src={`${API}/blog/photo/${blog.slug}`} alt={`${blog.title}`} className="img img-fluid featured-image" />
                                            : ''
                                    }
                                </div>
                            </section>
                            <div className="container">
                                <section>
                                    <h1 className="display-2 pt-3 pb-3 text-center">{blog.title}</h1>
                                    <p className="lead mark mt-3">
                                        Written by <Link href={`${blog.postedBy.profile}`}><a>{blog.postedBy.username}</a></Link> | Published {moment(blog.updatedAt).fromNow()}
                                    </p>
                                    <div className="pb-3">
                                        {blogCatagories()}
                                        {blogTags()}
                                        <br />
                                        <br />
                                    </div>
                                </section>
                            </div>
                            <div className="container">
                                <section>
                                    <div className="col-md-12 lead blog-body">
                                        {renderHTML(blog.body)}
                                    </div>
                                </section>
                            </div>
                            <div className="container pb-5">
                                <h4 className="text-center pt-5 pb-5 h2">Related Blogs</h4>
                                < hr />
                                <div className="row">  {showRelatedBlogs()}</div>
                            </div>
                            <div className="container pb-5">
                                {disqusComment()}
                            </div>
                        </div>
                    </article>
                </main>
            </Layout>
        </React.Fragment >
    )
}
SingleBlog.getInitialProps = ({ query }) => {

    return singleBlog(query.slug)
        .then((data) => {
            if (data.err) {
                console.log(data.err)
            }
            else {
                return {
                    blog: data.blog,
                    query
                }
            }
        })
}
export default SingleBlog
