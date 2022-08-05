import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const isHomePage = useLocation().pathname === '/';

  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{ gap: { sm: '7.6875rem', xs: '2.5rem' }, mt: { sm: '2rem', xs: '1.25rem' }, justifyContent: 'none' }}
      px='1.25rem'>
      <Link to='/'>
        <img src={Logo} alt='logo' style={{ width: '3rem', height: '3rem', margin: '0rem 1.25rem' }} />
      </Link>
      <Stack direction='row' gap='2.5rem' fontFamily='Alegreya' fontSize='1.5rem' alignItems='flex-end'>
        <Link to='/' style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '0.1875rem solid #FF2625' }}>
          Home
        </Link>
        {isHomePage && (
          <a href='#exercises' style={{ textDecoration: 'none', color: '#3A1212' }}>
            Exercises
          </a>
        )}
      </Stack>
    </Stack>
  );
};

export default Navbar;
