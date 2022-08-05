import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const ExceededLimit = ({ setIs404 }) => {
  useEffect(() => {
    setIs404(true);
    document.title = 'Exceeded limit - Golds gym';

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
        <Typography variant='h2'>Exceeded limit</Typography>
        <Typography variant='h3'>This free api has 500 call / month and they finished</Typography>
        <Typography variant='h3'>Come back next month</Typography>
      </Box>
    </Box>
  );
};

export default ExceededLimit;
