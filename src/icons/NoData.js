import * as React from 'react';
import Svg, { G, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const NoData = (props) => (
  <Svg viewBox="0 0 238 238" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G
      style={{
        mixBlendMode: 'luminosity',
      }}
    >
      <Path
        d="M59.517 208.25H178.48a12.92 12.92 0 008.824-3.459 100.71 100.71 0 0023.559-33.2 101.238 101.238 0 008.539-39.877c.513-55.865-44.627-101.832-100.16-101.964-55.564-.132-100.648 45.143-100.648 101.011a101.254 101.254 0 008.359 40.408 100.729 100.729 0 0023.765 33.643 12.882 12.882 0 008.8 3.438z"
        fill="url(#paint0_linear_34127_61465)"
        fillOpacity={0.1}
      />
      <Path
        d="M101.757 183.76c.379-4.433-1.933-8.251-5.164-8.527-3.232-.277-6.16 3.093-6.539 7.526-.38 4.433 1.933 8.251 5.165 8.527 3.232.277 6.159-3.093 6.538-7.526z"
        fill="#417A93"
      />
      <Path
        d="M98.096 189.252c.816-3.139-2.012-6.592-6.318-7.712-4.306-1.12-8.459.516-9.275 3.656-.817 3.139 2.012 6.591 6.318 7.711 4.306 1.12 8.459-.517 9.275-3.655z"
        fill="#417A93"
      />
      <Path
        d="M97.276 191.145c2.931-2.073 3.003-7.013.16-11.033-2.844-4.021-7.525-5.6-10.455-3.528-2.931 2.073-3.003 7.012-.16 11.033 2.844 4.021 7.525 5.6 10.455 3.528zM155.809 175.004c2.592-2.144 3.428-5.414 1.865-7.304-1.562-1.889-4.931-1.684-7.524.46-2.592 2.143-3.427 5.413-1.865 7.303 1.563 1.889 4.931 1.684 7.524-.459z"
        fill="#417A93"
      />
      <Path
        d="M69.906 111.945a12.026 12.026 0 00-11.107 7.421 12.022 12.022 0 00-.914 4.601v.024l-9.008-1.792v13.79h21.03a12.025 12.025 0 0012.022-12.022 12.022 12.022 0 00-12.023-12.022z"
        fill="#7B8395"
      />
      <Path
        d="M48.877 95.591a20.206 20.206 0 00-19.695 15.7 12.454 12.454 0 00-13.24 6.12 12.464 12.464 0 0010.861 18.578h22.074a20.198 20.198 0 000-40.398zM154.659 150.769h-20.701a9.994 9.994 0 110-19.988h20.701a12.143 12.143 0 0012.125-12.126v-15.957a9.995 9.995 0 0117.061-7.067 9.991 9.991 0 012.927 7.067v15.957a32.15 32.15 0 01-32.113 32.114zM150.584 41.315a12.02 12.02 0 0112.023 12.022l-.001.023 9.007-1.791v13.79h-21.029a12.022 12.022 0 010-24.044z"
        fill="#7B8395"
      />
      <Path
        d="M121.303 30.991a23.792 23.792 0 0123.789 23.79v146.542H97.513V54.781a23.79 23.79 0 0123.79-23.79z"
        fill="#A4A9B4"
      />
      <Path
        d="M150.907 175.937c2.126-1.222 2.491-4.577.814-7.493-1.676-2.917-4.758-4.29-6.885-3.068-2.126 1.222-2.49 4.577-.814 7.493 1.677 2.917 4.76 4.29 6.885 3.068z"
        fill="#417A93"
      />
      <Path
        d="M155.489 170.74c.663-3.664-.965-7.026-3.635-7.509-2.671-.484-5.374 2.094-6.037 5.758-.663 3.663.964 7.025 3.635 7.509 2.67.483 5.373-2.095 6.037-5.758z"
        fill="#417A93"
      />
      <Path
        d="M210.194 207.815a3.192 3.192 0 001.677-.471 3.19 3.19 0 001.183-1.279 3.19 3.19 0 00.338-1.709 3.21 3.21 0 00-.607-1.633c-13.603-18.269-36.447-30.257-62.339-30.257-25.891 0-48.735 11.988-62.338 30.257a3.206 3.206 0 00-.27 3.342 3.196 3.196 0 002.86 1.75h119.496z"
        fill="#7B8395"
      />
      <Path
        d="M124.469 203.074c2.045-1.691 2.704-4.27 1.471-5.762-1.232-1.491-3.89-1.329-5.936.362-2.045 1.691-2.705 4.271-1.471 5.763 1.232 1.491 3.89 1.329 5.936-.363z"
        fill="#417A93"
      />
      <Path
        d="M120.601 203.811c1.677-.964 1.965-3.611.642-5.913-1.323-2.301-3.755-3.384-5.432-2.42-1.678.964-1.965 3.611-.642 5.912 1.322 2.302 3.755 3.385 5.432 2.421z"
        fill="#417A93"
      />
      <Path
        d="M124.216 199.71c.523-2.891-.761-5.543-2.868-5.925-2.107-.381-4.24 1.653-4.763 4.543-.524 2.891.76 5.544 2.867 5.925 2.107.382 4.24-1.652 4.764-4.543z"
        fill="#417A93"
      />
      <Path
        d="M124.305 207.815c-10.149-12.795-29.42-21.435-51.528-21.435-19.388 0-36.594 6.644-47.38 16.909a2.634 2.634 0 001.835 4.526h97.073z"
        fill="#A4A9B4"
      />
      <Path
        opacity={0.3}
        d="M120.682 168.315a2.01 2.01 0 001.21-2.571l-1.478-4.111a2.009 2.009 0 10-3.782 1.36l1.478 4.111a2.012 2.012 0 002.572 1.211zM152.465 145.46a2.01 2.01 0 103.277 2.327l2.529-3.562a2.01 2.01 0 10-3.277-2.327l-2.529 3.562zM134.86 140.9a2.011 2.011 0 00-.241 2.833l2.818 3.339a2.01 2.01 0 003.072-2.592l-2.817-3.339a2.01 2.01 0 00-2.832-.241zM178.088 131.923a2.01 2.01 0 00-.283-4.009l-4.358.308a2.01 2.01 0 10.283 4.009l4.358-.308zM132.227 126.403a2.01 2.01 0 00-1.48-2.426l-4.246-1.028a2.01 2.01 0 10-.946 3.906l4.246 1.028a2.009 2.009 0 002.426-1.48z"
        fill="#fff"
      />
      <Path d="M114.338 122.78l-16.824 25.804v-28.049l16.824 2.245z" fill="#7B8395" />
      <Path
        opacity={0.3}
        d="M103.237 141.77c.905.643 2.16.43 2.802-.475l2.53-3.562a2.01 2.01 0 10-3.277-2.327l-2.529 3.562a2.01 2.01 0 00.474 2.802zM175.895 105.3a2.01 2.01 0 00-3.072 2.592l2.817 3.339a2.01 2.01 0 003.072-2.591l-2.817-3.34zM144.181 100.719a2.01 2.01 0 00-2.522-1.311l-4.166 1.315a2.009 2.009 0 101.21 3.833l4.166-1.316a2.01 2.01 0 001.312-2.521z"
        fill="#fff"
      />
      <Path
        d="M108.889 124.398h-20.7a32.15 32.15 0 01-32.114-32.114V76.327a9.994 9.994 0 1119.988 0v15.957a12.138 12.138 0 0012.125 12.125h20.701a9.99 9.99 0 017.067 2.928 9.993 9.993 0 01-7.067 17.061z"
        fill="#A4A9B4"
      />
      <Path
        opacity={0.3}
        d="M95.646 121.423a2.01 2.01 0 10-.284-4.009l-4.358.309a2.01 2.01 0 10.284 4.008l4.358-.308zM72.016 115.364a2.01 2.01 0 002.802-.475l2.53-3.561A2.01 2.01 0 1074.071 109l-2.53 3.562a2.01 2.01 0 00.475 2.802zM74.432 94.103a2.01 2.01 0 00-2.521-1.312l-4.166 1.315a2.01 2.01 0 001.21 3.833l4.165-1.315a2.01 2.01 0 001.312-2.52zM112.733 94.555a2.01 2.01 0 00-.284-4.01l-4.358.309a2.009 2.009 0 10.284 4.009l4.358-.308zM65.844 83.66a2.01 2.01 0 00.24-2.832l-2.817-3.339a2.01 2.01 0 10-3.072 2.592l2.817 3.34a2.01 2.01 0 002.832.24zM123.283 69.114a2.01 2.01 0 103.277 2.327l2.53-3.562a2.01 2.01 0 00-3.278-2.327l-2.529 3.562zM102.962 44.95a2.01 2.01 0 00-.24 2.833l2.817 3.339a2.01 2.01 0 103.072-2.592l-2.817-3.34a2.01 2.01 0 00-2.832-.24z"
        fill="#fff"
      />
      <Path
        d="M171.614 24.96a20.205 20.205 0 0119.695 15.7 12.462 12.462 0 0114.785 11.04 12.45 12.45 0 01-3.181 9.575 12.463 12.463 0 01-9.226 4.084h-22.073a20.198 20.198 0 110-40.398z"
        fill="#7B8395"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_34127_61465"
        x1={119}
        y1={29.75}
        x2={119}
        y2={208.25}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FBFDFE" />
        <Stop offset={1} stopColor="#F0F5FA" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default NoData;
