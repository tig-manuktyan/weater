import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const ILocation = (props: SvgProps) => (
    <Svg width={24} height={24} fill="none" {...props}>
        <Path
            d="M7 18.003a29.779 29.779 0 0 1-3.5-3.53C1.9 12.56 0 9.716 0 7.003a7 7 0 0 1 11.952-4.95A6.955 6.955 0 0 1 14 7.003c0 2.713-1.9 5.559-3.5 7.47a29.78 29.78 0 0 1-3.5 3.53Zm0-14a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
            fill="#fff"
        />
    </Svg>
);
