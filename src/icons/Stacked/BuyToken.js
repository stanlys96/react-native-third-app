import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function BuyToken(props) {
  return (
    <Svg
      width={42}
      height={43}
      viewBox="0 0 42 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={21} cy={21.5} r={21} fill="#43466D" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.778 23.926V12.69c0-.382.339-.691.731-.691.404 0 .731.309.731.691v11.218l2.874-2.683a.774.774 0 011.034.005c.279.26.289.7.005.964l-4.079 3.807a.762.762 0 01-.574.254.762.762 0 01-.574-.254l-4.079-3.806a.657.657 0 01.005-.965.774.774 0 011.034-.005l2.892 2.7zm11.833 6.222v-5.845c0-.352.322-.636.695-.636.383 0 .694.295.694.636v6.505c0 .352-.322.636-.694.636H9.694a.716.716 0 01-.487-.19.602.602 0 01-.208-.446v-6.505c0-.351.322-.636.694-.636.384 0 .695.295.695.636v5.845H32.61z"
        fill="#fff"
      />
    </Svg>
  )
}

export default BuyToken
