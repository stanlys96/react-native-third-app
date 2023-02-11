import * as React from "react"
import Svg, { Path } from "react-native-svg"

function QuestionCircleV2(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10a8 8 0 11-16.001 0A8 8 0 0118 10zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 1111 10.83V11a1 1 0 01-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
        fill="#17AFF0"
      />
    </Svg>
  )
}

export default QuestionCircleV2
