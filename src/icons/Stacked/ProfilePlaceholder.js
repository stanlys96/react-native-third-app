import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function ProfilePlaceholder(props) {
  return (
    <Svg
      width={92}
      height={92}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={46} cy={46} r={46} fill="#43466D" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.324 53.84c3.788-1.27 8.739-1.638 13.732-1.638 5.025 0 9.979.382 13.763 1.669 1.906.648 3.718 1.592 5.077 3.017 1.424 1.492 2.231 3.391 2.231 5.612 0 2.226-.815 4.126-2.247 5.612-1.367 1.419-3.185 2.354-5.093 2.994-3.787 1.27-8.737 1.638-13.73 1.638-5.026 0-9.98-.381-13.764-1.668-1.907-.648-3.72-1.592-5.079-3.017-1.424-1.492-2.231-3.392-2.231-5.613 0-2.227.815-4.127 2.248-5.614 1.366-1.418 3.185-2.353 5.093-2.993zm-1.095 6.844c-.456.474-.694 1.001-.694 1.762 0 .767.239 1.302.695 1.78.521.546 1.423 1.109 2.85 1.594 2.883.98 7.078 1.372 11.976 1.372 4.876 0 9.073-.38 11.966-1.35 1.432-.48 2.337-1.04 2.86-1.581.455-.474.693-1 .693-1.761 0-.767-.239-1.301-.696-1.78-.52-.545-1.421-1.108-2.848-1.593-2.883-.98-7.077-1.373-11.975-1.373-4.876 0-9.074.379-11.967 1.349-1.433.48-2.338 1.04-2.86 1.581zM31.551 34.722c.003-8.009 6.497-14.497 14.505-14.497 8.01 0 14.501 6.492 14.501 14.502 0 8.009-6.491 14.504-14.502 14.504h-.092c-7.984-.027-14.436-6.524-14.412-14.51zm14.505-8.946c-4.945 0-8.953 4.008-8.953 8.95v.01c-.017 4.92 3.958 8.924 8.875 8.943h.078c4.942 0 8.95-4.008 8.95-8.953a8.95 8.95 0 00-8.95-8.95z"
        fill="#fff"
      />
    </Svg>
  )
}

export default ProfilePlaceholder
