import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const PintuWallet = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M21.27 13.23h-3.692a2.463 2.463 0 00-2.46 2.461 2.463 2.463 0 002.46 2.461h3.692c.678 0 1.23-.552 1.23-1.23V14.46c0-.678-.552-1.23-1.23-1.23zm-3.692 3.077a.615.615 0 110-1.23.615.615 0 010 1.23z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 7.037a.61.61 0 01.615-.615H18.811c.338 0 .613.274.613.613v.617H2.115a.61.61 0 01-.615-.615zM17.578 12a3.695 3.695 0 00-3.691 3.692 3.695 3.695 0 003.691 3.691h3.076v2.502a.61.61 0 01-.615.615H3.346A1.843 1.843 0 011.5 20.655V8.77c.2.071.405.113.615.113H20.04a.61.61 0 01.615.615V12h-3.076zM12 13.647c-.002-1.461-1.127-2.645-2.516-2.647H6.516c-1.39.002-2.515 1.186-2.516 2.647v7.195h1.642v-7.195c0-.508.392-.92.874-.92h2.968c.482 0 .873.412.874.92v7.195H12v-7.195z"
      fill="currentColor"
    />
  </Base>
);

export default PintuWallet;
