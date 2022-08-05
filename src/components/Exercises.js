import React, { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { exerciseOptions, fetchData } from '../utils/fetchData.js';
import ExerciseCard from './ExerciseCard.js';
import { scrollIntoView } from '../utils/scrollIntoView.js';

const Exercises = ({ bodyPart, exercises, setExercises, currentPage, setCurrentPage }, ref) => {
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage; // 1 * 9 = 9
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage; // 9 - 9 = 0
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  let navigate = useNavigate();

  const paginate = (event, value) => {
    setCurrentPage(value);
    scrollIntoView(ref);
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      console.log('~ exercises.length', exercises.length);
      if (exercises.length) return;

      let ExerciseData = [];
      let res;

      if (bodyPart === 'all') {
        res = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        ExerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions,
        );
      }

      if (res.ok) {
        ExerciseData = res.data;
      } else if (res.status === 404) {
        navigate('/404', { replace: true });
      } else if (res.status === 429) {
        navigate('/429', { replace: true });
      }

      if (ExerciseData) {
        setExercises(ExerciseData);
      }
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  return (
    <Box id='exercises' ref={ref} sx={{ mt: { lg: '6.875rem' } }} mt='3.125rem' p='1.25rem'>
      {currentExercises.length > 0 && (
        <Typography variant='h3' textTransform='capitalize' mb='2.875rem'>
          Showing results
          <br />
          <span style={{ color: 'gray', fontSize: '1.5rem' }}>current body Part: {bodyPart}</span>
          <br />
          <span style={{ color: 'gray', fontSize: '1.5rem' }}>current page: {currentPage}</span>
        </Typography>
      )}
      <Stack direction='row' sx={{ gap: { lg: '6.875rem', xs: '3.125rem' } }} flexWrap='wrap' justifyContent='center'>
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} currentPage={currentPage} />
        ))}
      </Stack>
      <Stack mt='6.25rem' alignItems='center'>
        {exercises.length > exercisesPerPage && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={currentPage}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  );
};

export default React.forwardRef(Exercises);
