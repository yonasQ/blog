import Link from 'next/link'
import moment from 'moment'
import renderHTML from 'react-render-html'
import { API } from '../../config'
const SmallCard = ({ blog }) => {
    return (
        <div className="card">
            <section>
                <Link href={`/blogs/${blog.slug}`}>
                    {JSON.stringify(blog.photo)  ? <img src={`${API}/blog/photo/${blog.slug}`} alt={`${blog.title}`} style={{height: '250px', width: '100%' }} className="img img-fliud" /> : ''}
                </Link>
            </section>
            <div className="card-body">
                <section>
                    <Link href={`/blogs/${blog.slug}`}>
                       <a><h5 className="card-title" style={{textTransform:'capitalize'}}>{blog.title}</h5></a>
                    </Link>
                    <p className="card-text">{renderHTML(blog.excerpt)}</p>
                </section>
            </div>
            <div className="card-body">
                Posted {moment(blog.createdAt).fromNow()} by {' '}
                <Link href={`${blog.postedBy.profile}`}>
                    <a className='float-right'>{blog.postedBy.username}</a>
                </Link>
            </div>
        </div>
    )
}

export default SmallCard
