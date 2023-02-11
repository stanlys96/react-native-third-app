import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const CaretUp = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M13 7L7 1 1 7h12z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Base>
);

export default CaretUp;
