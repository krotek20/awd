import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main';
import Contact from './pages/Contact';
import CourseDetails from './pages/CourseDetails';
import './static/css/main.scss';

const { PUBLIC_URL } = process.env;

const Index = lazy(() => import('./pages/Index'));
const Resume = lazy(() => import('./pages/Resume'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course/:id" element={<CourseDetails />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
