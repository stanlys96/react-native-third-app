import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SwapLine = (props) => (
  <Svg width={30} height={68} viewBox="0 0 30 68" fill="none" {...props}>
    <Path
      d="M17 2a2 2 0 10-4 0h4zm-3.414 65.414a2 2 0 002.828 0l12.728-12.728a2 2 0 10-2.828-2.828L15 63.172 3.686 51.858a2 2 0 10-2.828 2.828l12.728 12.728zM13 2v64h4V2h-4z"
      fill="#17AFF0"
    />
  </Svg>
);

export default SwapLine;
