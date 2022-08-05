import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const NotFoundPage = ({ setIs404 }) => {
  useEffect(() => {
    setIs404(true);
    document.title = '404 - Golds gym';

    return () => {
      setIs404(false);
    };
  }, [setIs404]);

  return (
    <Box>
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          height: '100vh',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textTransform: 'uppercase',
          letterSpacing: '0.1rem',
          gap: '2rem',
          padding: '4rem',
        }}>
        <Typography variant='h2'>404</Typography>
        <Typography variant='h3'>Look like you're lost</Typography>
        <Typography fontSize='1.375rem'>the page you are looking for not available!</Typography>
        <Typography fontSize='1.375rem'>
          <Link to='/'>Go to Home</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
