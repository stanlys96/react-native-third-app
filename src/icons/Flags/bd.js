import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

import Base from '../Base';

function SvgComponent({ color, style }) {
  return (
    <Base color={color} style={style}>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
        <Path fill="#006a4e" d="M0 0h640v480H0z" />
        <Circle cx={280} cy={240} r={160} fill="#f42a41" />
      </Svg>
    </Base>
  );
}

export default SvgComponent;
