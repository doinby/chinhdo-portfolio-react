/* eslint-disable no-unused-vars */
import React from 'react';
import MyTools from './MyTools';

// MUI Components
import {Box} from '@mui/system';
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

// Media & CSS
import profilePicture from '../../src/images/profile-picture-300.png';
import './Hero.css';

export default function Hero(props) {
  const {configs, id, isIpadScreenLess} = props;
  const {component, sx} = configs;

  return (
    <Container id={id} component={component} sx={sx}>
      <Card
        id='profile-card'
        sx={{
          flexWrap: isIpadScreenLess ? 'wrap' : 'none',
          padding: 6,
          gap: 4,
        }}
      >
        <CardMedia
          component='img'
          image={profilePicture}
          sx={{width: 'auto', height: 250}}
        />
        <CardContent id='profile-card-detail' sx={{gap: 4}}>
          <Typography>
            Hi, I'm Chinh. I'm base in a little city called Sydney from the{' '}
            <span id='down-under'>🦘Downunder 🌏</span>
          </Typography>
          <Box className='intro-paragraph' paragraph='true'>
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
            <MyTools isIpadScreenLess={isIpadScreenLess} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
