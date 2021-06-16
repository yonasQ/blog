import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../component/Layout'
import React, { useState, useEffect } from 'react'
import { getPublicProfile } from '../../actions/user'
import moment from 'moment'
import { API, DOMAIN, APP_NAME } from '../../config'
import ContactForm from '../../component/form/contactForm'

const UserProfile = ({ user, blogs,query }) => {
    const head = () => (
        <Head>
            <title>{user.username} | {APP_NAME}</title>
            <meta name="description" content={`Blogs By ${user.username}`} />
            <link rel="canonical" href={`${DOMAIN}/profile/${query.username}`} />
            <meta property="og:title" content={`${query.username} | ${APP_NAME}`} />
            <meta property="og:description" content={`Blogs By ${user.username}`} />
            <meta property="og:type" content="website" />
            <link property="og:url" href={`${DOMAIN}/profile/${query.username}`} />
            <link property="og:site_name" href={`${APP_NAME}`} />
            {/* <link property="og:image" href={`${API}/blog/photo/${blog.slug}`} />
            <link property="og:image:secure_url" href={`${API}/blog/photo/${blog.slug}`} />
            <link property="og:image:type" href={`image/jpg`} /> */}

        </Head>
    )
    const showBlogs = () => {
        return blogs.map((blog, i) => {
            return <div className="mt-4 mb-4">
                <Link href={`/blogs/${blog.slug}`}><a className="lead">{blog.title}</a></Link>
            </div>
        })
    }
    return (
        <React.Fragment>
            {head()}
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                   <div className="row">
                                        {
                                            user.photo && <img src={`${API}/user/photo/${user.username}`} alt="user profile" style={{ borderRadius: '50%', maxHeight: '100px', width: 'auto' }} className="img img-fluid ml-2" />
                                        }
                                        <div className="ml-3 my-auto">
                                            <h5>{user.name}</h5>
                                            <p className="text-muted">Joined {moment(user.updatedAt).fromNow()}</p>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title bg-primary p-4 text-white">Recent blogs by {user.name}</h5>
                                    <br />
                                    {showBlogs()}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title bg-primary p-4 text-white">Message {user.name}</h5>
                                    <br />
                                   <ContactForm authorEmail={user.email}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}
UserProfile.getInitialProps = ({ query }) => {
    return getPublicProfile(query.username)
        .then(data => {
            if (data.err) {
                console.log(data.err)
            }
            else {
                
                return {
                    user: data.user,
                    blogs: data.blogs,
                    query
                }

            }
        })
}
export default UserProfile
