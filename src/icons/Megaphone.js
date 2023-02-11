import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Megaphone = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M8 18.315v-1.648A.667.667 0 007.333 16H5.018a.795.795 0 00-.771.988l.434 1.736A1.685 1.685 0 008 18.315zM17 10.778C17 9.796 17.796 9 18.778 9H19a2 2 0 110 4h-.222A1.778 1.778 0 0117 11.222v-.444zM5 8a3 3 0 100 6h2.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5H5z"
      fill="currentColor"
    />
    <Path
      d="M10.248 7.856a.5.5 0 00-.248.431v5.426a.5.5 0 00.247.432l5.989 3.51c1.667.976 3.764-.226 3.764-2.157v-8.99c0-1.93-2.096-3.132-3.762-2.157l-5.99 3.505z"
      fill="currentColor"
    />
  </Base>
);

export default Megaphone;
