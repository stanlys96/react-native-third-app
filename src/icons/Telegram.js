import React from 'react';
import { Path } from 'react-native-svg';

import BaseFill from './BaseFill';

const Telegram = ({ color, style }) => (
  <BaseFill color={color} style={style}>
    <Path
      d="M13 7l-4 4 6 6 4-16L1 8l4 2 2 6 3-4"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseFill>
);

export default Telegram;
