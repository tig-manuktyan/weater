import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const IDate = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            d="M2 20c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0 1 0 18V4c0-.55.196-1.02.587-1.412A1.927 1.927 0 0 1 2 2h1V0h2v2h8V0h2v2h1c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v14c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 16 20H2Zm0-2h14V8H2v10Z"
            fill="#F8F8F8"
        />
    </Svg>
)

