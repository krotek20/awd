import React from 'react';
import PropTypes from 'prop-types';

const Faq = ({ faq }) => (
  <div className="course-section">
    <div className="title">
      <h3>Frequently Asked Questions</h3>
    </div>
    {faq.map((item) => (
      <div className="section-container">
        <p>
          <span className="faq-span">Q: </span> {item.question}
        </p>
        <p>
          <span className="faq-span">A: </span> {item.answer}
        </p>
      </div>
    ))}
  </div>
);

Faq.propTypes = {
  faq: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Faq;
