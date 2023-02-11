import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Swap = (props) => (
  <Svg
    width={16}
    height={17}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.3335 11.8335L4.00016 11.8335"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.3335 11.8335L10.6668 9.16683"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.3335 11.8333L10.6668 14.5"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.6665 5.1665L5.33317 7.83317"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M2.6665 5.1665H11.9998" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    <Path
      d="M2.6665 5.16667L5.33317 2.5"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Swap;
