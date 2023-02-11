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
        d="M12.134 6.681A4.417 4.417 0 017.7 11.113a4.418 4.418 0 01-4.434-4.432A4.417 4.417 0 017.7 2.25a4.416 4.416 0 014.434 4.431zM7.7 19C4.067 19 1 18.41 1 16.13c0-2.278 3.087-2.848 6.7-2.848 3.634 0 6.7.59 6.7 2.868 0 2.28-3.087 2.849-6.7 2.849z"
        fill="#D0D0D0"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.965 8.762a4.747 4.747 0 01-4.765 4.763 4.747 4.747 0 01-4.765-4.763A4.747 4.747 0 0115.2 4a4.746 4.746 0 014.765 4.762zM15.2 22c-3.904 0-7.2-.634-7.2-3.082 0-2.45 3.317-3.061 7.2-3.061 3.905 0 7.2.634 7.2 3.082 0 2.449-3.317 3.061-7.2 3.061z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
