import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Contact = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.532 12.472c3.989 3.988 4.894-.625 7.434 1.913 2.448 2.448 3.856 2.938.753 6.04-.388.312-2.857 4.07-11.534-4.605C-.493 7.144 3.262 4.672 3.574 4.284c3.11-3.11 3.592-1.695 6.04.753 2.54 2.54-2.071 3.447 1.918 7.435z"
      fill="currentColor"
    />
  </Base>
);

export default Contact;
