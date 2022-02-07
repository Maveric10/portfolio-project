import React, { useRef } from "react";
import "./contact.css";
import Phone from "../images/phone.png";
import Email from "../images/email.png";
import Address from "../images/address.png";

const Contact = () => {
    const formRef = useRef()

    const handleSubmit = (e) =>{
        e.preventDefault()
        
    }
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 1222 112 21
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              contact@me.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              abc street, XYZ Austria
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story</b>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quo dolore, sapiente labore harum explicabo
            aliquid, minima amet placeat alias recusandae repellendus facilis
            illo sint natus.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
              <input type='text' placeholder='Name' name='user_name' />
              <input type='text' placeholder='Subject' name='user_subject' />
              <input type='text' placeholder='Email' name='user_email' />
              <textarea rows='5' placeholder='Message' name='maessage' />
              <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
