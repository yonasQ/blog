import Link from 'next/link'
import moment from 'moment'
import renderHTML from 'react-render-html'
import { API } from '../../config'
const Card = ({ blog }) => {
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

    return (
        <div>
            <div className="lead pb-4">
                <header>
                    <Link href={`/blogs/${blog.slug}`}>
                        <a><h1 className='font-weight-bold pt-3 pb-3'>{blog.title}</h1></a>
                    </Link>
                </header>
                <section>
                    <p className="mark ml-1 pb-2 pt-2">
                        Written by  <Link href={`${blog.postedBy.profile}`}><a>{blog.postedBy.username}</a></Link> | Published {moment(blog.updatedAt).fromNow()}
                    </p>
                </section>
                <section>
                    {blogCatagories()}
                    {blogTags()}
                    <br />
                    <br />
                </section>
           
                <section className="row">
                    <div className="col-md-4">
                        <section>
                            {blog.photo ? <img src={`${API}/blog/photo/${blog.slug}`} alt={`${blog.title}`} style={{ maxHeight: 'auto', width: '100%' }} className="img img-fliud" /> : ''}
                        </section>
                    </div>
                    <div className="col-md-8">
                        <section>
                            <div className='pb-3'>
                                {renderHTML(blog.excerpt)}
                            </div>
                            <Link href={`/blogs/${blog.slug}`}>
                                <a className='btn btn-primary pt-2'>Read More</a>
                            </Link>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Card
