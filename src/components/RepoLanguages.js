/* eslint-disable no-unused-vars */
import React from 'react';

import {Typography} from '@mui/material';
import {yellow, purple, pink, red} from '@mui/material/colors';

export default function RepoLanguages(props) {
  //   console.log(props.languages);
  const {languages} = props;

  function getLanguageColor(name) {
    if (name === 'JavaScript') {
      return yellow[900];
    } else if (name === 'CSS') {
      return purple[900];
    } else if (name === 'SCSS') {
      return pink[500];
    } else return red[500];
  }

  function displayLanguages() {
    const languageNames = Object.keys(languages);

    const languageList = languageNames.map((name) => {
      return (
        <Typography
          key={name}
          color={getLanguageColor(name)}
          variant='repoLanguages'
          sx={{textTransform: 'uppercase'}}
        >
          {name}
        </Typography>
      );
    });

    return languageList;
  }

  return <>{displayLanguages()}</>;
}
