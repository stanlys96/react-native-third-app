import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Chat = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M16.736.114L.439 9.512a.844.844 0 00.077 1.519l3.738 1.567 10.101-8.9c.194-.171.468.092.303.293l-8.47 10.316v2.83c0 .829 1.002 1.156 1.494.555l2.233-2.717 4.38 1.834a.846.846 0 001.161-.64L17.988.986c.12-.71-.644-1.223-1.252-.871z"
      fill="currentColor"
    />
  </Base>
);

export default Chat;
