import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Share(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 9.334a2.666 2.666 0 00-2.053.987l-3.4-1.567c.16-.49.16-1.017 0-1.507l3.4-1.566a2.667 2.667 0 10-.567-1.207l-3.52 1.62a2.667 2.667 0 100 3.813l3.52 1.62a2.78 2.78 0 00-.047.474A2.667 2.667 0 1012 9.334zm0-6.667a1.334 1.334 0 110 2.668 1.334 1.334 0 010-2.668zM4 9.334a1.333 1.333 0 110-2.667 1.333 1.333 0 010 2.667zm8 4a1.334 1.334 0 110-2.667 1.334 1.334 0 010 2.667z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Share;
