import React from 'react';

import {Container, Typography} from '@mui/material';

export default function Projects(props) {
  const {config, id} = props;
  const {component, sx} = config;

  return (
    <Container id={id} component={component} sx={sx}>
      <Typography variant='h2'>Projects I've worked on</Typography>
    </Container>
  );
}
