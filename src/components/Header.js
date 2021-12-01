/* eslint-disable no-unused-vars */
import React from 'react';
import {Link as RouterLink} from 'react-router-dom';

import {Link, MenuItem, MenuList, Typography} from '@mui/material';
import {Box} from '@mui/system';
import LightModeIcon from '@mui/icons-material/LightMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import './Header.css';

export default function Header() {
  return (
    <Box component='header' sx={{paddingY: 1}}>
      <Typography
        variant='h1'
        color='primary'
        sx={{fontSize: '1.5rem !important'}}
      >
        doinby.co
      </Typography>
      <MenuList>
        <MenuItem>
          <Link to='/' component={RouterLink} underline='hover'>
            Link 1
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/' component={RouterLink} underline='hover'>
            Link 2
          </Link>
        </MenuItem>
        <MenuItem>
          <DarkModeOutlinedIcon />
        </MenuItem>
      </MenuList>
    </Box>
  );
}
