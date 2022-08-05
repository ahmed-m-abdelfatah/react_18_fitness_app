import React, { useEffect, useRef } from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  const onLoad = e => {
    setTimeout(() => {
      e.target.style.visibility = 'visible';
    }, 1000);
  };

  const onLoadCapture = e => {
    e.target.style.visibility = 'hidden';
  };

  const imgRef = useRef('#detailImg');

  useEffect(() => {
    imgRef.current.style.visibility = 'hidden';
  }, []);

  return (
    <Stack gap='3.75rem' sx={{ flexDirection: { lg: 'row' }, p: '1.25rem', alignItems: 'center' }}>
      <img
        ref={imgRef}
        src={gifUrl}
        alt={name}
        loading='lazy'
        className='detail-image'
        style={{ visibility: 'hidden' }}
        onLoadCapture={onLoadCapture}
        onLoad={onLoad}
      />
      <Stack sx={{ gap: { lg: '2.1875rem', xs: '1.25rem' } }}>
        <Typography sx={{ fontSize: { lg: '4rem', xs: '1.875rem' } }} fontWeight={700} textTransform='capitalize'>
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '1.5rem', xs: '1.125rem' } }} color='#4F4C4C'>
          Exercises keep you strong. <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one of the best{' '}
          <br /> exercises to target your {target}. It will help you improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item, index) => (
          <Stack key={index} direction='row' gap='1.5rem' alignItems='center'>
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '6.25rem', height: '6.25rem' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '3.125rem', height: '3.125rem' }} />
            </Button>
            <Typography textTransform='capitalize' sx={{ fontSize: { lg: '1.875rem', xs: '1.25rem' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
