import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import Base from './Base';

const SwapVerticle = ({ color, style }) => {
  return (
    <Base color={color} style={style}>
      <G
        clipPath="url(#clip0_7595_20466)"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M7 20V6M7 20l4-4M7 20l-4-4M17 4l-4 4M17 4v14M17 4l4 4" />
      </G>
      <Defs>
        <ClipPath id="clip0_7595_20466">
          <Path fill="#fff" transform="rotate(90 12 12)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Base>
  );
};

export default SwapVerticle;
