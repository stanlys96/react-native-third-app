import * as React from 'react';
import Svg, { Rect, Mask, G, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

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
      <Rect y={3.78564} width={23} height={16.4286} rx={4} fill="#fff" />
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
        <Rect y={3.78564} width={23} height={16.4286} rx={4} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 3.786H0V4.88h23V3.786zm0 2.19H0v1.095h23V5.976zM0 8.166h23v1.096H0V8.167zm23 2.191H0v1.095h23v-1.095zm-23 2.19h23v1.096H0v-1.096zm23 2.191H0v1.095h23v-1.095zm-23 2.19h23v1.096H0v-1.096zm23 2.191H0v1.095h23V19.12z"
          fill="#D02F44"
        />
        <Path fill="#46467F" d="M0 3.78564H9.85714V11.45231H0z" />
        <G filter="url(#filter0_d_6038_14145)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.643 5.976a.548.548 0 100-1.095.548.548 0 000 1.095zm2.19 0a.548.548 0 100-1.095.548.548 0 000 1.095zm2.738-.548a.548.548 0 11-1.095 0 .548.548 0 011.095 0zm1.643.548a.548.548 0 100-1.095.548.548 0 000 1.095zm-4.928.548a.548.548 0 11-1.096 0 .548.548 0 011.096 0zm1.643.547a.548.548 0 100-1.095.548.548 0 000 1.095zm2.738-.547a.548.548 0 11-1.096 0 .548.548 0 011.096 0zm.547 1.643a.548.548 0 100-1.096.548.548 0 000 1.096zm-1.643-.548a.548.548 0 11-1.095 0 .548.548 0 011.095 0zm-2.738.548a.548.548 0 100-1.096.548.548 0 000 1.096zM2.19 7.619a.548.548 0 11-1.095 0 .548.548 0 011.095 0zm.548 1.643a.548.548 0 100-1.095.548.548 0 000 1.095zm2.738-.548a.548.548 0 11-1.095 0 .548.548 0 011.095 0zm1.643.548a.548.548 0 100-1.095.548.548 0 000 1.095zm1.643.547a.548.548 0 11-1.095 0 .548.548 0 011.095 0zm-2.738.548a.548.548 0 100-1.095.548.548 0 000 1.095zM4.38 9.81a.548.548 0 11-1.095 0 .548.548 0 011.095 0zm-2.738.548a.548.548 0 100-1.095.548.548 0 000 1.095z"
            fill="url(#paint0_linear_6038_14145)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_6038_14145"
          x1={1.09521}
          y1={4.88086}
          x2={1.09521}
          y2={10.357}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#F0F0F0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
