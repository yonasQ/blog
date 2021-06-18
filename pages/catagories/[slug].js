import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../component/Layout'
import React from 'react'
import moment from 'moment'
import renderHTML from "react-render-html"
import { API, DOMAIN, APP_NAME } from '../../config'
import { getCatagory } from '../../actions/catagory'
import Card from '../../component/blog/Card'
const Catagory = ({ catagory, blogs, query }) => {

    const head = () => (
        <Head>
            <title>{catagory?catagory.name:''} | {APP_NAME}</title>
            {/* <meta name="description" content="programming blogs with react node next" /> */}
            <link rel="canonical" href={`${DOMAIN}/catagories/${query.slug}`} />
            <meta property="og:title" content={`${ catagory?catagory.name:''} | ${APP_NAME}`} />
            {/* <meta property="og:description" content="programming blogs with react node next" /> */}
            <meta property="og:type" content="website" />
            <link property="og:url" href={`${DOMAIN}/catagories/${query.slug}`} />
            <link property="og:site_name" href={`${APP_NAME}`} />
            {/* <link property="og:image" href={`${APP_NAME}`} />
    <link property="og:image:secure_url" href={`${APP_NAME}`} />
    <link property="og:image:type" href={`${APP_NAME}`} /> 
     <link property="og:site_name" href={`${APP_NAME}`} />  */}

        </Head>
    )
    return (
        <React.Fragment>
            {head()}
            <Layout>
                <main>
                    <div className="container-fluid text-center">
                        <header>
                            <div className="col-md-12 pt-3">
                                <h1 className="display-4 font-weight-bold" style={{ textTransform: 'capitalize' }}>
                                    { catagory?catagory.name:''}

                                </h1>
                                {blogs && blogs.map((blog, i) => {
                                    return <article key={i}>
                                        <Card blog={blog} />
                                        <hr />
                                    </article>
                                })}
                            </div>
                        </header>
                    </div>
                </main>
            </Layout>
        </React.Fragment>
    )
}
Catagory.getInitialProps = async({ query }) => {
    return await getCatagory(query.slug)
        .then(data => {
            if (data.err) {
                console.log(data.err)
            }
            else {
                return {
                    catagory: data.catagory,
                    blogs: data.blogs,
                    query
                }
            }
        })
}

export default Catagory
