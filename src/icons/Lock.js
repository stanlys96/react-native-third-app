import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Lock = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M17 11H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 11V7a4 4 0 0 1 8 0v4"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Base>
);

export default Lock;
