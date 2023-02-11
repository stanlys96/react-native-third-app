import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Plus = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M12 5v14M5 12h14"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Base>
);

export default Plus;
