import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={92}
      height={91}
      viewBox="0 0 92 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M41.45 63.7h9.1v9.1h-9.1v-9.1zM46 0C20.884 0 .5 20.384.5 45.5S20.884 91 46 91s45.5-20.384 45.5-45.5S71.116 0 46 0zm0 81.9c-20.066 0-36.4-16.335-36.4-36.4C9.6 25.434 25.934 9.1 46 9.1s36.4 16.334 36.4 36.4S66.065 81.9 46 81.9zm0-63.7c-10.056 0-18.2 8.145-18.2 18.2h9.1c0-5.005 4.095-9.1 9.1-9.1s9.1 4.095 9.1 9.1c0 9.1-13.65 7.962-13.65 22.75h9.1c0-10.237 13.65-11.375 13.65-22.75 0-10.055-8.145-18.2-18.2-18.2z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
