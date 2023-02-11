import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.01 4.502a21.441 21.441 0 00-5.292-1.642.08.08 0 00-.085.04c-.229.407-.482.937-.66 1.354-1.998-.299-3.986-.299-5.943 0-.177-.426-.44-.947-.67-1.353a.083.083 0 00-.084-.04A21.38 21.38 0 003.983 4.5a.076.076 0 00-.034.03C.578 9.569-.346 14.48.107 19.332a.09.09 0 00.034.06 21.558 21.558 0 006.493 3.282c.033.01.07-.002.09-.03.5-.683.947-1.403 1.329-2.16a.082.082 0 00-.045-.115 14.194 14.194 0 01-2.028-.966.083.083 0 01-.009-.139c.137-.102.273-.208.403-.315a.08.08 0 01.084-.012c4.255 1.943 8.862 1.943 13.067 0a.08.08 0 01.085.01c.13.108.266.215.404.317a.083.083 0 01-.007.139c-.648.378-1.322.698-2.03.965a.083.083 0 00-.044.116c.39.756.837 1.476 1.328 2.16.02.028.057.04.09.03a21.487 21.487 0 006.503-3.282.084.084 0 00.034-.06c.542-5.608-.908-10.48-3.844-14.798a.066.066 0 00-.034-.031zM8.688 16.377c-1.28 0-2.336-1.176-2.336-2.62 0-1.445 1.035-2.621 2.336-2.621 1.312 0 2.357 1.186 2.337 2.62 0 1.445-1.035 2.62-2.337 2.62zm8.64 0c-1.281 0-2.337-1.176-2.337-2.62 0-1.445 1.035-2.621 2.337-2.621 1.311 0 2.357 1.186 2.336 2.62 0 1.445-1.025 2.62-2.336 2.62z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgComponent;
