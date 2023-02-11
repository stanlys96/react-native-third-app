import React from 'react';
import { Path, Circle } from 'react-native-svg';

import Base from './Base';

const Positive = ({ color, style }) => (
  <Base color={color} style={style}>
    <Circle opacity={0.2} cx={12} cy={12} r={10} fill="#5FD788" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 6a1.5 1.5 0 00-1.5 1.5v3h-3a1.5 1.5 0 000 3h3v3a1.5 1.5 0 003 0v-3h3a1.5 1.5 0 000-3h-3v-3A1.5 1.5 0 0012 6z"
      fill="#5FD788"
    />
  </Base>
);

export default Positive;
