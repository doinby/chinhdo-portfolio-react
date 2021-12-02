/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';

import {Card, CardContent, CardHeader, Typography} from '@mui/material';
import {yellow, purple, pink, red} from '@mui/material/colors';
import {Box} from '@mui/system';

import RepoLanguages from './RepoLanguages';

import './MyRepo.css';

export default function MyRepo(props) {
  const {id, name, description, html_url, homepage, updated_at, languages_url} =
    props.data;

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

  return (
    <Card sx={{width: '40%'}}>
      <CardHeader>Repo Name</CardHeader>
      <CardContent>
        <Box id='repo-languages' sx={{gap: 1}}>
          {isLoading ? 'Loading...' : <RepoLanguages languages={languages} />}
        </Box>
      </CardContent>
    </Card>
  );
}
