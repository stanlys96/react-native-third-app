import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';
function Onboard2(props) {
  return (
    <Svg
      width={275}
      height={168}
      viewBox="0 0 275 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0.5 0H274.5V168H0.5z" />
      <Defs>
        <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#image0_5002_10970" transform="matrix(.00024 0 0 .0004 0 -.196)" />
        </Pattern>
        <Image
          id="image0_5002_10970"
          width={4096}
          height={3511}
        />
      </Defs>
    </Svg>
  );
}
export default Onboard2;