import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 8v10a2 2 0 002 2h6a2 2 0 002-2V8h2v10a4 4 0 01-4 4H9a4 4 0 01-4-4V8h2z"
        fill="#fff"
      />
      <Path
        d="M10 11a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1zM14 11a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6V5a3 3 0 013-3h2a3 3 0 013 3v1h3a1 1 0 110 2H5a1 1 0 010-2h3zm2-1a1 1 0 011-1h2a1 1 0 011 1v1h-4V5z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
