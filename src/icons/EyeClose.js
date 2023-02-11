import * as React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const EyeClose = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.293 2.293a1 1 0 011.414 0l18 18a1 1 0 01-1.414 1.414l-18-18a1 1 0 010-1.414z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.291 9.88a1 1 0 010 1.414 1 1 0 001.414 1.416 1 1 0 111.414 1.414A3 3 0 119.877 9.88a1 1 0 011.414 0z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.43 6.017l8.011 8.002c.481-.6.948-1.273 1.4-2.019C18.341 7.87 15.386 6 12 6h-.004c-.189 0-.377.005-.565.017zM12.003 4a10.467 10.467 0 00-2.914.404 1 1 0 00-.432 1.669L18.79 16.195a1 1 0 001.441-.028c.952-1.03 1.829-2.257 2.637-3.67a1 1 0 000-.993C20.093 6.648 16.481 4 12.002 4zM7.46 6.098a1 1 0 01-.267 1.389C5.75 8.467 4.398 9.954 3.16 12c2.498 4.13 5.453 6 8.84 6 1.74 0 3.33-.49 4.798-1.48a1 1 0 111.118 1.658C16.123 19.388 14.145 20 12 20c-4.48 0-8.093-2.647-10.868-7.504a1 1 0 010-.992c1.42-2.486 3.06-4.398 4.939-5.673a1 1 0 011.389.267z"
      fill="#fff"
    />
  </Base>
);

export default EyeClose;
