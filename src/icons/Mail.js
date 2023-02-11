import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import Base from './Base';

function SvgComponent({ color, style }) {
  return (
    <Base color={color} style={style}>
      <Path
        d="M19 5H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 7l9 6 9-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Base>
  );
}

export default SvgComponent;
