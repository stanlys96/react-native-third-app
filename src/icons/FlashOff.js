import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const FlashOff = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M18.493 13.333a1.327 1.327 0 00-1.146-2h-2.494l3.04 3.04.6-1.04zM18.707 2.6c.44-.893-.2-1.933-1.2-1.933h-9.84c-.734 0-1.334.6-1.334 1.333v.813l8.174 8.174 4.2-8.387zm2.88 19.24L2.493 2.747a1.33 1.33 0 10-1.88 1.88l5.72 5.733V14c0 .733.6 1.333 1.334 1.333h2.666v9.534c0 .68.894.92 1.24.333l3.534-6.067 4.586 4.587c.52.52 1.36.52 1.88 0 .534-.52.534-1.36.014-1.88z"
      fill="currentColor"
    />
  </Base>
);

export default FlashOff;
