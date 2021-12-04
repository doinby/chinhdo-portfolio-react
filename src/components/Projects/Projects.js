/* eslint-disable no-unused-vars */
import React from 'react';

import {Container, Typography} from '@mui/material';
import {Box} from '@mui/system';

import Project from './Project';
import {
  speedTypingGame,
  currencyConversion,
  readyRedP,
  foodGiving,
} from './projectDatas';
import './Projects.css';

export default function Projects(props) {
  const {config, id} = props;
  const {component, sx} = config;

  return (
    <Container id={id} component={component} sx={sx}>
      <Typography variant='h2'>Projects I've worked on:</Typography>
      <Box
        className='projects-container'
        sx={{gap: 8, flexWrap: 'wrap', placeContent: 'center'}}
      >
        <Project projectData={speedTypingGame} />
        <Project projectData={currencyConversion} />
        <Project projectData={readyRedP} />
        {/* <Project projectData={foodGiving} /> */}
      </Box>
    </Container>
  );
}
