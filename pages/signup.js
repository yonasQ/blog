import Layout from '../component/Layout'
import SignupComponent from '../component/auth/SignupComponent'
const signup = () =>
    <Layout>
        <div className="container-fluid">
            <h2 className="text-center pt-4 pb-4">signup</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <SignupComponent />
                </div>
            </div>
        </div>
    </Layout>


export default signup;
