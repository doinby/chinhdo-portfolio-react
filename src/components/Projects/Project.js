import React, {useState, useEffect} from 'react';

import theme from '../../theme/theme';

import useMediaQuery from '@mui/material/useMediaQuery';
import {Card} from '@mui/material';

import Repository from './Repository/Repository';

export default function Project(props) {
  const {projectData} = props;
  const {id, path} = projectData;

  const BASE_URL = 'https://api.github.com/repos/doinby';
  const isIpadScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [githubData, setGithubData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
      sx={{width: isIpadScreen ? '100%' : '30%', p: 6}}
    >
      <>{!isLoading ? <Repository data={githubData} /> : 'Loading...'}</>
    </Card>
  );
}
