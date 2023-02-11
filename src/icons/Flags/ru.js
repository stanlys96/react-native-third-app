import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

import Base from '../Base';

function SvgComponent({ color, style }) {
  return (
    <Base color={color} style={style}>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
        <G fillRule="evenodd" strokeWidth="1pt">
          <Path fill="#fff" d="M0 0h640v480H0z" />
          <Path fill="#0039a6" d="M0 160h640v320H0z" />
          <Path fill="#d52b1e" d="M0 320h640v160H0z" />
        </G>
      </Svg>
    </Base>
  );
}

export default SvgComponent;
