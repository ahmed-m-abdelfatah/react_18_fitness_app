import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { exerciseOptions, fetchData } from '../utils/fetchData.js';
import HorizontalScrollbar from './HorizontalScrollbar.js';
import { scrollIntoView } from '../utils/scrollIntoView.js';
import { getLocalStorage } from '../utils/getLocalStorage.js';

const SearchExercises = ({ exercisesRef, bodyPart, setBodyPart, setExercises, setCurrentPage }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState(getLocalStorage('bodyParts') || []);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchExercisesData = async () => {
      console.log('~ bodyParts.length', bodyParts.length);
      if (bodyParts.length) return;

      const {
        data: bodyPartsData,
        ok,
        status,
      } = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      if (ok && bodyPartsData) {
        setBodyParts(['all', ...bodyPartsData]);
        localStorage.setItem('bodyParts', JSON.stringify(['all', ...bodyPartsData])); // this happens first because setBodyParts(['all', ...bodyPartsData]) acts like asynchronous thugs we cant use localStorage.setItem('bodyParts', JSON.stringify(bodyParts)) because bodyParts = [] (empty array)
      } else if (status === 404) {
        navigate('/404', { replace: true });
      } else if (status === 429) {
        navigate('/429', { replace: true });
      }
    };

    fetchExercisesData();
  }, [navigate, bodyParts]);

  const handleSearch = async e => {
    e.preventDefault();

    if (search) {
      const {
        data: exercisesData,
        ok,
        status,
      } = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      if (ok && exercisesData) {
        const searchedExercises = exercisesData.filter(
          exercise =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search),
        );

        scrollIntoView(exercisesRef);
        setSearch('');
        setExercises(searchedExercises);
      } else if (status === 404) {
        navigate('/404', { replace: true });
      } else if (status === 429) {
        navigate('/429', { replace: true });
      }
    }
  };

  return (
    <Stack alignItems='center' mt='2.3125rem' justifyContent='center' p='1.25rem'>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '2.75rem', xs: '1.875rem' } }}
        mb='3.0625rem'
        textAlign='center'>
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position='relative' mb='4.5rem'>
        <form>
          <TextField
            height='4.75rem'
            sx={{
              input: { fontWeight: '700', border: 'none', borderRadius: '0.25rem' },
              width: { lg: '73.125rem', xs: '21.875rem' },
              backgroundColor: '#fff',
              borderRadius: '2.5rem',
              caretColor: '#f00',
              outline: 'none',
              border: 'none',
            }}
            value={search}
            onChange={e => setSearch(e.target.value.toLowerCase())}
            placeholder='Search Exercises'
            type='text'
          />
          <Button
            className='search-btn'
            type='submit'
            sx={{
              bgcolor: '#FF2625',
              color: '#fff',
              textTransform: 'none',
              width: { lg: '10.8125rem', xs: '5rem' },
              height: '100%',
              position: 'absolute',
              right: '0rem',
              fontSize: { lg: '1.25rem', xs: '0.875rem' },
            }}
            onClick={handleSearch}>
            Search
          </Button>
        </form>
      </Box>
      {bodyParts.length > 0 && (
        <Box sx={{ position: 'relative', width: '100%', Padding: '1.25rem' }}>
          <HorizontalScrollbar
            exercisesRef={exercisesRef}
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            setCurrentPage={setCurrentPage}
            isBodyPart
          />
        </Box>
      )}
    </Stack>
  );
};

export default SearchExercises;
