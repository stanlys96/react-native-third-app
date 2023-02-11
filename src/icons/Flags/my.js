import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import Base from '../Base';

function SvgComponent({ color, style }) {
  return (
    <Base color={color} style={style}>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
        <Path fill="#c00" d="M0 0h640v480H0z" />
        <Path fill="#fff" d="M.5 39.9h639v38.4H.5zm0 78.7h639V157H.5zm0 78.8h639v38.4H.5z" />
        <Path fill="#006" d="M0 .5h320v280H0z" />
        <Path
          fill="#fc0"
          d="M207.5 73.8l6 40.7 23-34-12.4 39.2 35.5-20.8-28.1 30 41-3.2-38.3 14.8 38.3 14.8-41-3.2 28.1 30-35.5-20.8 12.3 39.3-23-34.1-6 40.7-5.9-40.7-23 34 12.4-39.2-35.5 20.8 28-30-41 3.2 38.4-14.8-38.3-14.8 41 3.2-28.1-30 35.5 20.8-12.4-39.3 23 34.1zm-33.3 1.7a71.1 71.1 0 100 130 80 80 0 110-130z"
        />
        <Path fill="#fff" d="M.5 276.2h639v38.4H.5zm0 78.2h639v38.4H.5zM0 441.6h639V480H0z" />
      </Svg>
    </Base>
  );
}

export default SvgComponent;