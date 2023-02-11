import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

import Base from './Base';

const DownloadV2 = ({ color, style }) => (
  <Base color={color} style={style}>
    <G
      clipPath="url(#clip0_7850_21992)"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M18.5 19.5h-12M18.5 12.5l-6 6M6.5 12.5l6 6M12.5 4.5v14" />
    </G>
    <Defs>
      <ClipPath id="clip0_7850_21992">
        <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Base>
);

export default DownloadV2;
