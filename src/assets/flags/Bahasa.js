import * as React from 'react';
import Svg, { Rect, Mask, G, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={23}
      height={24}
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={0.5} y={4.28564} width={22} height={15.4286} rx={3.5} fill="#fff" stroke="#F5F5F5" />
      <Mask
        id="a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={3}
        width={23}
        height={18}
      >
        <Rect x={0.5} y={4.28564} width={22} height={15.4286} rx={3.5} fill="#fff" stroke="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 12.547h23V3.787H0v8.761z"
          fill="#E12237"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
