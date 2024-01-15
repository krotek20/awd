import React from 'react';

const ContactForm = () => (
  <form className="contact-form">
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <textarea placeholder="Message" />
    <button type="submit" className="button">
      Send
    </button>
  </form>
);

const ContactInfo = () => (
  <div className="contact-info">
    <p>
      <span>Email:</span> vintila.radu@ubbcluj.ro
    </p>
    <p>
      <span>Phone:</span> 0713 123 321
    </p>
    <p>
      <span>Address:</span> Str. Mihail Kogalniceanu, no. 12-14, office no. 333,
      401943, Cluj-Napoca, Romania
    </p>
  </div>
);

const ContactPanel = () => (
  <div className="contact-page">
    <h1>Write me an Email</h1>
    <ContactForm />
    <ContactInfo />
  </div>
);

export default ContactPanel;
