import Layout from '../../component/Layout'
import Admin from '../../component/auth/admin'
import Link from 'next/link'
const index = () => <Layout>
    <Admin>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 pt-5 pb-5">
                    <h1>Admin dashboard</h1>
                </div>
                <div className="col-md-4">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link href="/admin/crud/catagory-tag">
                                <a >Create Catagory</a>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link href="/admin/crud/catagory-tag">
                                <a >Create Tag</a>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link href="/admin/crud/blog">
                                <a >Create Blog</a>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link href="/admin/crud/blogs">
                                <a >Update/Delete Blog</a>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link href="/user/update">
                                <a >Update Profile</a>
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="col-md-8">rigth</div>
            </div>
        </div>
    </Admin>
</Layout>

export default index;