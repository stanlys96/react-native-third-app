import React from 'react';
import { Path, Circle } from 'react-native-svg';

import Base from './Base';

const Show = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M21.942 11.745c-1.044-2.112-2.498-3.8-4.205-4.955C16.029 5.628 14.068 5 12 5h-.01C7.863 5 4.146 7.52 2.06 11.745a.564.564 0 0 0 0 .501C4.146 16.471 7.863 19 11.99 19H12c4.137 0 7.854-2.529 9.942-6.754a.565.565 0 0 0 0-.5"
      stroke="currentColor"
      strokeWidth={2}
    />
    <Circle cx={12} cy={12} r={2} stroke="currentColor" strokeWidth={2} />
  </Base>
);

export default Show;
