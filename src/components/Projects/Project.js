/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import {Card, CardContent} from '@mui/material';

import theme from '../../theme/theme';
import Repository from './Repository/Repository';

export default function Project(props) {
  const BASE_URL = 'https://api.github.com/repos/doinby';
  const {projectData} = props;
  const {id, path} = projectData;

  const [githubData, setGithubData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const isIpadScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    fetch(BASE_URL + path)
      .then((response) => response.json())
      .then((data) => {
        setGithubData(data);
        setIsLoading(false);
      });
  }, [path]);

  return (
    <Card
      key={id}
      id={'project-card' + id}
      sx={{width: isIpadScreen ? '100%' : '40%', p: 4}}
    >
      <CardContent>
        {!isLoading ? <Repository data={githubData} /> : 'Loading...'}
      </CardContent>
    </Card>
  );
}
