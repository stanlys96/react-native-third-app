import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Polygon = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M18 12.732L4.5 20.526c-1.333.77-3-.192-3-1.732V3.206c0-1.54 1.667-2.502 3-1.732L18 9.268c1.333.77 1.333 2.694 0 3.464z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </Base>
);

export default Polygon;
