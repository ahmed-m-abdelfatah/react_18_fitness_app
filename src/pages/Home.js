import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner.js';
import SearchExercises from '../components/SearchExercises.js';
import Exercises from '../components/Exercises.js';
import { getLocalStorage } from '../utils/getLocalStorage.js';

const Home = () => {
  const [bodyPart, setBodyPart] = useState(localStorage.getItem('bodyPart') || 'all');
  const [exercises, setExercises] = useState(getLocalStorage('exercises') || []);
  const [currentPage, setCurrentPage] = useState(getLocalStorage('currentPage') || 1);

  const exercisesRef = useRef('#exercises');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Home - Golds gym';
  }, []);

  useEffect(() => {
    localStorage.setItem('bodyPart', bodyPart);

    return () => {
      localStorage.setItem('bodyPart', bodyPart);
    };
  }, [bodyPart]);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);

    return () => {
      localStorage.setItem('currentPage', currentPage);
    };
  }, [currentPage]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        exercisesRef={exercisesRef}
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setCurrentPage={setCurrentPage}
      />
      <Exercises
        ref={exercisesRef}
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Box>
  );
};

export default Home;
