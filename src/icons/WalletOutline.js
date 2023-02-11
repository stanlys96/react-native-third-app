import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function WalletOutline(props) {
  return (
    <Svg
      width={17}
      height={14}
      viewBox="0 0 17 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.167 9.337a.375.375 0 00-.481 0L.384 11.265a.375.375 0 00.481.574l.06-.05v1.547c0 .207.168.375.375.375h1.065a.375.375 0 00.374-.375v-1.088h.37v1.089c0 .207.169.374.375.374h1.068a.375.375 0 00.375-.374v-1.548l.06.05a.373.373 0 00.528-.046.375.375 0 00-.047-.528L3.167 9.337zm1.01 3.625H3.86v-1.088a.375.375 0 00-.375-.375h-1.12a.375.375 0 00-.374.374v1.09h-.315v-1.801l1.251-1.049 1.252 1.049v1.8zM11.69 2.107H3.174a.375.375 0 000 .75h8.514a.375.375 0 000-.75z"
        fill="#fff"
      />
      <Path
        d="M15.423 6.503V6.12c0-.969-.617-1.794-1.478-2.11V2.425A2.14 2.14 0 0011.808.289H3.056C1.895.29.957 1.198.92 2.357v6.284a.375.375 0 00.748 0v-4.6c.4.358.924.578 1.501.578h10.004c.082 0 .162.008.24.021a.371.371 0 00.157.036h.005a1.502 1.502 0 011.098 1.444v.364h-2.762c-.563 0-1.02.458-1.02 1.02V9.21c0 .562.457 1.02 1.02 1.02h2.773a.367.367 0 00-.01.084v1.149c0 .827-.674 1.5-1.501 1.5H6.127a.375.375 0 000 .75h7.046c1.24 0 2.25-1.01 2.25-2.25v-1.149a.367.367 0 00-.016-.1 1.02 1.02 0 00.843-1.004V7.504c0-.496-.357-.91-.827-1.001zM3.169 3.87a1.502 1.502 0 01-1.5-1.488V2.38a1.38 1.38 0 011.387-1.342h8.752c.765 0 1.387.622 1.387 1.387V3.87H3.17V3.87zm12.332 5.34c0 .15-.122.271-.271.271h-3.32a.271.271 0 01-.27-.27V7.504c0-.15.121-.271.27-.271h3.32c.15 0 .27.121.27.27V9.21z"
        fill="#fff"
      />
      <Path d="M13.479 8.358a.553.553 0 11-1.107 0 .553.553 0 011.107 0z" fill="#fff" />
    </Svg>
  );
}

export default WalletOutline;
