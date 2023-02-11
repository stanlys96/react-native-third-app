import React from 'react';
import { Path, Ellipse } from 'react-native-svg';

import Base from './Base';

const Notifs = ({ color, style, isMarked }) => (
  <Base color={color} style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.50138 22C9.73404 22 10.7426 20.9846 10.7426 19.7436H6.26019C6.26019 20.342 6.49631 20.916 6.91662 21.3391C7.33692 21.7623 7.90698 22 8.50138 22ZM15.225 15.2308V9.58974C15.225 6.12615 13.3872 3.22667 10.1823 2.45949V1.69231C10.1823 0.755897 9.43148 0 8.50138 0C7.57129 0 6.82049 0.755897 6.82049 1.69231V2.45949C3.60437 3.22667 1.7778 6.11487 1.7778 9.58974V15.2308L0.332231 16.6862C-0.373744 17.3969 0.119318 18.6154 1.11665 18.6154H15.8749C16.8722 18.6154 17.3765 17.3969 16.6705 16.6862L15.225 15.2308Z"
      fill="currentColor"
    />
    {isMarked && <Ellipse cx={12.3266} cy={6.51261} rx={5.60298} ry={5.64103} fill="#17AFF0" />}
  </Base>
);

export default Notifs;
