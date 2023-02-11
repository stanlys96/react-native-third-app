import * as React from 'react';
import Svg, { Defs, ClipPath, Path, G } from 'react-native-svg';

import Base from '../Base';

function SvgComponent({ color, style }) {
  return (
    <Base color={color} style={style}>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
        <Defs>
          <ClipPath id="a">
            <Path fillOpacity={0.7} d="M0 0h682.7v512H0z" />
          </ClipPath>
        </Defs>
        <G fillRule="evenodd" clipPath="url(#a)" transform="scale(.9375)">
          <Path fill="#cb000f" d="M0 0h1031.2v512H0z" />
          <Path fill="#f8c00c" d="M0 0c3.2 0 512 256.7 512 256.7L0 512V0z" />
          <Path d="M0 0c2.1 0 340.6 256.7 340.6 256.7L0 512V0z" />
          <Path
            fill="#fff"
            d="M187.7 298.2L127 284.7l-31 52.8-5-59.7-60.7-13.3 54.9-24.9-3.3-59.3 40.2 43.4 55.4-25.3-28.9 54 39.2 45.8z"
          />
        </G>
      </Svg>
    </Base>
  );
}

export default SvgComponent;
