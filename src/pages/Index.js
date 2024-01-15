import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Cell from '../components/Courses/Cell';
import data from '../data/courses';

const Index = () => (
  <Main
    description={
      "Vintilă Radu's academic website. Assistant Professor at Babeș-Bolyai University, Cluj-Napoca."
    }
  >
    <article className="post">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Currently Teaching</Link>
          </h2>
          <p>The list of the current courses that I&apos;m teaching</p>
        </div>
      </header>
      {data.map((course) => (
        <Cell data={course} key={course.title} />
      ))}
    </article>
  </Main>
);

export default Index;
