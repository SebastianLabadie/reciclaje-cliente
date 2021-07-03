import React from 'react'
import { G, Path } from 'react-native-svg'
import { Icon, } from "native-base";

function StatisticsIcon({fillColor,size = 7}:any) {
    return (
        <Icon viewBox="0 0 512 512" size={size}>
          <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
            <Path
              d="m512 482h-30v-302h-91v302h-30v-182h-90v182h-30v-242h-90v242h-30v-152h-91v152h-30v30h512z"
              fill={fillColor}
            />
            <Path
              d="m512 120v-120h-121v30h69.789l-144.789 143.789-120-120-191.605 190.606 21.21 21.21 170.395-169.394 120 120 166-165v68.789z"
              fill={fillColor}
            />
            
          </G>
        </Icon>
    )
}


export default StatisticsIcon