import Layout from '../../../component/Layout'
import Private from '../../../component/auth/Private'
import BlogCreate from '../../../component/crud/BlogCreate'

const CreateBlog = () => <Layout>
    <Private>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 pt-5 pb-5">
                    <h1>Create a new blog</h1>
                </div>
                <div className="col-md-12">
                    <BlogCreate />
                </div>

            </div>
        </div>
    </Private>
</Layout>

export default CreateBlog;