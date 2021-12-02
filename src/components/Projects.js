/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';

import {Container, Typography} from '@mui/material';
import {Box} from '@mui/system';

import Repository from './Repository/Repository';

import './Projects.css';

export default function Projects(props) {
  const {config, id} = props;
  const {component, sx} = config;

  const [isLoading, setIsLoading] = useState(true);

  const BASE_URL = 'https://api.github.com/repos/doinby';

  const [projectStg, setProjectStg] = useState(null);

  function getRepoData(reposName, setState) {
    fetch(BASE_URL + reposName)
      .then((response) => response.json())
      .then((data) => {
        setState(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getRepoData('/speed-typing-game-react', setProjectStg);
  }, []);

  return (
    <Container id={id} component={component} sx={sx}>
      <Typography variant='h2'>Projects I've worked on</Typography>
      <Box className='my-repo-container'>
        {!isLoading ? <Repository data={projectStg} /> : 'loading'}
      </Box>
    </Container>
  );
}
