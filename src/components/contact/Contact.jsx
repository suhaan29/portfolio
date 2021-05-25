import { SpaRounded } from '@material-ui/icons';
import {React, useState} from 'react' //no need to import after react 17
import "./contact.scss"

function Contact() {

    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id = "contact" >
            <div className="left">
                <h1>Pleasure doing business with you!</h1>
                <img src="assets/handshake.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit = {handleSubmit}>
                    <input type="text" placeholder = "email"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder = "Write something..."></textarea>
                    <button>Send</button>
                    {message && <span>Thanks! I will reply ASAP</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact