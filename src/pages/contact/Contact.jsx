import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { VscSend, VscMail, VscLocation, VscDeviceMobile } from "react-icons/vsc";
import { ContactWrapper, ContactForm, InfoCards } from './Contact.style';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
        toast.success("Xabaringiz muvaffaqiyatli yuborildi!");
        form.current.reset();
    })
    .catch((error) => {
        // Apostrof xatosi mana bu yerda to'g'irlandi:
        toast.error("Xatolik yuz berdi, qaytadan urinib ko'ring.");
        console.log(error.text);
    })
    .finally(() => setLoading(false));
  };

  return (
    <ContactWrapper id="contact" data-aos="fade-up">
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="title">
        <h1>Get In Touch</h1>
        <p>Contact Me</p>
      </div>

      <div className="contact-container">
        {/* Chap tomon: Kontakt ma'lumotlari */}
        <InfoCards>
          <div className="info-item" data-aos="fade-right">
            <VscDeviceMobile className="icon" />
            <div>
              <h3>Call Me</h3>
              <p>+998 97 935 97 07</p>
            </div>
          </div>
          <div className="info-item" data-aos="fade-right" data-aos-delay="100">
            <VscMail className="icon" />
            <div>
              <h3>Email</h3>
              <p>xoliqovsayyorbek@gmail.com</p>
            </div>
          </div>
          <div className="info-item" data-aos="fade-right" data-aos-delay="200">
            <VscLocation className="icon" />
            <div>
              <h3>Location</h3>
              <p>Samarkand, Uzbekistan</p>
            </div>
          </div>
        </InfoCards>

        {/* O'ng tomon: Aloqa formasi */}
        <ContactForm ref={form} onSubmit={sendEmail} data-aos="fade-left">
          <div className="input-group">
            <div className="input-box">
              <input type="text" name="user_name" placeholder="Full Name" required />
            </div>
            <div className="input-box">
              <input type="email" name="user_email" placeholder="Email Address" required />
            </div>
          </div>
          <div className="input-box">
            <input type="text" name="subject" placeholder="Subject" required />
          </div>
          <div className="input-box">
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"} <VscSend />
          </button>
        </ContactForm>
      </div>
    </ContactWrapper>
  );
};

export default Contact;