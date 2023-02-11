import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const ID = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M15 16h2m-7-9H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-9zm0 0V6a2 2 0 114 0v1h-4zm0 0a2 2 0 104 0h-4zm-1 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2L9 15zm0 0a3.001 3.001 0 00-2.83 2L9 15zm6-3h3-3z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Base>
);

export default ID;
