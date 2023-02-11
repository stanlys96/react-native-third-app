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
        d="M16.764 7.762A4.747 4.747 0 0112 12.525a4.747 4.747 0 01-4.765-4.763A4.747 4.747 0 0112 3a4.746 4.746 0 014.764 4.762zM12 21c-3.904 0-7.2-.634-7.2-3.082 0-2.45 3.317-3.061 7.2-3.061 3.905 0 7.2.634 7.2 3.082C19.2 20.388 15.883 21 12 21z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
