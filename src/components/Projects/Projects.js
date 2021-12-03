/* eslint-disable no-unused-vars */
import React from 'react';

import {Container, Typography} from '@mui/material';
import {Box} from '@mui/system';

import './Projects.css';

export default function Projects(props) {
  const {config, id} = props;
  const {component, sx} = config;

  const BASE_URL = 'https://api.github.com/repos/doinby';

  function getRepoData(path, stateName) {
    fetch(BASE_URL + path)
      .then((response) => response.json())
      .then((data) => {
        stateName(data);
      })
      .catch((error) => console.error(error));
  }

  return (
    <Container id={id} component={component} sx={{...sx, gap: 6}}>
      <Typography variant='h2'>Projects I've worked on</Typography>
      <Box className='repositories-container' sx={{gap: 2, flexWrap: 'wrap'}}>
        {/**/}
      </Box>
    </Container>
  );
}
