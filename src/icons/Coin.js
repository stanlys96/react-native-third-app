import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={19}
      height={20}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.478 10.64a12.111 12.111 0 01-.785 3.676c-.138.358-.291.703-.464 1.034 0 .004-.003.004-.003.004a9.655 9.655 0 01-1.214 1.842l-.018.018c-.2.237-.41.461-.627.667l-.023.023a7.74 7.74 0 01-1.006.804s-.003 0-.003.003c-1 .666-2.124 1.056-3.309 1.094h-.021c-.054.003-.107.003-.16.003-.083 0-.168-.003-.25-.005l-.134-.007c-.04-.004-.08-.005-.12-.01-.046-.003-.09-.008-.135-.012a5.842 5.842 0 01-1.23-.267 6.45 6.45 0 01-.719-.286c-2.69-1.278-4.72-4.555-4.879-8.578a12.79 12.79 0 01.092-2.108C3.912 5.08 5.757 2.16 8.3.904a6.147 6.147 0 011.8-.578l.065-.01a6.161 6.161 0 01.807-.063h.053c.046 0 .096 0 .142.004 2.172.05 4.094 1.28 5.422 3.202a2.58 2.58 0 01.083.118c1.271 1.891 1.957 4.395 1.803 7.066l.003-.003z"
        fill="url(#paint0_linear_6731_16523)"
      />
      <Path
        d="M11.319 19.78l-.293.022h-.021l-1.542.112-.033.003-.684.048h-.01l-.448.032-.03.003v-.783l.027-10.91L8.302.9V.388l.002-.37V0l1.048.093h.003L11.17.25V.457l.003.209v.1l.002.025.039 5.296.096 12.598.004.6v.493l.005.002z"
        fill="url(#paint1_linear_6731_16523)"
      />
      <Path
        d="M16.102 10.64a12.273 12.273 0 01-.755 3.785l-.003.003s0 .005-.003.01v.004c-.014.04-.06.162-.136.34a9.871 9.871 0 01-1.672 2.737 7.675 7.675 0 01-2.217 1.768 6.345 6.345 0 01-1.188.473c-.112.031-.224.061-.338.09h-.003a3.42 3.42 0 01-.286.056l-.037.008A6.055 6.055 0 018.448 20c-.054 0-.106 0-.16-.003h-.03a6.143 6.143 0 01-1.984-.405 7.77 7.77 0 01-.3-.113 7.37 7.37 0 01-2.018-1.325 9.092 9.092 0 01-1.315-1.508v-.003C1.53 15.046.794 12.97.66 10.642c-.098-1.744.153-3.423.69-4.913 0 0 .019-.056.06-.157.913-2.434 2.575-4.327 4.643-5.14A6.641 6.641 0 017 .143c.069-.016.14-.028.21-.041A5.879 5.879 0 019.35.092h.003c.292.05.579.121.857.217a3.8 3.8 0 01.358.127l.018.007c.198.078.394.168.586.265 3.079 1.58 5.117 5.534 4.929 9.934v-.002z"
        fill="url(#paint2_linear_6731_16523)"
      />
      <Path
        d="M13.147 2.916c-.061.422-.754 1.84-1.933 3.17-.775.876-1.761 1.715-2.929 2.22a5.908 5.908 0 01-1.58.444c-1.343.178-2.41.049-3.234-.216-1.546-.506-2.245-1.521-2.223-1.978 0 0 .516-1.664 1.64-3.315C3.656 2.114 4.708.99 6.056.43a1.772 1.772 0 01.526-.184c.022-.006.04-.012.063-.015.12-.035.238-.063.356-.09A5.832 5.832 0 018.304.019a5.87 5.87 0 011.755.292c.013 0 .028.007.041.013a6.26 6.26 0 011.075.468c.155.081.302.172.44.263.155.104.32.226.493.365.703.579 1.084 1.183 1.039 1.497z"
        fill="#F42774"
        opacity={0.2}
      />
      <Path
        d="M1.556 14.334c.349.598 5.365-1.91 7.738-2.662 2.397-.76 6.105.046 6.441-.26.338-.308.153-4.852-1.188-7.11-1.38-2.324-1.392.123-2.857 1.253-1.446 1.115-7.243 3.053-8.482 2.909-1.242-.145-1.671-.765-2.132-.69-.461.073-1.228 3.638.48 6.562v-.002z"
        fill="#fff"
      />
      <Path
        d="M13.33 10.64c-.083 3.378-2.112 6.037-4.604 6.27-.121.01-.242.018-.364.018-2.66 0-4.924-2.75-5.065-6.287-.149-3.705 2.07-6.84 4.966-6.84.134 0 .265.009.396.023 2.705.273 4.76 3.29 4.672 6.818l-.001-.001z"
        fill="url(#paint3_linear_6731_16523)"
      />
      <Path
        d="M13.33 10.64c-.083 3.378-2.112 6.037-4.604 6.27-2.494-.23-4.555-2.89-4.674-6.27-.124-3.531 1.903-6.546 4.605-6.818 2.705.273 4.76 3.29 4.673 6.819z"
        fill="#FF6B04"
      />
      <Path
        d="M11.086 12.186s.42 2.144.112 2.841a.418.418 0 01-.124.173c-.06.049-.718.072-.81.074-.393.012-.448-.357-.915-.67a5.454 5.454 0 01-.241-.167c-.208-.148-.345-.256-.345-.256s-.645.524-1.262.846c-.18.093-.36.17-.52.21-.143.038-.998.062-1.03.037-.524-.404.403-2.965.42-3.085v-.004s-2.109-1.856-2-2.728c.12-.912 2.697-1.005 2.697-1.005s.23-2.921.916-3.566c.087-.082.53 0 .62 0 .24 0 .498.356.735.843.52 1.07.922 2.723.922 2.723s.326.011.754.07c.487.062 1.102.184 1.518.412.247.135.422.306.457.523.094.588-.82 1.638-1.411 2.243-.282.29-.496.483-.496.483l.003.003z"
        fill="url(#paint4_linear_6731_16523)"
      />
      <Path
        d="M11.964 10.55h-.003l-.074.103a8.51 8.51 0 01-.566.697c-.114.13-.228.248-.331.355-.282.29-.496.482-.496.482s.116.587.185 1.243c.064.602.085 1.263-.06 1.598a.429.429 0 01-.124.174.39.39 0 01-.23.074c-.392.012-1.028-.355-1.496-.67a6.173 6.173 0 01-.243-.165c-.21-.15-.347-.255-.347-.255s-.645.523-1.26.845a2.438 2.438 0 01-.519.21.7.7 0 01-.372.02c-.005 0-.007 0-.01-.003a.314.314 0 01-.114-.055c-.331-.254-.3-1.345-.227-2.144.02-.221.044-.419.063-.571.022-.163.04-.273.04-.295v-.005s-1.204-1.053-1.749-1.95a1.72 1.72 0 01-.254-.601v-.007a.74.74 0 01-.003-.17.49.49 0 01.103-.246c.218-.302.756-.487 1.285-.595.66-.14 1.305-.163 1.305-.163s.065-.316.177-.76c.265-1.04.793-2.803 1.344-2.803.243 0 .5.356.74.84.156.321.303.692.428 1.056.301.855.503 1.668.503 1.668s.327.011.753.072c.49.063 1.104.184 1.522.412.248.136.421.307.456.522.047.29-.145.688-.426 1.091v-.005z"
        fill="url(#paint5_linear_6731_16523)"
      />
      <Path
        d="M1.045 13.032c-.25-1.166 2.15.309.586 1.678 0 0-.386-.752-.586-1.678zM11.025.251c-.66-.07 3.28 1.653 4.201 4.74.889 2.973 2.806 2.027 2.806 2.027S16.503.52 11.025.253V.25z"
        fill="#fff"
      />
      <Path
        d="M17.693 14.316c-.064.25-.229.614-.464 1.035 0 .003-.003.003-.003.003-.34.618-.828 1.348-1.368 1.989l-.008.008c-.158.185-.318.364-.483.53l-.023.024c-.321.32-.653.598-.976.783a.166.166 0 01-.03.02s-.003 0-.003.003c-1.063.606-2.256.88-3.02 1.003-.345.055-.603.079-.722.09a6.679 6.679 0 01-.076.005c-.024-.005-.043-.008-.058-.013a.21.21 0 01-.054-.017c-.072-.055.314-.129.91-.407 1.039-.48 2.729-1.585 3.776-4.326 0 0 2.075-1.163 2.564-1.062.083.015.092.138.035.336l.003-.004z"
        fill="#DE376D"
        opacity={0.7}
      />
      <Path
        d="M10.555.43s4.56 1.194 5.665 7.413c1.025 5.765-2.984 10.12-2.984 10.12s2.911-3.948 2.518-9.503C15.333 2.484 10.555.43 10.555.43z"
        fill="#FFE016"
      />
      <Path
        d="M16.125 7.936c-.304-.526-1.067 2.309-.198 2.84.424.257.783-1.83.198-2.84z"
        fill="#fff"
      />
      <Path
        d="M15.34 14.44c-.015.04-.06.162-.137.34-.22.514-.694 1.498-1.45 2.47-.618.795-1.424 1.579-2.44 2.095a5.625 5.625 0 01-1.373.485c-.003.003-.007.003-.012.003a4.517 4.517 0 01-.498.082l-.059.008a7.998 7.998 0 01-.625.042h-.01a6.902 6.902 0 01-.479-.003 6.683 6.683 0 01-2.283-.485c-1.206-.487-1.888-1.187-2.008-1.315a.027.027 0 00-.01-.01l-.008-.01c-.17-.16.834.641 2.345 1.11.575.18 1.252.311 1.967.305a5.61 5.61 0 00.91-.088 6.946 6.946 0 002.141-.785c2.49-1.401 3.911-4.023 4.03-4.246l-.001.002zM11.964 10.55h-.003l-.074.103a8.51 8.51 0 01-.566.697c-.74.03-1.474.12-2.113.322-.917.29-2.24.85-3.53 1.387.02-.221.043-.419.062-.571.022-.163.04-.273.04-.295v-.005s-1.204-1.053-1.749-1.95a1.72 1.72 0 01-.254-.601v-.007a.74.74 0 01-.003-.17.49.49 0 01.103-.246c.218-.302.756-.487 1.285-.595.66-.14 1.305-.163 1.305-.163s.065-.316.177-.76c.841-.27 1.718-.584 2.512-.909.301.856.503 1.669.503 1.669s.327.01.753.072c.49.063 1.104.183 1.522.411.248.137.421.308.456.523.047.289-.145.687-.426 1.09v-.002z"
        fill="#fff"
        opacity={0.5}
      />
      <Path d="M5.017 15.275s3.647 3.053 6.51.171c0 0-3.13 3.57-6.51-.17z" fill="#FFE016" />
      <Path
        d="M3.435 8.519c.202 1.128.984-2.52 4.188-3.667 3.25-1.165 5.541 3.885 5.541 3.885s-.528-4.957-5.027-4.959c-3.518 0-4.702 4.739-4.702 4.739v.002z"
        fill="#D42F55"
        opacity={0.5}
      />
      <Path
        d="M11.086 12.186h-.592s1.082-1.053 1.664-1.943c.589-.9.763-.341.763-.341s-.612 1.344-1.835 2.284z"
        fill="#DE376D"
        opacity={0.7}
      />
      <Path
        d="M10.103 8.487s-.43.326-.003.879c.425.547 1.61.073 1.747-.286.138-.361-1.15-.603-1.744-.593zM11.905 19.085c-.294.191 1.35.226 2.033-.168.686-.396 1.674-1.184 1.823-1.67.152-.49-.79-.394-1.36-.243-.568.15-1.107 1.178-2.495 2.08h-.001z"
        fill="#fff"
      />
      <Path
        d="M15.932 13.202c-.551-.194-1.318 1.053-.924 2.084.389 1.017 2.179-1.643.924-2.084z"
        fill="url(#paint6_linear_6731_16523)"
      />
      <Path
        d="M15.07 14.081c-.05.754.776.799 1.092.407.318-.394.31-1.286-.303-1.303-.612-.018-.79.896-.79.896h.002z"
        fill="#DE376D"
        opacity={0.7}
      />
      <Path
        d="M14.902 14.731c.179-.452.662.104.96.129.297.025-.215.764-.557.656-.342-.108-.403-.785-.403-.785z"
        fill="#FF9500"
      />
      <Path
        d="M14.1 13.524c-.553-.19-1.107.708-.873 1.31.231.599 1.84-.98.874-1.31z"
        fill="url(#paint7_linear_6731_16523)"
      />
      <Path
        d="M13.856 13.499c-.382.12-.51.744-.36.928.15.183.88-.041.907-.464.028-.425-.396-.511-.547-.464z"
        fill="#DE376D"
        opacity={0.7}
      />
      <Path
        d="M13.168 14.622c.102-.552.309 0 .605.063.297.063-.587.673-.604-.063z"
        fill="#FF9500"
      />
      <Path
        d="M4.697 5.595c-.45-.163-.854.584-.644 1.093.21.505 1.425-.807.644-1.093z"
        fill="url(#paint8_linear_6731_16523)"
      />
      <Path
        d="M4.502 5.571c-.3.096-.376.619-.248.776.126.155.7-.025.704-.382a.382.382 0 00-.456-.394z"
        fill="#DE376D"
        opacity={0.7}
      />
      <Path d="M3.999 6.509c.058-.463.246.003.486.058s-.442.56-.486-.058z" fill="#FF9500" />
      <Path
        d="M16.65 3.538c-.019-.029-.04-.055-.058-.082l.058.082zM16.592 3.456a7.069 7.069 0 00-1.351-1.348c-.003-.003-.006-.003-.007-.006-.898-.692-2.236-1.42-4.062-1.69a10.181 10.181 0 00-.923-.094c-.028-.003-.053-.003-.08-.003-.037-.003-.072-.003-.108-.003a10.972 10.972 0 00-1.756.076C5.696.716 3.965 2.015 2.89 3.243A8.614 8.614 0 001.415 5.57C2.324 3.138 3.986 1.245 6.054.43A1.774 1.774 0 016.58.248c.022-.005.041-.012.063-.015.12-.034.239-.062.356-.09.069-.015.14-.027.21-.04A5.879 5.879 0 019.35.092h.003l1.815.16v.002c2.173.05 4.092 1.281 5.421 3.202h.002zM15.994 17.213c-.2.238-.41.462-.627.668l-.023.023c-.321.32-.653.598-.976.783-.01.008-.02.016-.03.02 0 0-.003 0-.003.004-1 .665-2.123 1.056-3.309 1.094h-.021l-1.542.111a6.054 6.054 0 01-1.017.087c-.053 0-.106 0-.16-.003l-.029.003V20a6.146 6.146 0 01-1.985-.405 7.76 7.76 0 01-.3-.113c-1.205-.487-1.887-1.187-2.008-1.316a9.092 9.092 0 01-1.325-1.518c.07.076 1.52 1.696 3.652 2.61.604.26 1.264.462 1.966.56.49.069 1.001.086 1.527.037h.003l.141-.014c.005 0 .01 0 .012-.003.135-.013.27-.03.401-.049l.066-.008c.316-.047.62-.106.91-.172 2.483-.572 4.037-1.812 4.532-2.254l.007-.008.137-.127.001-.006z"
        fill="#D42F55"
        opacity={0.8}
      />
      <Path
        d="M12.5.709c-.956-.047 1.03 1.652 1.807 2.38.77.723 2.068.214 2.109.144.04-.071-1.985-2.43-3.915-2.526v.002z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_6731_16523"
          x1={10.9347}
          y1={19.805}
          x2={10.9347}
          y2={0.250767}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.05} stopColor="#FF3F00" />
          <Stop offset={0.72} stopColor="#FF6A03" />
          <Stop offset={1} stopColor="#FFFF04" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_6731_16523"
          x1={9.78872}
          y1={20}
          x2={9.78872}
          y2={0}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.05} stopColor="#FF3F00" />
          <Stop offset={0.72} stopColor="#FF6A03" />
          <Stop offset={1} stopColor="#FFFF04" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_6731_16523"
          x1={8.37661}
          y1={20}
          x2={8.37661}
          y2={0}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFA900" />
          <Stop offset={1} stopColor="#FF9600" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_6731_16523"
          x1={8.30958}
          y1={16.9284}
          x2={8.30958}
          y2={3.80176}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF7C04" />
          <Stop offset={1} stopColor="#D92000" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_6731_16523"
          x1={10.4823}
          y1={15.4352}
          x2={6.55666}
          y2={5.44435}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#EA5104" />
          <Stop offset={1} stopColor="#D92000" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear_6731_16523"
          x1={10.0504}
          y1={15.3901}
          x2={6.19454}
          y2={5.57313}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF9600" />
          <Stop offset={1} stopColor="#FFA900" />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear_6731_16523"
          x1={15.6351}
          y1={15.5152}
          x2={15.6351}
          y2={13.1812}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.04} stopColor="#EF6300" />
          <Stop offset={1} stopColor="#E13E00" />
        </LinearGradient>
        <LinearGradient
          id="paint7_linear_6731_16523"
          x1={13.7881}
          y1={14.9695}
          x2={13.7881}
          y2={13.4988}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.04} stopColor="#EF6300" />
          <Stop offset={1} stopColor="#E13E00" />
        </LinearGradient>
        <LinearGradient
          id="paint8_linear_6731_16523"
          x1={4.47015}
          y1={6.80597}
          x2={4.48409}
          y2={5.57234}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.04} stopColor="#EF6300" />
          <Stop offset={1} stopColor="#E13E00" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
