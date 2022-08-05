import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData.js';
import Detail from '../components/Detail.js';
import ExerciseVideos from '../components/ExerciseVideos.js';
import SimilarExercises from '../components/SimilarExercises.js';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseBBUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      window.scrollTo(0, 0);

      // get exercise data
      const {
        data: exerciseDetailedData,
        ok,
        status,
      } = await fetchData(`${exerciseBBUrl}/exercises/exercise/${id}`, exerciseOptions);

      if (exerciseDetailedData) {
        setExerciseDetail(exerciseDetailedData);
      }

      if (ok) {
        document.title = exerciseDetailedData.name + ' - Golds gym';

        // get exercise videos
        const { data: exerciseVideosData } = await fetchData(
          `${youtubeSearchUrl}/search?query=${exerciseDetailedData.name} exercise`,
          youtubeOptions,
        );

        if (exerciseVideosData) {
          setExerciseVideos(exerciseVideosData.contents);
        }

        // get similar exercises
        const { data: targetMuscleExercisesData } = await fetchData(
          `${exerciseBBUrl}/exercises/target/${exerciseDetailedData.target}`,
          exerciseOptions,
        );

        if (targetMuscleExercisesData) {
          setTargetMuscleExercises(targetMuscleExercisesData);
        }

        const { data: equipmentExercisesData } = await fetchData(
          `${exerciseBBUrl}/exercises/equipment/${exerciseDetailedData.equipment}`,
          exerciseOptions,
        );

        if (equipmentExercisesData) {
          setEquipmentExercises(equipmentExercisesData);
        }
      } else if (status === 404) {
        navigate('/404', { replace: true });
      } else if (status === 429) {
        navigate('/429', { replace: true });
      }
    };
    fetchExerciseData();
  }, [id, exerciseDetail, navigate]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;
