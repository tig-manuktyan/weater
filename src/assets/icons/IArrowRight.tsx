import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const IArrowRight = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path d="m.2 15 6-6-6-6L1.4.6 9.8 9l-8.4 8.4L.2 15Z" fill="#687B92" />
    </Svg>
)

