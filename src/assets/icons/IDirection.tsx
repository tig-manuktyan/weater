import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const IDirection = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            d="M18 18v-6.75h-1.5v4.172L10.078 9 16.5 2.578V6.75H18V0h-6.75v1.5h4.172L9 7.922 2.578 1.5H6.75V0H0v6.75h1.5V2.578L7.922 9 1.5 15.422V11.25H0V18h6.75v-1.5H2.578L9 10.078l6.422 6.422H11.25V18H18Z"
            fill="#F8F8F8"
        />
    </Svg>
)

