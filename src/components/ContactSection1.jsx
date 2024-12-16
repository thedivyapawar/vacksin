import "../assets/CSS/Contactsection1.css"
import email2 from '../assets/images/main-email.png'

function ContactSection1(){
    return(
        <>
        <div className="row justify-content-center align-items-center py-5 " style={{backgroundColor :'#242527'}}>
        <div className="form-card1 col-10 col-md-7 col-lg-5">
            <div class="form-card2">
            <form class="form">
            <p class="form-heading">Get In Touch</p>

            <div class="form-field">
                <input required="" placeholder="Name" class="input-field" type="text" />
            </div>

            <div class="form-field">
                <input
                required=""
                placeholder="Email"
                class="input-field"
                type="email"
                />
            </div>

            <div class="form-field">
                <input
                required=""
                placeholder="Subject"
                class="input-field"
                type="text"
                />
            </div>

            <div class="form-field">
                <textarea
                required=""
                placeholder="Message"
                cols="30"
                rows="3"
                class="input-field"
                ></textarea>
            </div>

            <button class="sendMessage-btn">Send Message</button>
            </form>
        </div>
        </div>
        </div>

        </>
    )
}

export default ContactSection1;