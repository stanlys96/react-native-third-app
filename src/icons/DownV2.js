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
        d="M14.773 7.773H3.228c-.347 0-.54.366-.326.616l5.773 6.693a.44.44 0 00.65 0l5.773-6.693c.215-.25.021-.616-.325-.616z"
        fill="#C41818"
      />
    </Svg>
  )
}

export default SvgComponent
