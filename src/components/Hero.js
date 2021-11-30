/* eslint-disable no-unused-vars */
import React from 'react';
import {Link as RouterLink} from 'react-router-dom';

import profilePicture from '../../src/images/profile-picture-300.png';

import {
  Card,
  CardContent,
  CardMedia,
  Container,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import {Box} from '@mui/system';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

import './Hero.css';

export default function Hero() {
  return (
    <Container id='hero-section' component='section' sx={{marginY: 8}}>
      <Card
        className='profile-card'
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingY: 8,
          paddingX: 8,
          gap: 2,
        }}
      >
        <CardMedia
          component='img'
          image={profilePicture}
          sx={{width: 'auto', height: 250}}
        />
        <CardContent sx={{maxWidth: '60%'}}>
          <Box className='intro-paragraph'>
            <Typography>
              Hi, I'm base in a little city called Sydney from the{' '}
              <span className='down-under'>🦘Downunder 🌏</span>
            </Typography>
            <Typography paragraph={true}>
              As a
              <Typography variant='jobTitle' color='primary' sx={{mx: 1}}>
                Front-end Developer
              </Typography>
              with a keen eye for visual communication, I listen to every little
              feedback I get from the audience about my design. I'm passionate
              about developing the highest quality ReactJS products.
            </Typography>
          </Box>
          <Box>
            <Typography>
              Tech I
              <FavoriteOutlinedIcon
                color='primary'
                sx={{position: 'absolute', ml: 0.25}}
              />
              <Typography
                component='span'
                sx={{position: 'absolute', ml: 3.25}}
              >
                :
              </Typography>
            </Typography>

            <List>
              <ListItem>Js</ListItem>
            </List>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
