import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Withdraw = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path d="M14.68 11.341a2.68 2.68 0 11-5.36 0 2.68 2.68 0 015.36 0z" fill="currentColor" />
    <Path
      d="M21.74 2.259a2.576 2.576 0 00-1.832-.759H4.092c-.692 0-1.343.27-1.833.76S1.5 3.4 1.5 4.091v2.636c0 .692.27 1.343.76 1.833s1.14.76 1.832.76h.132V4.794c0-.34.275-.615.615-.615h14.323c.34 0 .615.275.615.615V9.32h.131c.692 0 1.343-.27 1.833-.759.49-.49.76-1.14.76-1.833V4.092c0-.692-.27-1.343-.76-1.833z"
      fill="currentColor"
    />
    <Path
      d="M5.454 20.567c0 .517.201 1.002.566 1.366.365.366.85.567 1.367.567h9.226c.517 0 1.002-.201 1.367-.566a1.92 1.92 0 00.566-1.367V5.41H5.454v15.157zM12 7.43a3.915 3.915 0 013.91 3.91 3.915 3.915 0 01-3.91 3.91 3.915 3.915 0 01-3.91-3.91A3.915 3.915 0 0112 7.431zM8.705 17.975h6.59a.615.615 0 110 1.23h-6.59a.615.615 0 010-1.23z"
      fill="currentColor"
    />
  </Base>
);

export default Withdraw;
