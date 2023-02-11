import * as React from 'react';
import Svg, { G, Rect, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function WalletConnectCircle(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_8781_3633)">
        <Rect x={4} width={32} height={32} rx={16} fill="#FBFEFF" shapeRendering="crispEdges" />
        <Path
          d="M14.094 12.25c3.262-3.206 8.55-3.206 11.812 0l.392.386c.163.16.163.42 0 .58l-1.343 1.32a.211.211 0 01-.295 0l-.54-.53c-2.275-2.237-5.965-2.237-8.24 0l-.578.569a.211.211 0 01-.296 0l-1.342-1.32a.406.406 0 010-.581l.43-.424zm14.589 2.73l1.195 1.175c.163.16.163.42 0 .581l-5.389 5.298a.423.423 0 01-.59 0l-3.825-3.76a.106.106 0 00-.148 0l-3.824 3.76a.423.423 0 01-.59 0l-5.39-5.298a.406.406 0 010-.58l1.195-1.176a.423.423 0 01.591 0l3.825 3.76c.04.04.106.04.147 0l3.825-3.76a.423.423 0 01.59 0l3.825 3.76c.04.04.107.04.147 0l3.825-3.76a.423.423 0 01.59 0z"
          fill="#17AFF0"
        />
        <Rect
          x={4.5}
          y={0.5}
          width={31}
          height={31}
          rx={15.5}
          stroke="#17AFF0"
          shapeRendering="crispEdges"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default WalletConnectCircle;
