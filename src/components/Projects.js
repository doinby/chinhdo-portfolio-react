import React, {useEffect} from 'react';

import {Container, Typography} from '@mui/material';

export default function Projects(props) {
  const {config, id} = props;
  const {component, sx} = config;

  const BASE_URL = 'https://api.github.com/repos/doinby';

  useEffect(() => {
    // fetch(`${BASE_URL}/speed-typing-game-react`)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  });

  return (
    <Container id={id} component={component} sx={sx}>
      <Typography variant='h2'>Projects I've worked on</Typography>
    </Container>
  );
}
