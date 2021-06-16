import ProfileUpdate from '../../component/auth/profileUpdate'
import Layout from '../../component/Layout'

const UserProfileUpdate = () => {
    return (
        <Layout>
            <div className="container-fluid">
                <div className="row">
                  <ProfileUpdate/>
                </div>
            </div>
        </Layout>
    )
}

export default UserProfileUpdate
