import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Home = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M6.286 18.312v-2.897c0-.74.603-1.34 1.348-1.34h2.723c.358 0 .701.142.954.393s.395.592.395.947v2.897c-.002.307.12.603.337.82.219.219.515.342.825.342h1.858c.867.002 1.7-.339 2.315-.947A3.23 3.23 0 0018 16.232V7.979c0-.696-.31-1.356-.848-1.802l-6.32-5.01a2.934 2.934 0 00-3.74.067L.915 6.177A2.344 2.344 0 000 7.979v8.244c0 1.795 1.466 3.25 3.274 3.25H5.09c.643 0 1.165-.514 1.17-1.153l.026-.008z"
      fill="currentColor"
    />
  </Base>
);

export default Home;
