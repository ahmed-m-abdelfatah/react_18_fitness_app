import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '13.25rem', xs: '4.375rem' }, ml: { sm: '3.125rem' } }} position='relative' p='1.25rem'>
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
            marginTop: '2.8125rem',
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
      <img src={HeroBannerImage} alt='hero-banner' className='hero-banner-img' />
    </Box>
  );
};

export default HeroBanner;
