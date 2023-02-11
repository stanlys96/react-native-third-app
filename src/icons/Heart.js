import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';
import BaseFill from './BaseFill';

const Heart = ({ color, style }) => (
  <BaseFill color={color} style={style}>
    <Path
      d="M19.376 2.546C18.54.827 16.126-.579 13.32.24A6.17 6.17 0 0010 2.596 6.17 6.17 0 006.682.24C3.868-.567 1.46.827.623 2.546c-1.175 2.407-.687 5.113 1.45 8.045 1.676 2.294 4.07 4.62 7.546 7.32a.625.625 0 00.768 0c3.47-2.694 5.87-5 7.545-7.32 2.132-2.932 2.62-5.638 1.444-8.045z"
      fill="currentColor"
    />
  </BaseFill>
);

export default Heart;
