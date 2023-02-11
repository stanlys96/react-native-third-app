import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={10}
      height={9}
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.524.475a.5.5 0 01.952 0l.787 2.44a.5.5 0 00.322.322l2.44.787a.5.5 0 010 .952l-2.44.787a.5.5 0 00-.322.322l-.787 2.44a.5.5 0 01-.952 0l-.787-2.44a.5.5 0 00-.322-.322l-2.44-.787a.5.5 0 010-.952l2.44-.787a.5.5 0 00.322-.322l.787-2.44z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgComponent;
