import React from 'react';
import { Path } from 'react-native-svg';

import Base from '../Base';

const Beast = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M7.933 4.886a1.91 1.91 0 100-3.82 1.91 1.91 0 000 3.82M12.713 2.635a1.91 1.91 0 100 3.82 1.91 1.91 0 000-3.82M5.064 4.544a1.91 1.91 0 10-3.82 0 1.91 1.91 0 003.82 0M7.916 6.11a4.487 4.487 0 100 8.972 4.487 4.487 0 000-8.973"
      fill="currentColor"
    />
  </Base>
);

export default Beast;
