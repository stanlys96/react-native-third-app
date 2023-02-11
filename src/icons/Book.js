import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Book(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.5 20.166h13.75v-1.833H5.511c-.423-.011-.928-.179-.928-.917s.505-.905.928-.916H19.25V3.666a1.835 1.835 0 00-1.833-1.833H5.5c-1.106 0-2.75.732-2.75 2.75v12.833c0 2.018 1.644 2.75 2.75 2.75zM4.583 7.333v-2.75c0-.738.505-.906.917-.917h11.917v11H4.583V7.333z"
        fill="#17AFF0"
      />
      <Path d="M7.333 5.5h8.25v1.833h-8.25V5.5z" fill="#17AFF0" />
    </Svg>
  )
}

export default Book
