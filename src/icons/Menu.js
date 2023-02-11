import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Base from './Base';

function SvgComponent({ color, style }) {
  return (
    <Base color={color} style={style}>
      <Path
        d="M12 7.7a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 7.2a2.4 2.4 0 110-4.801 2.4 2.4 0 010 4.8zm-2.4 4.8a2.4 2.4 0 104.801 0 2.4 2.4 0 00-4.8 0z"
        fill="#fff"
      />
    </Base>
  );
}

export default SvgComponent;
