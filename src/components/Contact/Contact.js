import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_9ghd3wq',             // your EmailJS service ID
      'template_5n8j199',            // your EmailJS template ID
      form.current,
      'dKUYHeDGZUm32wqIv'            // your public key
    ).then(
      (result) => {
        console.log(result.text);
        e.target.reset();
        alert('Message sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send message, try again!');
      }
    );
  };

  // Image paths from public folder
  const instagramImg = `${process.env.PUBLIC_URL}/instagram.jpeg`;
  const linkedinImg = `${process.env.PUBLIC_URL}/linkedin.png`;
  const githubImg = `${process.env.PUBLIC_URL}/github.png`;

  return (
    <div className="contact" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">Feel free to reach out by filling the form below.</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" className="form-input" required />
        <input type="email" name="from_email" placeholder="Your Email" className="form-input" required />
        <input type="tel" name="from_number" placeholder="Your Phone Number" className="form-input" required />
        <textarea name="message" rows="6" placeholder="Your Message" className="form-textarea" required></textarea>
        <button type="submit" className="submit-button">Send</button>
      </form>

      <div className="links">
        <a href="https://www.instagram.com/eng.omkar" target="_blank" rel="noopener noreferrer">
          <img src={instagramImg} alt="Instagram" className="link" />
        </a>
        <a href="https://www.linkedin.com/in/omkar-naiknavare-b21815239/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinImg} alt="LinkedIn" className="link" />
        </a>
        <a href="https://github.com/omkar300" target="_blank" rel="noopener noreferrer">
          <img src={githubImg} alt="GitHub" className="link" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
