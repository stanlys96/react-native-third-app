import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.227 15.227h11.545c.347 0 .54-.366.326-.616L9.325 7.918a.44.44 0 00-.65 0L2.902 14.61c-.215.25-.021.616.325.616z"
        fill="#64EC24"
      />
    </Svg>
  )
}

export default SvgComponent
