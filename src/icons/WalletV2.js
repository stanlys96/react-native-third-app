import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Base from './Base';

const WalletV2 = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.65 3.9c.993 0 1.8.807 1.8 1.8v1.8c.993 0 1.8.807 1.8 1.8v9c0 .993-.807 1.8-1.8 1.8H5.95c-1.085 0-2.7-.72-2.7-2.7V6.6c0-1.489 1.211-2.7 2.7-2.7h11.7zm0 1.8H5.95a.9.9 0 000 1.8h11.7V5.7zm-2.7 6.3a.9.9 0 111.8 0v2.7a.9.9 0 01-1.8 0V12z"
      fill="currentColor"
    />
  </Base>
);

export default WalletV2;
