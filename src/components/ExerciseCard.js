import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { convertHttpTHttps } from '../utils/convertHttpTHttps.js';

const ExerciseCard = ({ exercise, currentPage, bodyPart }) => {
  const onLoad = e => {
    setTimeout(() => {
      e.target.style.visibility = 'visible';
    }, 1000);
  };

  const onLoadCapture = e => {
    e.target.style.visibility = 'hidden';
  };

  const imgRef = useRef('#img');

  useEffect(() => {
    imgRef.current.style.visibility = 'hidden';
  }, [currentPage, bodyPart]);

  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
      <img
        ref={imgRef}
        src={convertHttpTHttps(exercise.gifUrl)}
        style={{ visibility: 'hidden' }}
        alt={exercise.name}
        loading='lazy'
        onLoadCapture={onLoadCapture}
        onLoad={onLoad}
      />
      <Stack direction='row'>
        <Button
          sx={{
            ml: '1.3125rem',
            color: '#fff',
            background: '#ffa9a9',
            fontSize: '0.875rem',
            borderRadius: '1.25rem',
            textTransform: 'capitalize',
          }}>
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: '1.3125rem',
            color: '#fff',
            background: '#fcc757',
            fontSize: '0.875rem',
            borderRadius: '1.25rem',
            textTransform: 'capitalize',
          }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        variant='h5'
        fontSize='1.2rem'
        ml='1.3125rem'
        color='black'
        fontWeight='bold'
        mt='0.6875rem'
        pb='0.625rem'
        textTransform='capitalize'>
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
