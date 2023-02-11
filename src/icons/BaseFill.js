import React from 'react';
import Svg from 'react-native-svg';

import tw from '#/styles';

// Viewbox: 0 0 24 24, fill: color, stroke: none
const BaseFill = ({ children, style, color = 'text-white' }) => {
  const styles = [tw`w-6 h-6`, style];

  return (
    <Svg viewBox="0 0 24 24" color={tw.color(color)} style={styles}>
      {children}
    </Svg>
  );
};

export default BaseFill;
