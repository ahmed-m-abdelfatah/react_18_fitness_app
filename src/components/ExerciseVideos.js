import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import Loader from './Loader.js';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '12.6875rem', xs: '1.25rem' } }} p='1.25rem'>
      <Typography sx={{ fontSize: { lg: '2.75rem', xs: '1.5625rem' } }} fontWeight={700} color='#000' mb='2.0625rem'>
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: 'row', gap: '7%' }} justifyContent='center' flexWrap='wrap' alignItems='center'>
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'>
            <img
              style={{ borderTopLeftRadius: '1.25rem', width: '100%', height: '18.75rem', objectFit: 'cover' }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography
                sx={{
                  fontSize: { lg: '1.75rem', xs: '1.125rem' },
                  height: '2.5rem',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}
                fontWeight={600}
                color='#000'>
                {item.video.title}
              </Typography>
              <Typography fontSize='0.875rem' color='#000'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
