import * as React from 'react';
import Svg, { Defs, ClipPath, Path, G } from 'react-native-svg';

import Base from '../Base';

function SvgComponent({ color, style }) {
  return (
    <Base color={color} style={style}>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
        <Defs>
          <ClipPath id="a">
            <Path fillOpacity={0.7} d="M-52.3 0h682.6v512H-52.3z" />
          </ClipPath>
        </Defs>
        <G
          fillRule="evenodd"
          strokeWidth="1pt"
          clipPath="url(#a)"
          transform="translate(49) scale(.9375)"
        >
          <Path fill="#0c590b" d="M-95 0h768v512H-95z" />
          <Path fill="#fff" d="M-95 0H97.5v512H-95z" />
          <G fill="#fff">
            <Path d="M403.7 225.4l-31.2-6.6-16.4 27.3-3.4-31.6-31-7.2 29-13-2.7-31.7 21.4 23.6 29.3-12.4-15.9 27.6 21 24z" />
            <Path d="M415.4 306a121.2 121.2 0 01-161.3 59.4 122.1 122.1 0 01-59.5-162.1A118.6 118.6 0 01266 139a156.2 156.2 0 00-11.8 10.9A112.3 112.3 0 00415.5 306z" />
          </G>
        </G>
      </Svg>
    </Base>
  );
}

export default SvgComponent;
