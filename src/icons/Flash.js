import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Flash = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M.333 2v12c0 .733.6 1.333 1.334 1.333h2.667v9.534c0 .68.893.92 1.24.333l6.92-11.867a1.327 1.327 0 00-1.147-2H8.334l3.32-8.866a1.324 1.324 0 00-1.24-1.8H1.667C.933.667.333 1.267.333 2z"
      fill="currentColor"
    />
  </Base>
);

export default Flash;
