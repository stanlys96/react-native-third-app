import React from 'react';
import { Path, Circle, Rect } from 'react-native-svg';

import Base from './Base';

const Negative = ({ color, style }) => (
  <Base color={color} style={style}>
    <Circle opacity={0.2} cx={12} cy={12} r={10} fill="#E86062" />
    <Rect
      x={18}
      y={10.5}
      width={3}
      height={12}
      rx={1.5}
      transform="rotate(90 18 10.5)"
      fill="#E86062"
    />
  </Base>
);

export default Negative;
