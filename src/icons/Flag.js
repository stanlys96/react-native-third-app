import React from 'react';
import { Path } from 'react-native-svg';

import BaseFill from './BaseFill';

const Flag = ({ color, style }) => (
  <BaseFill color={color} style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 16V4h11.496c2.111 0 3.273 2.455 1.932 4.087L17.856 10l1.572 1.913c1.34 1.632.18 4.087-1.932 4.087H6zm2-2h9.496a.5.5 0 00.387-.817L16.31 11.27a2 2 0 010-2.54l1.572-1.913A.5.5 0 0017.496 6H8v8z"
      fill="currentColor"
    />
    <Path
      d="M7 2a1 1 0 00-1 1v17H5a1 1 0 100 2h4a1 1 0 100-2H8V3a1 1 0 00-1-1z"
      fill="currentColor"
    />
  </BaseFill>
);

export default Flag;
