import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import Base from './Base';

function Card({ color, style }) {
  return (
    <Base color={color} style={style}>
      <G clipPath="url(#clip0_8901_14283)" fill="currentColor">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.855 10.8H2.964v6c0 .636.235 1.247.655 1.697.419.45.988.703 1.581.703h13.418c.593 0 1.162-.253 1.582-.703.419-.45.655-1.06.655-1.697v-6zM5.2 15.6c0-.319.118-.624.327-.849a1.08 1.08 0 01.791-.351h1.118c.297 0 .581.126.791.351.21.225.328.53.328.849 0 .318-.118.623-.328.848a1.08 1.08 0 01-.79.352H6.317a1.08 1.08 0 01-.79-.352A1.246 1.246 0 015.2 15.6zm5.59-1.2a1.08 1.08 0 00-.79.351c-.21.225-.327.53-.327.849 0 .318.118.623.327.848.21.225.494.352.79.352h1.12c.296 0 .58-.127.79-.352.21-.225.327-.53.327-.848 0-.319-.118-.624-.327-.849a1.08 1.08 0 00-.79-.351h-1.12z"
        />
        <Path d="M5.2 4.8c-.593 0-1.162.253-1.581.703-.42.45-.655 1.06-.655 1.697v1.2h17.89V7.2c0-.637-.235-1.247-.654-1.697a2.162 2.162 0 00-1.582-.703H5.2z" />
      </G>
      <Defs>
        <ClipPath id="clip0_8901_14283">
          <Path
            fill="currentColor"
            transform="translate(.727)"
            d="M0 0H22.3636V24H0z"
          />
        </ClipPath>
      </Defs>
    </Base>
  );
}

export default Card;
