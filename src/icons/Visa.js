import React from 'react';
import { ClipPath, Defs, G, Path } from 'react-native-svg';

import Base from './Base';

const Visa = ({ color, style }) => (
  <Base color={color} style={style}>
    <G clipPath="url(#clip0_8795_25102)">
      <Path
        d="M23.656 17.255h-4.261L22.06.8h4.261l-2.665 16.456zM39.104 1.2c-.84-.332-2.174-.7-3.822-.7-4.208 0-7.172 2.24-7.19 5.444-.035 2.364 2.122 3.677 3.735 4.465 1.648.805 2.209 1.33 2.209 2.049-.017 1.102-1.332 1.61-2.56 1.61-1.7 0-2.612-.262-3.997-.875l-.561-.263-.597 3.694c1 .455 2.841.858 4.753.876 4.471 0 7.382-2.206 7.416-5.62.017-1.873-1.121-3.309-3.577-4.482-1.49-.753-2.403-1.26-2.403-2.03.018-.701.772-1.419 2.455-1.419a7.249 7.249 0 013.174.63l.385.175.58-3.553zM44.767 11.425c.351-.945 1.701-4.604 1.701-4.604-.017.035.35-.963.561-1.576l.298 1.418s.807 3.94.982 4.762h-3.542zM50.027.8h-3.296c-1.016 0-1.789.297-2.227 1.365l-6.33 15.091h4.471l.895-2.468h5.471c.122.577.508 2.468.508 2.468h3.946L50.027.799zM15.836.799L11.662 12.02l-.456-2.276c-.771-2.626-3.19-5.48-5.891-6.898l3.822 14.39h4.507L20.342.8h-4.506z"
        fill="#00579F"
      />
      <Path
        d="M7.787.799H.931l-.07.332C6.21 2.497 9.751 5.79 11.207 9.745l-1.49-7.563C9.47 1.132 8.716.833 7.786.8z"
        fill="#FAA61A"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_8795_25102">
        <Path fill="#fff" transform="translate(.861 .5)" d="M0 0H52.6038V17H0z" />
      </ClipPath>
    </Defs>
  </Base>
);

export default Visa;
