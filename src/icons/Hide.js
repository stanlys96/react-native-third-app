import React from 'react';
import { Path } from 'react-native-svg';

import BaseFill from './BaseFill';

const Hide = ({ color, style }) => (
  <BaseFill color={color} style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.291 9.88a1 1 0 0 1 0 1.414 1 1 0 1 0 1.414 1.416 1 1 0 0 1 1.414 1.414A3 3 0 0 1 9.877 9.88a1 1 0 0 1 1.414 0Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.43 6.017 8.011 8.002c.481-.6.948-1.273 1.4-2.02C18.341 7.87 15.386 6 12 6h-.004a8.47 8.47 0 0 0-.565.017ZM12.003 4a10.466 10.466 0 0 0-2.914.404 1 1 0 0 0-.432 1.668L18.79 16.195a1 1 0 0 0 1.441-.028c.952-1.03 1.829-2.257 2.637-3.67a1 1 0 0 0 0-.993C20.093 6.648 16.481 4 12.002 4ZM7.46 6.098a1 1 0 0 1-.267 1.389C5.75 8.467 4.398 9.954 3.16 12c2.498 4.13 5.453 6 8.84 6 1.74 0 3.33-.49 4.798-1.48a1 1 0 0 1 1.118 1.658C16.123 19.388 14.145 20 12 20c-4.48 0-8.093-2.647-10.868-7.504a1 1 0 0 1 0-.992c1.42-2.486 3.06-4.398 4.939-5.673a1 1 0 0 1 1.389.267Z"
      fill="currentColor"
    />
  </BaseFill>
);

export default Hide;
