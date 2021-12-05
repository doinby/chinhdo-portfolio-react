import React, {useState, useEffect} from 'react';

import {Card} from '@mui/material';

import Repository from './Repository/Repository';

export default function Project(props) {
  const {id, path} = props;

  const BASE_URL = 'https://api.github.com/repos/doinby';
  const token = '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';

  const [githubData, setGithubData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_URL + path, {
      header: {Authorization: `token ${token}`},
    })
      .then((response) => response.json())
      .then((data) => {
        setGithubData(data);
        setIsLoading(false);
      });
  }, [path]);

  return (
    <Card key={id} id={'project-card' + id} sx={{p: 6}}>
      <>{!isLoading ? <Repository data={githubData} /> : 'Loading...'}</>
    </Card>
  );
}
