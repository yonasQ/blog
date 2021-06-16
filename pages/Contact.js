import Layout from '../component/Layout'
import Link from "next/link"
import ContactForm from '../component/form/contactForm';
const Contact = () => <Layout>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h2>Contact Form</h2>
                <hr />
                <ContactForm />
            </div>
        </div>
    </div>
</Layout >

export default Contact;