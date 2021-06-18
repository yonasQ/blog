import Layout from '../../../component/Layout'
import Admin from '../../../component/auth/admin'
import BlogsRead from '../../../component/crud/BlogsRead'

const Blog = () => <Layout>
    <Admin>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pt-5 pb-5">
                    <h1>Manage Blogs</h1>
                </div>
                <div className="col-md-12 pb-5">
                    <BlogsRead />
                </div>

            </div>
        </div>
    </Admin>
</Layout>

export default Blog;