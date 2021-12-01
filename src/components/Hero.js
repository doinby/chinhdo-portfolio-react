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
import {ArrowDropDownCircleOutlined} from '@mui/icons-material';

import htmlIcon from '../images/dev-tools/html-5.svg';
import cssIcon from '../images/dev-tools/css-3.svg';
import javascriptIcon from '../images/dev-tools/javascript.svg';
import figmaIcon from '../images/dev-tools/figma.svg';
import sassIcon from '../images/dev-tools/sass.svg';
import reactIcon from '../images/dev-tools/react.svg';
import unityIcon from '../images/dev-tools/unity.svg';
import sketchIcon from '../images/dev-tools/sketch.svg';

import './Hero.css';
import MyTools from './MyTools';

export default function Hero() {
  return (
    <Container id='hero-section' component='section' sx={{marginY: 8}}>
      <Card
        className='profile-card'
        sx={{
          paddingY: 6,
          gap: 2,
        }}
      >
        <CardMedia
          component='img'
          image={profilePicture}
          sx={{width: 'auto', height: 250}}
        />
        <CardContent sx={{maxWidth: '60%'}}>
          <Typography className='intro-paragraph' paragraph='true'>
            <Typography>
              Hi, I'm Chinh. I'm base in a little city called Sydney from the{' '}
              <span id='down-under'>🦘Downunder 🌏</span>
            </Typography>
            <Typography>
              As a
              <Typography variant='jobTitle' color='primary' sx={{mx: 1}}>
                Front-end Developer
              </Typography>
              with a keen eye for visual communication, I listen to every little
              feedback I get from the audience about my design. I'm passionate
              about developing the highest quality ReactJS products.
            </Typography>
          </Typography>
          <Box>
            <Typography>
              Tech I
              <FavoriteOutlinedIcon
                id='favourite-icon'
                color='primary'
                sx={{ml: 0.25}}
              />
              <Typography component='span' sx={{ml: 3.25}}>
                :
              </Typography>
            </Typography>
            <MyTools />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
