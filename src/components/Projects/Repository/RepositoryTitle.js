import React from 'react';

import {Link, Typography} from '@mui/material';
import {Box} from '@mui/system';

export default function RepositoryTitle(props) {
  const {title, updatedDate, url, topics} = props;
  const githubPageUrl = 'https://github.com/doinby';

  function getUpdatedDate(string) {
    const dateArray = string.split('-');
    const year = dateArray[0];
    const month = dateArray[1];
    const date = dateArray[2].slice(0, 2);

    const newDate = date + '/' + month + '/' + year;
    return newDate;
  }

  return (
    <Box className='repository-title-container' sx={{mb: 4, gap: 4}}>
      <Box className='title-links'>
        <Link href={githubPageUrl} target='_blank' variant='h4'>
          doinby
        </Link>
        <Typography sx={{marginX: 1}}>/</Typography>
        <Link href={url} target='_blank' variant='h4'>
          {title}
        </Link>
      </Box>
      <Box>
        <Typography variant='body1'>
          Updated on: {getUpdatedDate(updatedDate)}
        </Typography>
        <Typography
          variant='body1'
          sx={{display: topics.length === 0 ? 'none' : 'block'}}
        >
          {topics.length === 0
            ? ''
            : `Tech Stacks: ${topics.map((topic) => ` ${topic}`)}`}
        </Typography>
      </Box>
    </Box>
  );
}
