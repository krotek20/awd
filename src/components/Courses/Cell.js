import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cell = ({ data }) => (
  <article className="box mini-post">
    <header className="post-header-box">
      <div className="post-header">
        <h3>
          <Link to={`/course/${data.id}`} state={{ course: data }}>
            {data.title}
          </Link>{' '}
          - {data.subtitle}
        </h3>
        {data.activityYears.map((yearPair, index) => (
          <time className="published" key={yearPair[0]}>
            {index !== 0 ? ', ' : ''}
            {yearPair[0]} - {yearPair[1]}
          </time>
        ))}
      </div>
    </header>
    <div className="description">
      <p>{data.desc}</p>
    </div>
    <Link to={`/course/${data.id}`} state={{ course: data }} className="button">
      See more
    </Link>
  </article>
);

Cell.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    activityYears: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number.isRequired),
    ).isRequired,
    teamsCode: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    overview: PropTypes.shape({
      lectureDuration: PropTypes.string.isRequired,
      lectureHours: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      seminarDuration: PropTypes.string.isRequired,
      seminarHours: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      topics: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
    grading: PropTypes.shape({
      coursework: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      examDetails: PropTypes.string.isRequired,
      assignments: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
    externalMaterials: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    faq: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default Cell;
