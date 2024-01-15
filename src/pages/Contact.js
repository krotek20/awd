import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';
import ContactPanel from '../components/Contact/ContactPanel';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Vintila Radu via email @ vintila.radu@ubbcluj.ro"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <ContactPanel />
      </div>
      <div className="bottom-icons">
        <ContactIcons />
      </div>
    </article>
  </Main>
);

export default Contact;
