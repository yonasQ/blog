import Layout from '../../component/Layout'
import Private from '../../component/auth/private'
import Link from 'next/link';

const index = () => <Layout>
    <Private>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 pt-5 pb-5">
                    <h1>User dashboard</h1>
                </div>
                <div className="col-md-4">
                    <ul className="list-group">

                        <li className="list-group-item">
                            <a href="/user/crud/blog" >Create Blog</a>
                        </li>

                        <li className="list-group-item">
                            <Link href="/user/update">
                                <a >Update Profile</a>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link href="/user/crud/blogs">
                                <a >Update/Delete Blog</a>
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="col-md-8">rigth</div>

            </div>
        </div>
    </Private>
</Layout>

export default index;