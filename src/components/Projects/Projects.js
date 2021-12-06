/* eslint-disable no-unused-vars */
import React from 'react';

import {
  Container,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import Project from './Project';
import projectDatas from './projectDatas';
import './Projects.css';

export default function Projects(props) {
  const {configs, id} = props;
  const {component, sx} = configs;

  const theme = useTheme();
  const isIpadScreenLess = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container id={id} component={component} sx={sx}>
      <Typography variant='h2' sx={{mb: 8, textAlign: 'center'}}>
        Projects I've worked on:
      </Typography>
      <List
        className='projects-container'
        sx={{gap: 8, p: 0, flexWrap: 'wrap', placeContent: 'center'}}
      >
        {projectDatas.map((path, index) => (
          <ListItem
            key={index}
            sx={{p: 0, width: isIpadScreenLess ? '100%' : '40%'}}
          >
            <Project key={index} id={index} path={path} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
