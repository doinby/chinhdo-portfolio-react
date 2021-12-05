/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';

import {Link, ListItem, MenuItem, MenuList} from '@mui/material';
import {Box} from '@mui/system';
import LightModeIcon from '@mui/icons-material/LightMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import './Header.css';

export default function Header(props) {
  const {sx} = props.configs;
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode(event) {
    event.preventDefault();
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <Box component='header' sx={sx}>
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
      <MenuList id='header-links' sx={{paddingY: '0 !important', gap: 2}}>
        <ListItem>
          <Link href='mailto:chinh@doinby.co' underline='hover'>
            Contact
          </Link>
        </ListItem>
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
        <MenuItem onClick={toggleDarkMode}>
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
