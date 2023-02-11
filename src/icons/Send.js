import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Base from './Base';

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.374 1.813l11.61 5.553a.69.69 0 010 1.243l-11.61 5.553a.688.688 0 01-.962-.803l1.162-4.258a.276.276 0 01.228-.2l5.626-.765a.138.138 0 00.108-.082l.01-.035a.138.138 0 00-.087-.147l-.03-.009-5.62-.763a.275.275 0 01-.229-.2L1.412 2.615a.689.689 0 01.962-.803z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
