import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Wallet = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.4.9c.993 0 1.8.807 1.8 1.8v1.8c.993 0 1.8.807 1.8 1.8v9c0 .993-.807 1.8-1.8 1.8H2.7c-1.085 0-2.7-.72-2.7-2.7V3.6C0 2.111 1.211.9 2.7.9h11.7zm0 1.8H2.7a.9.9 0 000 1.8h11.7V2.7zM11.7 9a.9.9 0 111.8 0v2.7a.9.9 0 01-1.8 0V9z"
      fill="currentColor"
    />
  </Base>
);

export default Wallet;
