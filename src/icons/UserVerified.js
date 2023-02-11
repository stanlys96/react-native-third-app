import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function UserVerified(props) {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.669 6.792a4.153 4.153 0 01-4.169 4.167 4.154 4.154 0 01-4.169-4.167A4.153 4.153 0 0110.5 2.625a4.153 4.153 0 014.169 4.167zM10.5 18.375c-3.416 0-6.3-.555-6.3-2.697 0-2.143 2.902-2.679 6.3-2.679 3.417 0 6.3.556 6.3 2.698 0 2.143-2.902 2.678-6.3 2.678z"
        fill="#fff"
      />
      <Rect
        x={10.5}
        y={13.125}
        width={7.875}
        height={7}
        rx={3.5}
        fill="#144471"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.994 14.256a.875.875 0 010 1.238l-3.5 3.5a.875.875 0 01-1.238 0l-1.75-1.75a.875.875 0 111.238-1.238l1.131 1.132 2.881-2.882a.875.875 0 011.238 0z"
        fill="#fff"
      />
    </Svg>
  )
}

export default UserVerified
