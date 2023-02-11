import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Reload = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M21.844 14.5a.656.656 0 01-.657-.656 4.599 4.599 0 00-4.593-4.594H10.25v2.844c0 .577-.695.87-1.11.474L4.328 7.974a.655.655 0 010-.948L9.14 2.432a.657.657 0 011.11.474V5.75h5.469a6.79 6.79 0 016.781 6.781v1.313a.656.656 0 01-.656.656z"
      fill="currentColor"
    />
    <Path
      d="M13.75 20.844V18H8.281A6.79 6.79 0 011.5 11.219V9.906a.656.656 0 011.313 0A4.599 4.599 0 007.405 14.5h6.344v-2.844a.657.657 0 011.11-.474l4.812 4.594a.655.655 0 010 .948l-4.813 4.594a.657.657 0 01-1.109-.474z"
      fill="currentColor"
    />
  </Base>
);

export default Reload;
