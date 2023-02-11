import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.5 2.656a5.844 5.844 0 100 11.688 5.844 5.844 0 000-11.688z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <Path d="M8.3 12.219a.664.664 0 100-1.328.664.664 0 000 1.328z" fill="#fff" />
      <Path
        d="M6.64 6.717s.029-.581.65-1.082c.37-.297.812-.383 1.21-.389.363-.005.687.056.88.148.333.158.98.544.98 1.364 0 .863-.565 1.256-1.208 1.687-.643.431-.818.9-.818 1.383"
        stroke="#fff"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgComponent;
