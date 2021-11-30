/* eslint-disable no-unused-vars */
import React from 'react';
import {Link as RouterLink} from 'react-router-dom';

import {Link, MenuItem, MenuList, Typography} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import './Header.css';
import {Box} from '@mui/system';

export default function Header() {
  return (
    <Box component='header'>
      <Typography variant='h1'>doinby</Typography>
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
