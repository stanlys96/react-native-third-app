import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Location(props) {
  return (
    <Svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.334 6.877c0-3.066 2.563-5.545 5.662-5.545 3.109 0 5.671 2.479 5.671 5.545 0 1.545-.562 2.98-1.487 4.196A14.708 14.708 0 018.486 14.5c-.324.212-.616.228-.972 0a14.427 14.427 0 01-3.693-3.427c-.926-1.216-1.487-2.65-1.487-4.196zm3.796.173c0 1.028.839 1.835 1.867 1.835S9.87 8.078 9.87 7.05c0-1.02-.846-1.866-1.874-1.866A1.876 1.876 0 006.13 7.05z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default Location;
