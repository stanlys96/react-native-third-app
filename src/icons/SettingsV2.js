import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SettingsV2(props) {
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
        d="M1.667 5.833c0-.46.373-.833.833-.833H5a.833.833 0 010 1.667H2.5a.833.833 0 01-.833-.834zM2.5 13.333A.833.833 0 002.5 15h5.833a.833.833 0 100-1.667H2.5zM15 13.333A.833.833 0 1015 15h2.5a.833.833 0 000-1.667H15zM11.667 5a.833.833 0 000 1.667H17.5A.833.833 0 0017.5 5h-5.833z"
        fill="#17AFF0"
      />
      <Path
        d="M6.667 8.333a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM13.333 16.666a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        fill="#17AFF0"
      />
    </Svg>
  )
}

export default SettingsV2
