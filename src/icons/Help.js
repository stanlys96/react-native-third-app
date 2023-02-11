import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Help = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.6 10A9.6 9.6 0 11.4 10a9.6 9.6 0 0119.2 0zM10 6.4a1.2 1.2 0 00-1.04.6 1.2 1.2 0 11-2.078-1.2 3.6 3.6 0 114.318 5.196v.204a1.2 1.2 0 11-2.4 0V10A1.2 1.2 0 0110 8.8a1.2 1.2 0 100-2.4zm0 9.6a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"
      fill="currentColor"
    />
  </Base>
);

export default Help;
