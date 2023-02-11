import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

import Base from './Base';

const Library = ({ color, style }) => (
  <Base color={color} style={style}>
    <G clipPath="url(#clip0_9907_10623)">
      <G
        clipPath="url(#clip1_9907_10623)"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M9 4H5a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V5a1 1 0 00-1-1zM9 14H5a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1zM19 14h-4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1zM14 7h6M17 4v6" />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_9907_10623">
        <Path fill="currentColor" transform="translate(.5)" d="M0 0H24V24H0z" />
      </ClipPath>
      <ClipPath id="clip1_9907_10623">
        <Path fill="currentColor" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Base>
);

export default Library;
