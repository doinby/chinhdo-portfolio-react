/* eslint-disable no-unused-vars */
import React from 'react';

import {Container, Typography} from '@mui/material';
import {Box} from '@mui/system';

import Project from './Project';
import {speedTypingGame, currencyConversion} from './projectDatas';
import './Projects.css';

export default function Projects(props) {
  const {config, id} = props;
  const {component, sx} = config;

  return (
    <Container id={id} component={component} sx={{...sx, gap: 6}}>
      <Typography variant='h2'>Projects I've worked on</Typography>
      <Box className='projects-container' sx={{gap: 2, flexWrap: 'wrap'}}>
        <Project projectData={speedTypingGame} />
        <Project projectData={currencyConversion} />
      </Box>
    </Container>
  );
}
