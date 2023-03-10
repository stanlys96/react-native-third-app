import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={15}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.946 14.5c-1.063-1.085-2.153-2.193-3.238-3.304-1.085-1.111-2.166-2.226-3.443-3.54v6.442c-1.279-1.303-2.404-2.372-3.434-3.525-.644-.72-1.326-1.093-2.298-.96-.477.066-.971.01-1.531.01V5.29c1.184-.426 2.788.59 3.721-1.058C2.77 3.342 1.8 2.433.768 1.466 1.284 1.012 1.614.723 1.87.5c4.297 4.323 8.646 8.698 13.021 13.102l-.945.9V14.5zM12.442 2.151l.911-.873c2.602 1.629 3.522 7.126 1.685 10.006-.786-.457-1.077-.969-.766-1.99.684-2.237.208-4.358-1.156-6.262-.194-.27-.405-.529-.674-.88z"
        fill="#fff"
      />
      <Path
        d="M12.777 9.04c-.64-.535-1.156-.986-1.222-1.974-.064-.95-.59-1.865-.99-3.011.134-.11.474-.396.818-.684 1.47 1.209 2.088 3.627 1.394 5.67V9.04zM5.926 2.113L7.164.854v2.401c-.377-.346-.785-.724-1.238-1.142z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
