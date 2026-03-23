import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { VscSend, VscMail, VscLocation, VscDeviceMobile } from "react-icons/vsc";
import { ContactWrapper, ContactForm, InfoCards } from './Contact.style';

const Contact = ({ lang = 'en' }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  // --- LUG'AT (DICTIONARY) ---
  const t = {
    uz: {
      title: "Bog'lanish",
      subtitle: "Men bilan aloqa",
      call: "Qo'ng'iroq",
      email: "Elektron pochta",
      location: "Manzil",
      locName: "Samarqand, O'zbekiston",
      namePlace: "To'liq ismingiz",
      emailPlace: "Email manzilingiz",
      subjectPlace: "Mavzu",
      messagePlace: "Xabaringiz",
      sendBtn: "Xabarni yuborish",
      sending: "Yuborilmoqda...",
      success: "Xabaringiz muvaffaqiyatli yuborildi!",
      error: "Xatolik yuz berdi, qaytadan urinib ko'ring."
    },
    en: {
      title: "Get In Touch",
      subtitle: "Contact Me",
      call: "Call Me",
      email: "Email",
      location: "Location",
      locName: "Samarkand, Uzbekistan",
      namePlace: "Full Name",
      emailPlace: "Email Address",
      subjectPlace: "Subject",
      messagePlace: "Your Message",
      sendBtn: "Send Message",
      sending: "Sending...",
      success: "Your message has been sent successfully!",
      error: "An error occurred, please try again."
    },
    ru: {
      title: "Связаться",
      subtitle: "Контакты",
      call: "Позвоните мне",
      email: "Электронная почта",
      location: "Локация",
      locName: "Самарканд, Узбекистан",
      namePlace: "Полное имя",
      emailPlace: "Email адрес",
      subjectPlace: "Тема",
      messagePlace: "Ваше сообщение",
      sendBtn: "Отправить сообщение",
      sending: "Отправка...",
      success: "Ваше сообщение успешно отправлено!",
      error: "Произошла ошибка, попробуйте еще раз."
    }
  }[lang] || { /* fallback to en */ };

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
        toast.success(t.success);
        form.current.reset();
    })
    .catch((error) => {
        toast.error(t.error);
        console.log(error.text);
    })
    .finally(() => setLoading(false));
  };

  return (
    <ContactWrapper id="contact" data-aos="fade-up">
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="title">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </div>

      <div className="contact-container">
        {/* Chap tomon: Kontakt ma'lumotlari */}
        <InfoCards>
          <div className="info-item" data-aos="fade-right">
            <VscDeviceMobile className="icon" />
            <div>
              <h3>{t.call}</h3>
              <p>+998 97 935 97 07</p>
            </div>
          </div>
          <div className="info-item" data-aos="fade-right" data-aos-delay="100">
            <VscMail className="icon" />
            <div>
              <h3>{t.email}</h3>
              <p>xoliqovsayyorbek@gmail.com</p>
            </div>
          </div>
          <div className="info-item" data-aos="fade-right" data-aos-delay="200">
            <VscLocation className="icon" />
            <div>
              <h3>{t.location}</h3>
              <p>{t.locName}</p>
            </div>
          </div>
        </InfoCards>

        {/* O'ng tomon: Aloqa formasi */}
        <ContactForm ref={form} onSubmit={sendEmail} data-aos="fade-left">
          <div className="input-group">
            <div className="input-box">
              <input type="text" name="user_name" placeholder={t.namePlace} required />
            </div>
            <div className="input-box">
              <input type="email" name="user_email" placeholder={t.emailPlace} required />
            </div>
          </div>
          <div className="input-box">
            <input type="text" name="subject" placeholder={t.subjectPlace} required />
          </div>
          <div className="input-box">
            <textarea name="message" rows="5" placeholder={t.messagePlace} required></textarea>
          </div>
          
          <button type="submit" disabled={loading}>
            {loading ? t.sending : t.sendBtn} <VscSend />
          </button>
        </ContactForm>
      </div>
    </ContactWrapper>
  );
};

export default Contact;