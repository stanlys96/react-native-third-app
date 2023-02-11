import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={props?.width || 48}
      height={props.height || 48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#clip0_4961_11833)"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M38 24L26 12M38 24H10M38 24L26 36" />
      </G>
      <Defs>
        <ClipPath id="clip0_4961_11833">
          <Path fill="#fff" transform="rotate(180 24 24)" d="M0 0H48V48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
