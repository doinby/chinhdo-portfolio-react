/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

import {Button, Link, List, ListItem, Typography} from '@mui/material';

import javascriptIcon from '../../src/images/dev-tools/javascript.svg';
import figmaIcon from '../../src/images/dev-tools/figma.svg';
import sassIcon from '../../src/images/dev-tools/sass.svg';
import reactIcon from '../../src/images/dev-tools/react.svg';
import unityIcon from '../../src/images/dev-tools/unity.svg';
import materialuiIcon from '../../src/images/dev-tools/material-ui.svg';
import jqueryIcon from '../../src/images/dev-tools/jquery.svg';
import tailwindcssIcon from '../../src/images/dev-tools/tailwindcss.svg';
import cssIcon from '../../src/images/dev-tools/css-3.svg';
import firebaseIcon from '../../src/images/dev-tools/firebase.svg';

import './MyTools.css';

export default function MyTools() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <List id='my-tools' sx={{gap: 1.5, mt: 1}}>
      <ListItem>
        <img src={javascriptIcon} alt='Javascript Icon' />
      </ListItem>
      <ListItem>
        <img src={reactIcon} alt='React Icon' />
      </ListItem>
      <ListItem>
        <img src={materialuiIcon} alt='Material UI Icon' />
      </ListItem>
      <ListItem>
        <img src={figmaIcon} alt='Figma Icon' />
      </ListItem>

      <ListItem>
        <Link
          component='button'
          onClick={() => setIsHidden(false)}
          underline='hover'
          sx={{ml: 1, display: isHidden ? 'block' : 'none'}}
        >
          Show more...
        </Link>
      </ListItem>
      <List
        id='more-tools'
        sx={{display: isHidden ? 'none' : 'flex', paddingY: 0, gap: 1.5}}
      >
        <ListItem>
          <img src={cssIcon} alt='CSS Icon' />
        </ListItem>
        <ListItem>
          <img src={sassIcon} alt='Sass Icon' />
        </ListItem>
        <ListItem>
          <img src={tailwindcssIcon} alt='Tailwindcss Icon' />
        </ListItem>
        <ListItem>
          <img src={jqueryIcon} alt='Jquery Icon' id='jquery-fix-width' />
        </ListItem>
        {/* <ListItem>
          <img src={firebaseIcon} alt='Firebase Icon' />
        </ListItem> */}
        <ListItem>
          <img src={unityIcon} alt='Unity Icon' />
        </ListItem>
      </List>
    </List>
  );
}
