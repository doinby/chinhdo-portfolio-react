/* eslint-disable no-unused-vars */
import React from 'react';

import {Container, List, ListItem, Typography} from '@mui/material';

import Project from './Project';
import {
  speedTypingGame,
  currencyConversion,
  readyRedP,
  foodGiving,
} from './projectDatas';
import './Projects.css';

export default function Projects(props) {
  const {configs, id} = props;
  const {component, sx} = configs;

  return (
    <Container id={id} component={component} sx={sx}>
      <Typography variant='h2'>Projects I've worked on:</Typography>
      <List
        className='projects-container'
        sx={{gap: 8, flexWrap: 'wrap', placeContent: 'center'}}
      >
        <ListItem>
          <Project projectData={speedTypingGame} />
        </ListItem>
        <ListItem>
          <Project projectData={currencyConversion} />
        </ListItem>
        <ListItem>
          <Project projectData={readyRedP} />
        </ListItem>
        {/* <Project projectData={foodGiving} /> */}
      </List>
    </Container>
  );
}
