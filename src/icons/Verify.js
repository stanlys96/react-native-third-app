import React from 'react';
import { Path, Rect } from 'react-native-svg';

import Base from './Base';

const Verify = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.765 7.762A4.747 4.747 0 0112 12.525a4.747 4.747 0 01-4.764-4.763A4.747 4.747 0 0112 3a4.746 4.746 0 014.765 4.762zM12 21c-3.904 0-7.2-.634-7.2-3.082 0-2.45 3.317-3.061 7.2-3.061 3.905 0 7.2.634 7.2 3.082C19.2 20.388 15.883 21 12 21z"
      fill="currentColor"
    />
    <Rect x={12} y={15} width={9} height={8} rx={4} fill="#111827" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.707 16.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L17 19.586l3.293-3.293a1 1 0 011.414 0z"
      fill="currentColor"
    />
  </Base>
);

export default Verify;
