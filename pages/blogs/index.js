import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../component/Layout'
import React, { useState } from 'react'
import { listBlogsWithCatagoriesAndTags } from '../../actions/blog'
import Card from '../../component/blog/Card'
import { withRouter } from 'next/router'
import { API, DOMAIN, APP_NAME } from '../../config'
const Blogs = ({ blogs, catagories, tags, totalBlogs, blogsLimit, blogsSkip, router }) => {
    const head = () => (
        <Head>
            <title>programming blogs | {APP_NAME}</title>
            <meta name="description" content="programming blogs with react node next" />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta property="og:title" content={`latest tutorial on development ${APP_NAME}`} />
            <meta property="og:description" content="programming blogs with react node next" />
            <meta property="og:type" content="website" />
            <link property="og:url" href={`${DOMAIN}${router.pathname}`} />
            <link property="og:site_name" href={`${APP_NAME}`} />
            {/* <link property="og:image" href={`${APP_NAME}`} />
    <link property="og:image:secure_url" href={`${APP_NAME}`} />
    <link property="og:image:type" href={`${APP_NAME}`} /> 
     <link property="og:site_name" href={`${APP_NAME}`} />  */}

        </Head>
    )
    const [Limit, setLimit] = useState(blogsLimit)
    const [Skip, setSkip] = useState(blogsSkip)
    const [Size, setSize] = useState(totalBlogs)
    const [LoadedBlogs, setLoadedBlogs] = useState([])

    const LoadMore = () => {
        let toskip = Skip + Limit

        listBlogsWithCatagoriesAndTags(toskip, Limit)
            .then(data => {
                if (data.err) {
                    console.log(data.err)
                }
                else {
                    setLoadedBlogs([...LoadedBlogs, ...data.blogs]);
                    setSkip(toskip);
                    setSize(data.size)
                }
            })
    }
    const LoadMoreButtun = () => {
        return (
            Size > 0 && Size >= Limit && <button onClick={LoadMore} className="btn btn-primary">Load More</button>
        )
    }

    const showAllBlogs = () => {
        return blogs && blogs.map((blog, i) => {
            return <article key={i}>
                <Card blog={blog} />
                <hr />
            </article>
        })
    }
    const showLoadedBlogs = () => {
        return LoadedBlogs.map((blog, i) => {
            return <article key={i}>
                <Card blog={blog} />
                <hr />
            </article>
        })
    }
    const showAllCatagories = () => {
        return catagories && catagories.map((catagory, i) => {
            return <Link key={i} href={`/catagories/${catagory.slug}`}>
                <a className="btn btn-primary ml-1 mr-1 mt-3">
                    {catagory.name}
                </a>
            </Link>
        })
    }
    const showAllTags = () => {
        return tags && tags.map((tag, i) => {
            return <Link key={i} href={`/tags/${tag.slug}`}>
                <a className="btn btn-outline-primary ml-1 mr-1 mt-3">
                    {tag.name}
                </a>
            </Link>
        })
    }
    return (
        <React.Fragment>
            {head()}
            <Layout>
                <main>
                    <div className="container-fluid">
                        <header>
                            <div className="col-md-12 pt-3">
                                <h1 className="display-5 font-weight-bold text-center">Programming blogs with react</h1>
                            </div>
                        </header>
                        <section>
                            <div className="pb-5 text-center">
                                {showAllCatagories()}
                                <br />
                                {showAllTags()}
                            </div>
                        </section>
                    </div>
                    <div className="container-fluid">{showAllBlogs()}</div>
                    <div className="container-fluid">{showLoadedBlogs()}</div>
                    <div className="text-center pt-5 pb-5">{LoadMoreButtun()}</div>
                </main>
            </Layout>
        </React.Fragment>
    )
}
Blogs.getInitialProps = () => {
    let skip = 0
    let limit = 2
    return listBlogsWithCatagoriesAndTags(skip, limit)
        .then((data) => {
            if (data.err) {
                console.log(data.err)
            }
            else {
                return {
                    blogs: data.blogs,
                    catagories: data.catagories,
                    tags: data.tags,
                    totalBlogs: data.size,
                    blogsLimit: limit,
                    blogsSkip: skip
                }
            }
        })
}
export default withRouter(Blogs)