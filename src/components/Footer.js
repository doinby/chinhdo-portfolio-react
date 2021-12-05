import {Divider, Typography} from '@mui/material';
import React from 'react';

import './Footer.css';

export default function Footer(props) {
  const {sx} = props.configs;

  return (
    <footer>
      <Divider />
      <Typography variant='body1' sx={sx}>
        'C' 2021 Chinh Do
      </Typography>
    </footer>
  );
}
