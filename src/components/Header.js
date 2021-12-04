/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';

import {Link, MenuItem, MenuList} from '@mui/material';
import {Box} from '@mui/system';
import LightModeIcon from '@mui/icons-material/LightMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import './Header.css';

export default function Header(props) {
  const {configs} = props;
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode(event) {
    event.preventDefault();
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <Box component='header' sx={{paddingY: 1}}>
      <Link
        variant='h1'
        component={RouterLink}
        to='/'
        underline='none'
        color='primary'
        sx={{fontSize: '1.5rem !important'}}
      >
        doinby.co
      </Link>
      <MenuList>
        {/* <MenuItem>
          <Link to='/' component={RouterLink} underline='hover'>
            Link 1
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/' component={RouterLink} underline='hover'>
            Link 2
          </Link>
        </MenuItem> */}
        <MenuItem variant='Button' onClick={toggleDarkMode}>
          {isDarkMode ? (
            <LightModeIcon color='primary' />
          ) : (
            <DarkModeOutlinedIcon color='primary' />
          )}
        </MenuItem>
      </MenuList>
    </Box>
  );
}
