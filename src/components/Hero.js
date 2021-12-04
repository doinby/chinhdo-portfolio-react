/* eslint-disable no-unused-vars */
import React from 'react';
import MyTools from './MyTools';

// MUI components
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import {Box} from '@mui/system';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

// Media & CSS
import profilePicture from '../../src/images/profile-picture-300.png';
import './Hero.css';

export default function Hero(props) {
  const {config, id} = props;
  const {component, sx} = config;

  return (
    <Container id={id} component={component} sx={sx}>
      <Card
        className='profile-card'
        sx={{
          padding: 6,
          gap: 2,
          flexWrap: 'wrap',
          placeContent: 'center',
        }}
      >
        <CardMedia
          component='img'
          image={profilePicture}
          sx={{width: 'auto', height: 250}}
        />
        <CardContent sx={{maxWidth: '60%'}}>
          <Box className='intro-paragraph' paragraph='true'>
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
          </Box>
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
