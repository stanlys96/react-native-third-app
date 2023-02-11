import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Check = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="m5 12 5 5L20 7"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Base>
);

export default Check;
