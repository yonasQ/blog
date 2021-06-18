import Layout from '../../../component/Layout'
import Admin from '../../../component/auth/Admin'
import Catagory from '../../../component/crud/catagory'
import Tag from '../../../component/crud/tag'

const CatagoryTag = () => <Layout>
    <Admin>
        <div className="container-fluid">
            <div className="row pb-5">
                <div className="col-md-12 pt-5 pb-5">
                    <h1>Manage Catagories and Tags</h1>
                </div>
                <div className="col-md-6">
                    <p>Catagories</p>
                    <Catagory/>
                </div>
                <div className="col-md-6">
                    <p>Tags</p>
                    <Tag/>
                </div>
            </div>
        </div>
    </Admin>
</Layout>

export default CatagoryTag;