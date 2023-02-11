import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';
function Onboard3(props) {
  return (
    <Svg
      width={275}
      height={201}
      viewBox="0 0 275 201"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0.5 0H274.5V201H0.5z" />
      <Defs>
        <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#image0_5002_10972" transform="matrix(.00037 0 0 .0005 -.258 -.213)" />
        </Pattern>
        <Image
          id="image0_5002_10972"
          width={4096}
          height={3072}
        />
      </Defs>
    </Svg>
  );
}
export default Onboard3;