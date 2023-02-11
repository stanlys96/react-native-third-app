import React from 'react';
import { Path, Circle } from 'react-native-svg';

import Base from './Base';

const Search = ({ color, style }) => (
  <Base color={color} style={style}>
    <Circle
      cx={10.7664}
      cy={10.7664}
      r={8.98856}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.018 17.485L20.542 21"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Base>
);

export default Search;
