import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Info = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 12a1 1 0 011-1h1a1 1 0 011 1v3a1 1 0 110 2h-1a1 1 0 01-1-1v-3a1 1 0 01-1-1zM11 8a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1z"
      fill="currentColor"
    />
  </Base>
);

export default Info;
