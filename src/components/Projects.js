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
  const [projectCc, setProjectCc] = useState(null);

  function getRepoData(reposName, setState) {
    fetch(BASE_URL + reposName)
      .then((response) => response.json())
      .then((data) => {
        setState(data);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getRepoData('/speed-typing-game-react', setProjectStg);
    getRepoData('/currency-conversion-react', setProjectCc);

    return () => {
      setIsLoading(false);
    };
  }, [isLoading]);

  console.log(isLoading);

  return (
    <Container id={id} component={component} sx={{...sx, gap: 6}}>
      <Typography variant='h2'>Projects I've worked on</Typography>
      <Box className='repositories-container' sx={{gap: 2, flexWrap: 'wrap'}}>
        {!isLoading ? <Repository data={projectStg} /> : 'loading'}
        {!isLoading ? <Repository data={projectCc} /> : 'loading'}
      </Box>
    </Container>
  );
}
