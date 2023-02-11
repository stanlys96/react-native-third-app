import * as React from "react"
import Svg, { Rect, Mask, G, Path, Circle } from "react-native-svg"

function SvgComponent(props) {
  return (<Svg width= {23} height= {24} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Rect x= {0.5} y= {4.28564} width= {22} height= {15.4286} rx= {3.5} fill="#fff" stroke="#F5F5F5" />
    <Mask id="a" style= {{ maskType:"alpha" }} maskUnits="userSpaceOnUse" x= {0} y= {3} width= {23} height= {18}>
        <Rect x= {0.5} y= {4.28564} width= {22} height= {15.4286} rx= {3.5} fill="#fff" stroke="#fff" />
    </Mask>
    <G mask="url(#a)">
        <Path fillRule="evenodd" clipRule="evenodd" d="M0 9.262h23V3.786H0v5.476z" fill="#FFA44A" />
        <Path fillRule="evenodd" clipRule="evenodd" d="M0 20.214h23v-5.476H0v5.476z" fill="#1A9F0B" />
        <Circle cx= {11.5} cy= {12} r= {2.30952} fill="#181A93" fillOpacity= {0.15} stroke="#181A93" strokeWidth= {1.33333} />
        <Circle cx= {11.5} cy= {12} r= {0.547619} fill="#181A93" />
    </G>
</Svg>
  )
}

export default SvgComponent