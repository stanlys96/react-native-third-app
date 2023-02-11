import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Reload(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.171 3.8C11.493.309 7.104-.96 3.684.823a.574.574 0 00-.237.772.574.574 0 00.772.238C7.075.346 10.72 1.407 12.13 4.3c1.87 3.84-.543 6.768-2.499 7.852-2.662 1.478-6.038.497-7.65-2.022l1.98.415c.298.06.624-.12.684-.446.06-.298-.12-.624-.446-.684L.688 8.701c-.59-.058-.715.474-.684.654l.446 3.54a.555.555 0 00.567.506c.366 0 .594-.357.566-.683l-.172-1.444c1.641 2.024 4.87 3.751 8.79 1.95C11.86 12.366 15.675 9 13.17 3.8z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Reload;