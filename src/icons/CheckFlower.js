import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={8} cy={8} r={4} fill="#fff" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.684 1.544a2 2 0 012.595 0l.848.723c.106.091.24.146.38.157l1.11.089a2 2 0 011.833 1.834l.09 1.11c.01.14.066.273.157.38l.722.847a2 2 0 010 2.595l-.723.847a.666.666 0 00-.157.38l-.088 1.11a2 2 0 01-1.835 1.834l-1.11.089a.667.667 0 00-.38.157l-.847.723a2 2 0 01-2.595 0l-.847-.723a.667.667 0 00-.38-.157l-1.11-.089a2 2 0 01-1.834-1.834l-.088-1.11a.666.666 0 00-.158-.38l-.722-.847a2 2 0 010-2.595l.722-.847a.667.667 0 00.158-.38l.088-1.11a2 2 0 011.834-1.834l1.11-.089a.667.667 0 00.38-.157l.848-.723zm3.77 5.576a.667.667 0 00-.943-.943L7.315 8.372l-.862-.862a.667.667 0 00-.942.943l1.333 1.333a.667.667 0 00.942 0l2.667-2.666z"
        fill="#17AFF0"
      />
    </Svg>
  );
}

export default SvgComponent;
