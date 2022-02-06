import React from 'react';
import Phone from '../phone.png';
import Email from '../email.png';
import Address from '../address.png';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const[sent, setSent] = useState(false);

    const formRef = useRef()

    

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_salman4js', 'template_g5zki1f', formRef.current, 'user_ftwyetwxRBPiw8t4lKyOd')
      .then((result) => {
          console.log(result.text);
          setSent(true);
      }, (error) => {
          console.log(error.text);
      });
  };
    

    return (
        <div className="c" id = "contactscroll">
            <div className="c-bg"></div>
            <div className='c-wrapper'>
                <div className="c-left">
                    <h1 className='c-title'>
                        Let's Collaborate
                    </h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img src={Phone} alt="" className='c-icon' />
                            +91-9361485237
                        </div>
                    </div>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img src={Email} alt="" className='c-icon' />
                            salman4javascript@gmail.com
                        </div>
                    </div>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img src={Address} alt="" className='c-icon' />
                            101 Neithal Nagar, Kadambadi, Nagapattinam - 611001
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-desc'>
                        <b> Wanna Collaborate? </b> Get in Touch!
                    </p>
                    <form ref = {formRef} onSubmit = {handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1"> Name </label>
                            <input type="text" class="form-control"  name="user_name" placeholder="Enter Your Name..."  />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1"> Subject </label>
                            <input type="text" class="form-control"  name="user_subject" placeholder="Subject..."  />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control"  name="user_mail" placeholder="Enter email"  />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1"  name = "user_message"  rows="3" > </textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <div className = "sent">
                            {sent && "Thank You, Your Mail has been sent successfully"}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;
