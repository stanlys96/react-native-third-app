import * as React from 'react';
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={props?.width || 25}
      height={props?.height || 24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_7149_16090)">
        <Rect x={0.5} width={24} height={24} rx={12} fill="#fff" fillOpacity={0.3} />
        <Path
          d="M18.333 12l-5-5M18.333 12H6.667M18.333 12l-5 5"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_7149_16090">
          <Rect x={0.5} width={24} height={24} rx={12} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
