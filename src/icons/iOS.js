import * as React from "react"
import Svg, { Path } from "react-native-svg"

function iOS(props) {
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
        d="M18.862 4.321c-.158-.416-.537-1-1.073-1.416-.316-.237-.674-.468-1.18-.615-.547-.158-1.22-.211-2.042-.211H6.99c-.827 0-1.495.053-2.037.216a3.566 3.566 0 00-1.185.616c-.536.41-.915 1-1.078 1.415-.327.837-.332 1.785-.332 2.385v7.579c0 .6.005 1.547.332 2.389a3.578 3.578 0 002.263 2.032c.542.158 1.21.21 2.037.21h7.579c.826 0 1.494-.052 2.036-.216a3.567 3.567 0 001.184-.615c.537-.411.916-1 1.08-1.416.331-.837.331-1.79.331-2.39V6.705c0-.6-.005-1.547-.332-2.39l-.005.006zM5.694 13.658h-.627V9.916h.627v3.742zm-.31-4.374a.389.389 0 110-.779c.215 0 .394.174.394.39a.397.397 0 01-.395.39zm3.762 4.469c-1.652 0-2.694-1.18-2.694-3.058 0-1.88 1.042-3.063 2.694-3.063 1.653 0 2.695 1.184 2.695 3.063 0 1.879-1.042 3.058-2.695 3.058zm5.453 0c-1.242 0-2.116-.684-2.174-1.706h.563c.064.71.732 1.195 1.664 1.195.89 0 1.526-.484 1.526-1.153 0-.552-.384-.884-1.263-1.105l-.737-.19c-1.1-.278-1.59-.741-1.59-1.526 0-.957.864-1.642 2.032-1.642 1.158 0 2 .685 2.037 1.627h-.563c-.053-.669-.648-1.116-1.49-1.116-.82 0-1.431.458-1.431 1.11 0 .51.368.81 1.242 1.032l.642.163c1.195.3 1.695.758 1.695 1.584 0 1.043-.837 1.727-2.153 1.727zm-3.332-3.058c0 1.552-.82 2.537-2.12 2.537-1.3 0-2.116-.985-2.116-2.537 0-1.558.815-2.542 2.115-2.542 1.3 0 2.121.984 2.121 2.542z"
        fill="#EFEFEF"
      />
    </Svg>
  )
}

export default iOS
