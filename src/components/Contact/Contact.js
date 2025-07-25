import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_9ghd3wq',             // EmailJS service ID
      'template_5n8j199',            // EmailJS template ID
      form.current,
      'dKUYHeDGZUm32wqIv'            // EmailJS public key
    ).then(
      (result) => {
        console.log(result.text);
        e.target.reset();
        alert('mail sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send mail, try again!');
      }
    );
  };

  return (
    <div className="contact" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">Feel free to reach out by filling the form below.</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" className="form-input" required />
        <input type="email" name="email" placeholder="Your Email" className="form-input" required />
        <input type="tel" name="phone" placeholder="Your Phone Number" className="form-input" required />
        <textarea name="message" rows="6" placeholder="Your Message" className="form-textarea" required></textarea>
        <button type="submit" className="submit-button">Send</button>
      </form>

      <div className="links">
        <a href="https://www.instagram.com/eng.omkar" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/instagram.jpeg`} alt="Instagram" className="link" />
        </a>
        <a href="https://www.linkedin.com/in/omkar-naiknavare-b21815239/" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn" className="link" />
        </a>
        <a href="https://github.com/omkar300" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/github.png`} alt="GitHub" className="link" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
