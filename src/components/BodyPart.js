import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';
import { scrollIntoView } from '../utils/scrollIntoView.js';

const BodyPart = ({ exercisesRef, item, bodyPart, setBodyPart, setCurrentPage }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '0.25rem solid #FF2625' : '',
        background: '#fff',
        borderBottomLeftRadius: '1.25rem',
        width: '16.875rem',
        padding: '0.625rem',
        cursor: 'pointer',
        gap: '2.9375rem',
      }}
      onClick={() => {
        setCurrentPage(1);
        setBodyPart(item);
        scrollIntoView(exercisesRef);
      }}>
      <img src={Icon} alt='dumbbell' style={{ width: '2.5rem', height: '2.5rem' }} />
      <Typography fontSize='1.5rem' fontWeight='bold' fontFamily='Alegreya' color='#3A1212' textTransform='capitalize'>
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
