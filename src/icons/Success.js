import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const Success = (props) => (
  <Svg width={130} height={130} viewBox="0 0 120 120" fill="none" {...props}>
    <Circle cx={60} cy={60} r={60} fill="#5DC7F5" fillOpacity={0.15} />
    <Circle cx={59.9993} cy={60.0003} r={42.439} fill="#17AFF0" />
    <Path
      d="M41.334 60l13.333 13.333 26.666-26.666"
      stroke="#fff"
      strokeWidth={8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Success;
