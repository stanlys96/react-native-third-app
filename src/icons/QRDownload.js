import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const QRDownload = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M18 19.5H6M18 12.5l-6 6M6 12.5l6 6M12 4.5v14"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Base>
);

export default QRDownload;
