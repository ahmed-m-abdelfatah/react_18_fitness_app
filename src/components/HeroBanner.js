import React from 'react';
import { Stack, Typography } from '@mui/material';

const HeroBanner = () => {
  return (
    <Stack
      sx={{ mt: { lg: '5rem', xs: '3rem' }, ml: { sm: '3.125rem' } }}
      textAlign='center'
      position='relative'
      p='1.25rem'>
      <Typography variant='h1' color='#FF2625' fontWeight='600' fontSize='1.625rem'>
        Fitness Exercises
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '2.75rem', xs: '2.5rem' } }} mb='1.4375rem' mt='1.875rem'>
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography fontSize='1.375rem' fontFamily='Alegreya' lineHeight='2.1875rem'>
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <a
          href='#exercises'
          style={{
            margin: '2.8125rem auto 0',
            textDecoration: 'none',
            width: '12.5rem',
            textAlign: 'center',
            background: '#FF2625',
            padding: '0.875rem',
            fontSize: '1.375rem',
            textTransform: 'none',
            color: 'white',
            borderRadius: '0.25rem',
          }}>
          Explore Exercises
        </a>
      </Stack>
      <Typography
        fontWeight={600}
        color='#FF2625'
        sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '12.5rem' }}>
        Exercise
      </Typography>
    </Stack>
  );
};

export default HeroBanner;
