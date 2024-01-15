import React from 'react';
import { useLocation } from 'react-router-dom';
import Main from '../layouts/Main';
import CourseOverview from '../components/CourseDetails/CourseOverview';
import Grading from '../components/CourseDetails/Grading';
import ExternalMaterials from '../components/CourseDetails/ExternalMaterials';
import Faq from '../components/CourseDetails/FAQ';

const CourseDetails = () => {
  const { state } = useLocation();

  return (
    <Main title={state.course.title} description={state.course.subtitle}>
      <article className="post" id="course-details">
        <header>
          <h2>{state.course.title}</h2>
          <h4>{state.course.subtitle}</h4>
          <p>Teams code: {state.course.teamsCode}</p>
        </header>
        <CourseOverview courseOverview={state.course.overview} />
        <Grading courseGrading={state.course.grading} />
        <ExternalMaterials externalMaterials={state.course.externalMaterials} />
        <Faq faq={state.course.faq} />
      </article>
    </Main>
  );
};

export default CourseDetails;
