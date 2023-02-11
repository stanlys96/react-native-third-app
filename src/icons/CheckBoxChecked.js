import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import tw from '#/styles';

const CheckBoxChecked = ({ style, fill = 'text-blue', stroke = 'text-white' }) => {
  const styles = [tw.style('w-6 h-6'), style];

  return (
    <Svg viewBox="0 0 24 24" fill="none" style={styles}>
      <Rect x={2} y={2} width={20} height={20} rx={6} fill={tw.color(fill)} />
      <Path
        d="m8.5 12 2.5 2.5 5-5"
        stroke={tw.color(stroke)}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CheckBoxChecked;
