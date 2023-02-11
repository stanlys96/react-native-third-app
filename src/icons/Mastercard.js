import React from 'react';
import { ClipPath, Defs, G, Path } from 'react-native-svg';

import Base from './Base';

const MasterCard = ({ color, style }) => (
  <Base color={color} style={style}>
    <G clipPath="url(#clip0_8795_25109)">
      <Path d="M17.545 2.282h-7.28v13.099h7.28V2.282z" fill="#FF5A00" />
      <Path
        d="M10.75 8.831a8.36 8.36 0 013.166-6.549A8.267 8.267 0 008.784.5C4.186.5.465 4.226.465 8.831c0 4.606 3.721 8.332 8.32 8.332 1.94 0 3.72-.671 5.13-1.782a8.319 8.319 0 01-3.165-6.55z"
        fill="#EB001B"
      />
      <Path
        d="M27.367 8.831c0 4.606-3.721 8.332-8.32 8.332a8.267 8.267 0 01-5.131-1.782 8.29 8.29 0 003.166-6.55 8.36 8.36 0 00-3.166-6.549A8.254 8.254 0 0119.045.5c4.6 0 8.322 3.75 8.322 8.331z"
        fill="#F79E1B"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_8795_25109">
        <Path fill="#fff" transform="translate(.465 .5)" d="M0 0H27.4615V17H0z" />
      </ClipPath>
    </Defs>
  </Base>
);

export default MasterCard;
