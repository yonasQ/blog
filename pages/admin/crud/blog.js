import Layout from '../../../component/Layout'
import Admin from '../../../component/auth/Admin'
import BlogCreate from '../../../component/crud/BlogCreate'

const CreateBlog = () => <Layout>
    <Admin>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 pt-5 pb-5">
                    <h1>Create a new blog</h1>
                </div>
                <div className="col-md-12 pb-5">
                    <BlogCreate />
                </div>

            </div>
        </div>
    </Admin>
</Layout>

export default CreateBlog;