import Layout from '../../../component/Layout'
import Private from '../../../component/auth/private'
import BlogUpdate from '../../../component/crud/BlogUpdate'

const UpdateBlog = () => <Layout>
    <Private>
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
    </Private>
</Layout>

export default UpdateBlog;