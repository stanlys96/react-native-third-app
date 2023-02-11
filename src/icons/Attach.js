import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import Base from './Base';

function SvgComponent({ color, style }) {
  return (
    <Base color={color} style={style}>
      <Path
        d="M13 23c3.04 0 5.5-2.46 5.5-5.5V6H17v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 015 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6h-1.5v9.5a2.5 2.5 0 005 0V5c0-2.21-1.79-4-4-4s-4 1.79-4 4v12.5c0 3.04 2.46 5.5 5.5 5.5z"
        fill="#61666D"
      />
    </Base>
  );
}

export default SvgComponent;
