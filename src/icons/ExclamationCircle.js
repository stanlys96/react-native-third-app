import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={19}
      height={20}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={9.91667} cy={9.99992} r={7.91667} fill="#DA3032" fillOpacity={0.3} />
      <Path
        d="M11 5.5a1 1 0 10-2 0v4a1 1 0 102 0v-4zM10 12.5a1 1 0 100 2 1 1 0 000-2z"
        fill="#DA3032"
      />
    </Svg>
  );
}

export default SvgComponent;
