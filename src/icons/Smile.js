import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import Base from './Base';

function SvgComponent({ color, style }) {
  return (
    <Base color={color} style={style}>
      <Path
        d="M12 2a10 10 0 110 20 10 10 0 010-20zM8.444 15.034a.625.625 0 10-.888.881 6.264 6.264 0 008.631.242l.257-.242.071-.087a.625.625 0 00-.873-.867l-.086.073-.222.212a5.014 5.014 0 01-6.89-.212zm6.681-6.159a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-6.25 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
        fill="#61666D"
      />
    </Base>
  );
}

export default SvgComponent;
