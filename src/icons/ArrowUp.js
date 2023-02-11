import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import Base from './Base';

function ArrowUp({ color, style }) {
  return (
    <Base color={color} style={style}>
      <G clipPath="url(#clip0_8901_14289)">
        <Path
          d="M5.524 16.292l5.524-6.517 5.524 6.517"
          stroke="#D1D5DB"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_8901_14289">
          <Path fill="currentColor" transform="rotate(-90 13.034 13.034)" d="M0 0H26.0677V22.0963H0z" />
        </ClipPath>
      </Defs>
    </Base>
  );
}

export default ArrowUp;
