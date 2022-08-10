import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { Box } from '@mui/material';

import './App.css';
import Home from './pages/Home.js';
import ExerciseDetail from './pages/ExerciseDetail.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import NotFoundPage from './components/NotFoundPage.js';
import ExceededLimit from './components/ExceededLimit.js';

const App = () => {
  const [is404, setIs404] = useState(false);

  return (
    <Box width='25rem' sx={{ width: { xl: '93rem' } }} m='auto'>
      {!is404 && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
        <Route path='*' element={<NotFoundPage setIs404={setIs404} />} />
        <Route path='/404' element={<NotFoundPage setIs404={setIs404} />} />
        <Route path='/429' element={<ExceededLimit setIs404={setIs404} />} />
      </Routes>
      {!is404 && <Footer />}
    </Box>
  );
};

export default App;

/**
Additional tasks:
- [X] search with enter
- [X] show exercises link in home page
- [X] gif lag loading
- [X] img in videos
- [X] pagination first number not 1
- [X] add 404 page
- [X] exceeded limit page
- [X] save data to local storage because 500 req / month
After feedback edits:
- [X] edit app name in pwa
- [X] remove unneeded imgs to make web app faster
- [X] save all body parts tp local storage
- [X] make font smaller
 */
