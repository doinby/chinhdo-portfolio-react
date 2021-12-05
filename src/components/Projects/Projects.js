/* eslint-disable no-unused-vars */
import React from 'react';

import {Container, List, ListItem, Typography} from '@mui/material';

import Project from './Project';
import projectDatas from './projectDatas';
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
        {projectDatas.map((path, index) => (
          <ListItem key={index}>
            <Project key={index} id={index} path={path} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
