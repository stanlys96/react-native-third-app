import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import Base from '../Base';

function SvgComponent({ color, style }) {
  return (
    <Base color={color} style={style}>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
        <Path fill="#00732f" d="M0 0h640v160H0z" />
        <Path fill="#fff" d="M0 160h640v160H0z" />
        <Path d="M0 320h640v160H0z" />
        <Path fill="red" d="M0 0h220v480H0z" />
      </Svg>
    </Base>
  );
}

export default SvgComponent;
