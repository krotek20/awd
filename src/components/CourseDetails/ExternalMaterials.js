import React from 'react';
import PropTypes from 'prop-types';

const ExternalMaterials = ({ externalMaterials }) => (
  <div className="course-section">
    <div className="title">
      <h3>External materials</h3>
    </div>
    <div className="section-container">
      <ol>
        {externalMaterials.map((material) => (
          <li>
            <a href={material.link}>{material.title}</a>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

ExternalMaterials.propTypes = {
  externalMaterials: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ExternalMaterials;
