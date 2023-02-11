import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const ChevronRight = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M9 6l6 6-6 6"
      stroke={color ? 'currentColor' : '#fff'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Base>
);

export default ChevronRight;
