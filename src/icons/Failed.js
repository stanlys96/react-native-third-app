import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={124}
      height={124}
      viewBox="0 0 124 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={62}
        cy={62}
        r={60}
        fill="#FB0540"
        fillOpacity={0.2}
        stroke="#E86062"
        strokeWidth={4}
      />
      <Path
        d="M78 46L46 78M46 46l32 32"
        stroke="#E86062"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
