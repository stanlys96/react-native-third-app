import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Copy = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 10c0-1.655 1.345-3 3-3h10c1.655 0 3 1.345 3 3v10c0 1.655-1.345 3-3 3H4c-1.655 0-3-1.345-3-3V10zm3-1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1H4z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.879 1.879A3 3 0 0110 1h10a3 3 0 013 3v10a3 3 0 01-3 3 1 1 0 110-2 1 1 0 001-1V4a1 1 0 00-1-1H10a1 1 0 00-1 1 1 1 0 01-2 0 3 3 0 01.879-2.121z"
      fill="currentColor"
    />
  </Base>
);

export default Copy;
