import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Back = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M5 12h14M5 12l6 6M5 12l6-6"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Base>
);

export default Back;
