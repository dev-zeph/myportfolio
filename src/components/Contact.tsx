import React, { useState, FormEvent } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset errors
    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    // Validate form
    let hasErrors = false;
    if (name.trim() === '') {
      setNameError(true);
      hasErrors = true;
    }
    if (email.trim() === '') {
      setEmailError(true);
      hasErrors = true;
    }
    if (message.trim() === '') {
      setMessageError(true);
      hasErrors = true;
    }

    if (hasErrors) return;

    setIsSubmitting(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: 'zephchizulu@gmail.com'
    };

    console.log('Sending email with params:', templateParams);
    
    // EmailJS configuration from environment variables
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID!,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
      templateParams, 
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      },
      (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
      },
    ).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            I'm always open to contributing to meaningful projects, collaborating with like-minded teams, or joining mission-driven tech organizations. 
            I'm just a message away.
          </p>
          
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="What's your name?"
                  className={nameError ? 'error' : ''}
                />
                {nameError && <span className="error-message">Please enter your name</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email / Phone *</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="How can I reach you?"
                  className={emailError ? 'error' : ''}
                />
                {emailError && <span className="error-message">Please enter your email or phone number</span>}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Send me any inquiries or questions"
                rows={8}
                className={messageError ? 'error' : ''}
              />
              {messageError && <span className="error-message">Please enter a message</span>}
            </div>
            
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;