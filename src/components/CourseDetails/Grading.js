import React from 'react';
import PropTypes from 'prop-types';
import { faFileWord } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Grading = ({ courseGrading }) => (
  <div className="course-section">
    <div className="title">
      <h3>Assessment and Grading</h3>
    </div>
    <div className="section-container">
      <p>
        <span>Coursework:</span>{' '}
      </p>
      <ul>
        {courseGrading.coursework.map((work) => (
          <li>{work}</li>
        ))}
      </ul>
      <p>
        <span>Exam details:</span> {courseGrading.examDetails}
      </p>
      <p>
        <span>Assignments:</span>{' '}
      </p>
      <ol>
        {courseGrading.assignments.map((assignment) => (
          <li>
            {assignment}{' '}
            <FontAwesomeIcon icon={faFileWord} className="icon" color="blue" />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

Grading.propTypes = {
  courseGrading: PropTypes.shape({
    coursework: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    examDetails: PropTypes.string.isRequired,
    assignments: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default Grading;
