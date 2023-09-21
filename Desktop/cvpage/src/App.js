import {Route, Routes} from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Layout from './components/Layout/Layout';
import LoadingSpinner from './components/Layout/LoadingSpinner';

const CV = lazy(() => import("./components/CV/CV"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const NoPage = lazy(() => import("./components/NoPage/NoPage"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>        
          <Route path="/" element={<CV />} />
          <Route path='CV' element={<CV />} />
          <Route path='Projects' element={<Projects />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
