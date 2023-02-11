import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import Base from './Base';

const ArrowDown = ({ color, style }) => {
  return (
    <Base color={color} style={style}>
      <G clipPath="url(#clip0_8632_691)">
        <Path
          d="M16.572 10.742l-5.524 6.517-5.524-6.517"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_8632_691">
          <Path
            fill="currentColor"
            transform="rotate(90 10.565 11.531)"
            d="M0 0H26.0677V22.0963H0z"
          />
        </ClipPath>
      </Defs>
    </Base>
  );
};

export default ArrowDown;
