import NavBar from './NavBar'
import Footer from './Footer'

const ContactForm = () => (
    <div>
        <NavBar />
        <form className="contact-form">
            <p>Name:
                <input name="text-name" type="text"></input>
            </p>

            <p>E-mail:
                <input name="text-email" type="email"></input>
            </p>

            <button>Submit</button>
        </form>

        <Footer />
        
    </div>
)

export default ContactForm