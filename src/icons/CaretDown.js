import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const CaretDown = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="m6 9 6 6 6-6H6Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Base>
);

export default CaretDown;
