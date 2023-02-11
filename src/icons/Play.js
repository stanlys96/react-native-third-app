import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Play(props) {
  return (
    <Svg
      width={20}
      height={22}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18 9.268c1.333.77 1.333 2.694 0 3.464L4.5 20.526c-1.333.77-3-.192-3-1.732V3.206c0-1.54 1.667-2.502 3-1.732L18 9.268z"
        stroke="#fff"
        strokeWidth={2}
      />
    </Svg>
  );
}

export default Play;
