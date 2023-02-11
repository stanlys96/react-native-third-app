import * as React from 'react';
import Svg, { Circle, G, Path, Defs, ClipPath } from 'react-native-svg';

function SendToken(props) {
  return (
    <Svg
      width={42}
      height={43}
      viewBox="0 0 42 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={21} cy={21.5} r={21} fill="#43466D" />
      <G clipPath="url(#clip0_8691_30535)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.223 14.33v11.236c0 .381-.34.69-.731.69-.392 0-.732-.307-.732-.69V14.348l-2.874 2.682a.775.775 0 01-1.034-.004.655.655 0 01-.005-.964l4.078-3.808A.763.763 0 0121.5 12a.76.76 0 01.573.254l4.078 3.808a.656.656 0 01-.005.964.775.775 0 01-1.034.004l-2.891-2.7h.003zm10.389 15.818v-5.846c0-.352.321-.637.694-.637.373 0 .694.295.694.637v6.505c0 .352-.323.637-.694.637H9.696a.71.71 0 01-.487-.19.602.602 0 01-.208-.447v-6.505c0-.352.323-.637.694-.637.372 0 .694.295.694.637v5.846H32.613z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_8691_30535">
          <Path fill="#fff" transform="translate(9 12)" d="M0 0H25V19.4436H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SendToken;
