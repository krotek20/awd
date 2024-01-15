import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env;

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <div className="logo">
        <img src={`${PUBLIC_URL}/images/me.webp`} alt="" />
      </div>
      <header>
        <h2>Vintilă Radu-Florian</h2>
        <p>
          <a href="mailto:vintila.radu@ubbcluj.ro">vintila.radu@ubbcluj.ro</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Vintilă Radu. I am <i>Assistant Professor</i> at{' '}
        <a href="https://www.ubbcluj.ro/ro/">Babeș-Bolyai University</a>,
        Romania, Cluj-Napoca. My expertise lies in the field of web programming,
        where I am actively involved in research projects and publications. I am
        passionate about fostering a dynamic learning environment for students
        and contributing to the academic community through my dedication to
        excellence in teaching and scholarly pursuits.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="update-status">
        Last updated on <b>08.01.2024</b>
      </p>
    </section>
  </section>
);

export default SideBar;
