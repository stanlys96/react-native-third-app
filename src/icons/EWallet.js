import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function EWallet(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.057 13.23h-3.691a2.463 2.463 0 00-2.461 2.461 2.463 2.463 0 002.46 2.461h3.692c.678 0 1.23-.552 1.23-1.23V14.46c0-.678-.552-1.23-1.23-1.23zm-3.691 3.077a.615.615 0 110-1.23.615.615 0 010 1.23z"
        fill="#fff"
      />
      <Path
        d="M13.674 15.691A3.695 3.695 0 0117.366 12h3.076V9.498a.61.61 0 00-.615-.615H1.903c-.21 0-.415-.042-.615-.113v11.884c0 1.022.824 1.846 1.845 1.846h16.694a.61.61 0 00.615-.615v-2.502h-3.076a3.695 3.695 0 01-3.692-3.691zM10.557 7.652a3.08 3.08 0 003.076-3.076A3.08 3.08 0 0010.557 1.5a3.08 3.08 0 00-3.076 3.076 3.08 3.08 0 003.076 3.076zm0-3.691a.615.615 0 110 1.23.615.615 0 010-1.23zM19.212 7.035a.613.613 0 00-.613-.613h-4.167a4.32 4.32 0 01-.87 1.23h5.65v-.617zM1.903 6.422a.61.61 0 00-.615.615c0 .345.27.615.615.615h5.65a4.318 4.318 0 01-.87-1.23h-4.78z"
        fill="#fff"
      />
    </Svg>
  );
}

export default EWallet;