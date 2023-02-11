import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

import Base from './Base';

const Delete = ({ color, style }) => (
  <Base color={color} style={style}>
    <G clipPath="url(#clip0_3411_8340)">
      <Path
        d="M23.5201 4.83105H8.96012L1.12012 13.2458L8.96012 21.6606H23.5201C24.1142 21.6606 24.684 21.439 25.104 21.0444C25.5241 20.6499 25.7601 20.1148 25.7601 19.5569V6.93475C25.7601 6.37681 25.5241 5.84173 25.104 5.44721C24.684 5.05269 24.1142 4.83105 23.5201 4.83105V4.83105Z"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.1604 10.0908L13.4404 16.4019"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.4404 10.0908L20.1604 16.4019"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3411_8340">
        <Rect width={26.88} height={25.2443} fill="white" transform="translate(0 0.624023)" />
      </ClipPath>
    </Defs>
  </Base>
);

export default Delete;
