import * as React from 'react';
import Svg, { G, Circle, Defs } from 'react-native-svg';

const Capture = (props) => (
  <Svg width={92} height={92} viewBox="0 0 92 92" fill="none" {...props}>
    <G filter="url(#filter0_d_34128_4805)">
      <Circle cx={46} cy={42} r={34.5} stroke="#fff" strokeWidth={3} />
    </G>
    <Circle cx={46} cy={42} r={31} fill="#fff" />
    <Defs />
  </Svg>
);

export default Capture;
