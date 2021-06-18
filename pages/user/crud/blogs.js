import Layout from '../../../component/Layout'
import Private from '../../../component/auth/Private'
import BlogsRead from '../../../component/crud/BlogsRead'
import { isAuth } from '../../../actions/auth'

const Blog = () =>{
    const username = isAuth() && isAuth().username
    return (<Layout>
    
    <Private>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pt-5 pb-5">
                    <h1>Manage Blogs</h1>
                </div>
                <div className="col-md-12 pb-5">
                    <BlogsRead username={username}/>
                </div>

            </div>
        </div>
    </Private>
</Layout>)}

export default Blog;