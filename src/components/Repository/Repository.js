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
import useMediaQuery from '@mui/material/useMediaQuery';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';

import RepoLanguages from './RepositoryLanguage';
import RepositoryTitle from './RepositoryTitle';

import theme from '../../theme/theme';
import './Repository.css';

export default function Repository(props) {
  const {name, description, html_url, homepage, updated_at, languages_url} =
    props.data;
  // console.log(props.data);

  const githubUrl = html_url;
  const homepageUrl = homepage;

  const [languages, setLanguages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const isIpadScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    fetch(languages_url)
      .then((response) => response.json())
      .then((data) => {
        setLanguages(data);
        setIsLoading(false);
      });
  }, [languages_url]);

  return (
    <Card sx={{width: isIpadScreen ? '100%' : '40%', p: 4}}>
      <CardContent className='repository-container'>
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
            width: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'space-evenly',
          }}
        >
          <Button
            href={homepageUrl}
            target='_blank'
            variant='contained'
            startIcon={<HomeIcon />}
          >
            Homepage
          </Button>
          <Button
            href={githubUrl}
            target='_blank'
            variant='contained'
            startIcon={<GitHubIcon />}
          >
            Github
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
