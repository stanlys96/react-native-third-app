import React from 'react';
import { Path } from 'react-native-svg';

import BaseFill from './BaseFill';

const Discord = ({ color, style }) => (
  <BaseFill color={color} style={style}>
    <Path
      d="M7 16.5c3.5 1 6.5 1 10 0M15 13a1 1 0 100-2 1 1 0 000 2zM9 13a1 1 0 100-2 1 1 0 000 2zM7.5 7.5c3.5-1 5.5-1 9 0"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.476-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseFill>
);

export default Discord;
