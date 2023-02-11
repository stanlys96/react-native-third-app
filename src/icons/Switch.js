import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

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
        d="M14.563 9.667a.438.438 0 01-.438-.438 3.066 3.066 0 00-3.063-3.062H6.833v1.896c0 .385-.463.58-.74.316L2.886 5.316a.437.437 0 010-.632L6.094 1.62a.438.438 0 01.74.317v1.895h3.645A4.526 4.526 0 0115 8.354v.875a.438.438 0 01-.438.438z"
        fill="#fff"
      />
      <Path
        d="M9.167 13.895V12H5.52A4.526 4.526 0 011 7.48v-.875a.438.438 0 01.875 0 3.066 3.066 0 003.063 3.062h4.229V7.77c0-.383.461-.582.74-.316l3.208 3.063a.437.437 0 010 .632L9.906 14.21a.438.438 0 01-.74-.316z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
