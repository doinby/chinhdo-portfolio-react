/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';

import {Card, CardContent, Typography} from '@mui/material';
import {Box} from '@mui/system';

import RepoLanguages from './RepositoryLanguage';

import './Repository.css';

export default function Repository(props) {
  const {id, name, description, html_url, homepage, updated_at, languages_url} =
    props.data;
  // console.log(props.data);

  const [languages, setLanguages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(languages_url)
      .then((response) => response.json())
      .then((data) => {
        setLanguages(data);
        setIsLoading(false);
      });
  }, [languages_url]);

  function getUpdatedDate(string) {
    const dateArray = string.split('-');
    const year = dateArray[0];
    const month = dateArray[1];
    const date = dateArray[2].slice(0, 2);

    const newDate = date + '-' + month + '-' + year;
    return newDate;
  }

  return (
    <Card sx={{width: '40%'}}>
      <CardContent>
        <Typography sx={{mb: 4}}>
          {description === null ? 'Description coming soon!' : description}
        </Typography>
        <Box id='repo-languages' sx={{gap: 1}}>
          {isLoading ? 'Loading...' : <RepoLanguages languages={languages} />}
        </Box>
      </CardContent>
    </Card>
  );
}
