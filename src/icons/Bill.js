import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Bill = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.083.5A3.333 3.333 0 002.75 3.833V22.5a1 1 0 001.555.832l2.818-1.879 1.753 1.754a1 1 0 001.414 0l1.627-1.626 1.626 1.626a1 1 0 001.414 0l1.754-1.754 2.818 1.88a1 1 0 001.554-.833V3.833A3.333 3.333 0 0017.75.5H6.083zm2.333 4.667a1 1 0 100 2h7a1 1 0 100-2h-7zm0 4.666a1 1 0 000 2h7a1 1 0 100-2h-7zm4.667 4.667a1 1 0 100 2h2.333a1 1 0 000-2h-2.333z"
      fill="currentColor"
    />
  </Base>
);

export default Bill;
