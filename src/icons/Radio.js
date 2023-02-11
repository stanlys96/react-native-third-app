import React from 'react';
import Svg, { Rect } from 'react-native-svg';

import tw from '#/styles';

const Radio = ({ style, fill = 'text-shades-600', stroke = 'text-gray-700' }) => {
  const styles = [tw`w-6 h-6`, style];

  return (
    <Svg viewBox="0 0 24 24" fill="none" style={styles}>
      <Rect
        x={2.5}
        y={2.5}
        width={19}
        height={19}
        rx={9.5}
        fill={tw.color(fill)}
        stroke={tw.color(stroke)}
      />
    </Svg>
  );
};

export default Radio;
