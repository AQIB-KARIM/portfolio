import React  from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import { Main, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Main/>} />
          <Route path="/projects" exact element={<ProjectPage/>} />
        </Routes>
      </Router>
      <BackToTop />
    </div>
  )
}

export default App