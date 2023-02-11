import React from 'react';
import Svg, { Path } from 'react-native-svg';

import Base from './Base';

const Exchange = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M21.8438 14.5C21.4815 14.5 21.1875 14.206 21.1875 13.8438C21.1875 11.3107 19.1269 9.25003 16.5938 9.25003H10.25V12.0938C10.25 12.6713 9.55525 12.9635 9.1405 12.568L4.328 7.97428C4.1985 7.8509 4.125 7.6794 4.125 7.50003C4.125 7.32065 4.1985 7.14915 4.328 7.02578L9.1405 2.43202C9.557 2.03477 10.25 2.33052 10.25 2.90627V5.75003H15.7188C19.4576 5.75003 22.5 8.7924 22.5 12.5313V13.8438C22.5 14.206 22.206 14.5 21.8438 14.5Z"
      fill="currentColor"
    />
    <Path
      d="M13.75 20.8435V17.9998H8.28125C4.54238 17.9998 1.5 14.9574 1.5 11.2185V9.90601C1.5 9.54376 1.794 9.24976 2.15625 9.24976C2.5185 9.24976 2.8125 9.54376 2.8125 9.90601C2.8125 12.4391 4.87313 14.4998 7.40625 14.4998H13.75V11.656C13.75 11.0811 14.4421 10.7828 14.8595 11.1818L19.672 15.7755C19.8015 15.8989 19.875 16.0704 19.875 16.2498C19.875 16.4291 19.8015 16.6006 19.672 16.724L14.8595 21.3178C14.4421 21.715 13.75 21.4193 13.75 20.8435Z"
      fill="currentColor"
    />
  </Base>
);

export default Exchange;
