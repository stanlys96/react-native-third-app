import React from 'react';
import { Path } from 'react-native-svg';

import BaseFill from './BaseFill';

const Question = ({ color, style }) => (
  <BaseFill color={color} style={style}>
    <Path
      d="M9.5 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8.144 6.307c.434-.232.901-.306 1.356-.306a2.62 2.62 0 0 1 1.632.577c.517.424.868 1.074.868 1.922 0 .975-.689 1.504-1.077 1.802l-.085.066c-.424.333-.588.511-.588.882a.75.75 0 1 1-1.5 0c0-1.134.711-1.708 1.162-2.062.513-.403.588-.493.588-.688 0-.397-.149-.622-.32-.761A1.115 1.115 0 0 0 9.5 7.5c-.295 0-.498.049-.65.13-.143.076-.294.21-.44.48a.75.75 0 1 1-1.32-.715c.264-.486.612-.853 1.054-1.089v.001Z"
      fill="currentColor"
    />
    <Path
      d="M9.5 3a7.5 7.5 0 0 0-6.797 10.673l-.725 2.842a1.25 1.25 0 0 0 1.504 1.524c.75-.18 1.903-.457 2.93-.702A7.5 7.5 0 1 0 9.5 3Zm-6 7.5a6 6 0 1 1 3.33 5.375l-.243-.121-.265.063-2.788.667c.2-.78.462-1.812.69-2.708l.07-.276-.13-.253A5.971 5.971 0 0 1 3.5 10.5Z"
      fill="currentColor"
    />
    <Path
      d="M14.5 21a7.476 7.476 0 0 1-5.1-2h.1c.718 0 1.415-.089 2.08-.257.865.482 1.86.757 2.92.757.96 0 1.867-.225 2.67-.625l.243-.121.265.063c.92.22 1.965.445 2.74.61a157.95 157.95 0 0 0-.642-2.651l-.07-.276.13-.253A5.97 5.97 0 0 0 20.5 13.5a5.996 5.996 0 0 0-2.747-5.042 8.442 8.442 0 0 0-.8-2.047 7.504 7.504 0 0 1 4.344 10.263c.253 1.008.51 2.1.672 2.803a1.243 1.243 0 0 1-1.468 1.5c-.727-.152-1.87-.396-2.913-.64A7.476 7.476 0 0 1 14.5 21Z"
      fill="currentColor"
    />
  </BaseFill>
);

export default Question;
