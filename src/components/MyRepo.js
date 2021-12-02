/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';

import {Card, CardContent, CardHeader, Typography} from '@mui/material';
import {yellow, purple, pink, red} from '@mui/material/colors';

export default function MyRepo(props) {
  console.log(props.data);
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

  function displayLanguages(languages) {
    const languageNames = Object.keys(languages);

    return languageNames.map((name) => {
      function getLanguageColor() {
        let color;
        switch (name) {
          case 'Javascript':
            color = yellow[500];
            break;
          case 'CSS':
            color = purple[900];
            break;
          case 'SCSS':
            color = pink[500];
            break;
          default:
            color = red[500];
        }
        return color;
      }

      return (
        <Typography key={name} color={getLanguageColor()} variant='button'>
          {name}
        </Typography>
      );
    });
  }

  return (
    <Card sx={{width: '40%'}}>
      <CardHeader>Repo Name</CardHeader>
      <CardContent>
        {isLoading ? 'Loading...' : displayLanguages(languages)}
      </CardContent>
    </Card>
  );
}
