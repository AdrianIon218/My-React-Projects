import {Route, Routes} from 'react-router-dom'
import React from 'react'
import Layout from './components/Layout/Layout'
import Contact from './components/Contact/Contact'
import CV from './components/CV/CV'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <Layout>
      <Routes>        
        <Route path="/" element={<CV />} />
        <Route path='CV' element={<CV />} />
        <Route path='Projects' element={<Projects />} />
        <Route path='Contact' element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
