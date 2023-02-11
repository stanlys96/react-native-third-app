import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Phone = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2M15 7a2 2 0 0 1 2 2M15 3a6 6 0 0 1 6 6"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Base>
);

export default Phone;
