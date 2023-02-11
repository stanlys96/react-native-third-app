import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Account = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.765 7.762A4.747 4.747 0 0112 12.525a4.747 4.747 0 01-4.764-4.763A4.747 4.747 0 0112 3a4.746 4.746 0 014.765 4.762zM12 21c-3.904 0-7.2-.634-7.2-3.082 0-2.45 3.317-3.061 7.2-3.061 3.905 0 7.2.634 7.2 3.082C19.2 20.388 15.883 21 12 21z"
      fill="currentColor"
    />
  </Base>
);

export default Account;
