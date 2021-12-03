/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import {Box} from '@mui/system';

import RepoLanguages from './RepositoryLanguage';
import RepositoryTitle from './RepositoryTitle';

import './Repository.css';

export default function Repository(props) {
  const {name, description, html_url, homepage, updated_at, languages_url} =
    props.data;
  // console.log(props.data);

  const githubUrl = html_url;
  const homepageUrl = homepage;

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
    <Card sx={{width: '40%', p: 4}}>
      <CardContent
        className='repository-container'
        // sx={{placeContent: 'center'}}
      >
        <RepositoryTitle
          title={name}
          url={githubUrl}
          updatedDate={updated_at}
        />
        <Typography sx={{mb: 4}}>
          {description === null ? `🛠 I'm working on it... 😊 🛠` : description}
        </Typography>
        <Box
          className='repository-language-container'
          sx={{mb: 8, gap: 2, flexWrap: 'wrap'}}
        >
          {isLoading ? 'Loading...' : <RepoLanguages languages={languages} />}
        </Box>
        <Divider sx={{mb: 4}} />
        <CardActions
          className='button-container'
          sx={{
            paddingX: 0,
            placeSelf: 'center',
            justifyContent: 'space-evenly',
            alignItems: 'space-evenly',
          }}
        >
          <Button variant='contained'>Github</Button>
          <Button variant='contained'>Homepage</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
