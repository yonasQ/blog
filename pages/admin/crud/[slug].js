import Layout from '../../../component/Layout'
import Admin from '../../../component/auth/admin'
import BlogUpdate from '../../../component/crud/BlogUpdate'

const UpdateBlog = () => <Layout>
    <Admin>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 pt-5 pb-5">
                    <h1>Update blog</h1>
                </div>
                <div className="col-md-12 pb-5">
                    <BlogUpdate />
                </div>

            </div>
        </div>
    </Admin>
</Layout>

export default UpdateBlog;