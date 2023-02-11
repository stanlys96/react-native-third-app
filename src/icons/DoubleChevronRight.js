import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const DoubleChevronRight = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="m13 7 5 5-5 5M7 7l5 5-5 5"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Base>
);

export default DoubleChevronRight;
