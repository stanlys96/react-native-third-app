import React from 'react';
import { Path } from 'react-native-svg';

import Base from './Base';

const Filter = ({ color, style, fill }) => (
  <Base color={color} style={style} fill={fill}>
    <Path
      d="M1.66905 0.5H14.6691C14.8131 0.550508 14.9436 0.633311 15.0507 0.742064C15.1578 0.850817 15.2385 0.982635 15.2868 1.12742C15.335 1.27221 15.3495 1.42612 15.3291 1.57737C15.3087 1.72861 15.254 1.87318 15.1691 2L10.1691 7.5V14.5L6.16905 11.5V7.5L1.16905 2C1.08414 1.87318 1.02939 1.72861 1.00898 1.57737C0.988573 1.42612 1.00305 1.27221 1.05132 1.12742C1.09958 0.982635 1.18034 0.850817 1.28741 0.742064C1.39449 0.633311 1.52503 0.550508 1.66905 0.5Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Base>
);

export default Filter;
