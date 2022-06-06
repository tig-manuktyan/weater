import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const IGoBack = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path d="m16.8 6-6 6 6 6-1.2 2.4L7.2 12l8.4-8.4L16.8 6Z" fill="#F8F8F8" />
    </Svg>
)

