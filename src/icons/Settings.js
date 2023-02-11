import React from 'react';
import { Path, G } from 'react-native-svg';

import Base from './Base';

const Settings = ({ color, style }) => (
  <Base color={color} style={style}>
    <G fill="currentColor">
      <Path d="M2 7a1 1 0 011-1h3a1 1 0 010 2H3a1 1 0 01-1-1zM3 16a1 1 0 100 2h7a1 1 0 100-2H3zM18 16a1 1 0 100 2h3a1 1 0 100-2h-3zM14 6a1 1 0 100 2h7a1 1 0 100-2h-7z" />
      <G>
        <Path d="M8 10a3 3 0 100-6 3 3 0 000 6zM16 20a3 3 0 100-6 3 3 0 000 6z" />
      </G>
    </G>
  </Base>
);

export default Settings;
