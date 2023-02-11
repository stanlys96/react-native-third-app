import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Windows(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_9595_232)">
        <Path
          d="M.04 2.83l8.14-1.11.004 7.854-8.138.046L.04 2.83zm8.137 7.649l.006 7.86-8.138-1.12v-6.793l8.132.053zm.987-8.904L19.959 0v9.474L9.164 9.56V1.576zm10.797 8.978l-.002 9.43L9.164 18.46l-.015-7.925 10.812.018z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_9595_232">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Windows
