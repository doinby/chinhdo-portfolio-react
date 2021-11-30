/* eslint-disable no-unused-vars */
import React from 'react';
import {Link as RouterLink} from 'react-router-dom';

import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Link,
  MenuItem,
  MenuList,
  Typography,
} from '@mui/material';

export default function Hero() {
  return (
    <Container id='hero-section' component='section'>
      <Card>
        <CardMedia component='img' />
        <CardContent>
          <Typography variant='body1'>
            Hi, I'm base in a little city called Sydney from the Down Under
          </Typography>
          <Typography variant='body1' paragraph={true}>
            As a
            <Typography variant='jobTitle' color='primary' sx={{mx: 1}}>
              Front-end Developer
            </Typography>
            with a keen eye for visual communication, I listen to every little
            feedback I get from the audience about my design. I'm passionate
            about developing the highest quality ReactJS products.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
