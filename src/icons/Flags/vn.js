import * as React from 'react';
import Svg, { Defs, ClipPath, Path, G } from 'react-native-svg';

import Base from '../Base';

function SvgComponent({ color, style }) {
  return (
    <Base color={color} style={style}>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
        <Defs>
          <ClipPath id="a">
            <Path fillOpacity={0.7} d="M-85.3 0h682.6v512H-85.3z" />
          </ClipPath>
        </Defs>
        <G fillRule="evenodd" clipPath="url(#a)" transform="translate(80) scale(.9375)">
          <Path fill="#da251d" d="M-128 0h768v512h-768z" />
          <Path
            fill="#ff0"
            d="M349.6 381L260 314.3l-89 67.3L204 272l-89-67.7 110.1-1 34.2-109.4L294 203l110.1.1-88.5 68.4 33.9 109.6z"
          />
        </G>
      </Svg>
    </Base>
  );
}

export default SvgComponent;
