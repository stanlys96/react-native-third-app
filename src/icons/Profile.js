import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Profile = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      clipRule="evenodd"
      d="M11.985 15.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.867 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948zM11.985 12.006A4.596 4.596 0 107.389 7.41a4.58 4.58 0 004.564 4.596h.032z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Base>
);

export default Profile;
