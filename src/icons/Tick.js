import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Tick = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M5 12l5 5L20 7"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Base>
);

export default Tick;
