import React from 'react';
import { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

import Base from './Base';

const JCB = ({ color, style }) => (
  <Base color={color} style={style}>
    <Path
      d="M23 14.073a3.432 3.432 0 01-3.427 3.427H.927V3.927A3.432 3.432 0 014.354.5H23v13.573z"
      fill="#fff"
    />
    <Path
      d="M16.928 10.591h1.417c.04 0 .135-.013.175-.013.27-.054.5-.297.5-.634a.655.655 0 00-.5-.635c-.04-.013-.121-.013-.175-.013h-1.417v1.295z"
      fill="url(#paint0_linear_8795_25200)"
    />
    <Path
      d="M18.183 1.646a2.456 2.456 0 00-2.456 2.456v2.55h3.468c.08 0 .175 0 .243.014.782.04 1.362.445 1.362 1.146 0 .554-.39 1.026-1.12 1.12v.027c.797.054 1.404.5 1.404 1.188 0 .742-.675 1.227-1.565 1.227h-3.805v4.992h3.602a2.456 2.456 0 002.456-2.455V1.646h-3.59z"
      fill="url(#paint1_linear_8795_25200)"
    />
    <Path
      d="M18.844 7.975c0-.324-.23-.54-.5-.58-.026 0-.094-.014-.134-.014h-1.282v1.187h1.282c.04 0 .121 0 .135-.013.27-.04.5-.257.5-.58z"
      fill="url(#paint2_linear_8795_25200)"
    />
    <Path
      d="M4.61 1.646a2.456 2.456 0 00-2.455 2.456v6.058c.688.337 1.403.553 2.118.553.85 0 1.309-.512 1.309-1.214v-2.86h2.104v2.846c0 1.107-.688 2.01-3.022 2.01-1.417 0-2.523-.31-2.523-.31v5.168h3.602A2.456 2.456 0 008.2 13.897V1.647H4.61z"
      fill="url(#paint3_linear_8795_25200)"
    />
    <Path
      d="M11.396 1.646a2.456 2.456 0 00-2.455 2.456v3.211c.62-.526 1.7-.863 3.44-.782.931.04 1.93.296 1.93.296v1.04a4.67 4.67 0 00-1.862-.54c-1.322-.095-2.118.553-2.118 1.686 0 1.147.796 1.795 2.118 1.687.769-.054 1.363-.297 1.862-.54v1.039s-.985.256-1.93.297c-1.74.08-2.82-.257-3.44-.783v5.667h3.602A2.456 2.456 0 0015 13.924V1.646h-3.603z"
      fill="url(#paint4_linear_8795_25200)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_8795_25200"
        x1={15.7252}
        y1={9.94513}
        x2={21.7882}
        y2={9.94513}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#007940" />
        <Stop offset={0.2285} stopColor="#00873F" />
        <Stop offset={0.7433} stopColor="#40A737" />
        <Stop offset={1} stopColor="#5CB531" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_8795_25200"
        x1={15.7249}
        y1={9.00051}
        x2={21.7884}
        y2={9.00051}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#007940" />
        <Stop offset={0.2285} stopColor="#00873F" />
        <Stop offset={0.7433} stopColor="#40A737" />
        <Stop offset={1} stopColor="#5CB531" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_8795_25200"
        x1={15.725}
        y1={7.97282}
        x2={21.7882}
        y2={7.97282}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#007940" />
        <Stop offset={0.2285} stopColor="#00873F" />
        <Stop offset={0.7433} stopColor="#40A737" />
        <Stop offset={1} stopColor="#5CB531" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_8795_25200"
        x1={2.15175}
        y1={9.00051}
        x2={8.30859}
        y2={9.00051}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1F286F" />
        <Stop offset={0.4751} stopColor="#004E94" />
        <Stop offset={0.8261} stopColor="#0066B1" />
        <Stop offset={1} stopColor="#006FBC" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_8795_25200"
        x1={8.90603}
        y1={9.00051}
        x2={14.8858}
        y2={9.00051}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6C2C2F" />
        <Stop offset={0.1735} stopColor="#882730" />
        <Stop offset={0.5731} stopColor="#BE1833" />
        <Stop offset={0.8585} stopColor="#DC0436" />
        <Stop offset={1} stopColor="#E60039" />
      </LinearGradient>
    </Defs>
  </Base>
);

export default JCB;
