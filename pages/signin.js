import Layout from '../component/Layout'
import Link from 'next/link'
import SigninComponent from '../component/auth/SigninComponent'
import { withRouter } from 'next/router'
import { UncontrolledAlert } from 'reactstrap'

const signin = ({ router }) =>

    <Layout>
        <div className="container-fluid">
            <h2 className="text-center pt-4 pb-4">Signin</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {router.query.message && <UncontrolledAlert color="warning">{router.query.message}</UncontrolledAlert>}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <SigninComponent />
                </div>
            </div>
        </div>
    </Layout>
export default withRouter(signin);
