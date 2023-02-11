import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const X = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M18 6 6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Base>
);

export default X;
