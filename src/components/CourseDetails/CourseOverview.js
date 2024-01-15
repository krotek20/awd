import React from 'react';
import PropTypes from 'prop-types';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CourseOverview = ({ courseOverview }) => (
  <div className="course-section">
    <div className="title">
      <h3>Course Overview</h3>
    </div>
    <div className="section-container">
      <p>
        <span>Lecture Duration:</span> {courseOverview.lectureDuration}
      </p>
      <p>
        <span>Lecture Hours:</span>{' '}
      </p>
      <ul>
        {courseOverview.lectureHours.map((lecture) => (
          <li>{lecture}</li>
        ))}
      </ul>
    </div>
    <div className="section-container">
      <p>
        <span>Seminar Duration:</span> {courseOverview.seminarDuration}
      </p>
      <p>
        <span>Seminar Hours:</span>{' '}
      </p>
      <ul>
        {courseOverview.seminarHours.map((seminar) => (
          <li>{seminar}</li>
        ))}
      </ul>
    </div>
    <div className="section-container">
      <p>
        <span>Topics:</span>
      </p>
      <ul>
        {courseOverview.topics.map((topic, index) => (
          <li className="lecture-link">
            Lecture {index + 1}: {topic}{' '}
            <FontAwesomeIcon icon={faFilePdf} className="icon" color="red" />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

CourseOverview.propTypes = {
  courseOverview: PropTypes.shape({
    lectureDuration: PropTypes.string.isRequired,
    lectureHours: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    seminarDuration: PropTypes.string.isRequired,
    seminarHours: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    topics: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default CourseOverview;
