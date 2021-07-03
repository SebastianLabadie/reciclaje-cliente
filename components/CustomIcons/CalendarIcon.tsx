import React from 'react'
import { G, Path } from 'react-native-svg'
import {  Icon } from "native-base";

function CalendarIcon({fillColor,size = 8}:any) {
    return (
        <Icon viewBox="0 0 512 512" size={size} ml={1}>
          <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
            <Path
              d="m352 432c-4.222656 0-8.320312-1.683594-11.308594-4.691406l-37.332031-37.335938c-6.25-6.25-6.25-16.382812 0-22.632812s16.382813-6.25 22.636719 0l25.191406 25.171875 58.09375-67.007813c5.78125-6.675781 15.914062-7.402344 22.570312-1.621094 6.675782 5.78125 7.402344 15.894532 1.597657 22.570313l-69.332031 80c-2.902344 3.347656-7.082032 5.355469-11.519532 5.503906-.214844.042969-.40625.042969-.597656.042969zm0 0"
              fill={fillColor}
            />
            <Path
              d="m181.332031 405.332031h-122.664062c-32.363281 0-58.667969-26.300781-58.667969-58.664062v-245.335938c0-32.363281 26.304688-58.664062 58.667969-58.664062h309.332031c32.363281 0 58.667969 26.300781 58.667969 58.664062v85.335938c0 8.832031-7.167969 16-16 16s-16-7.148438-16-16v-85.335938c0-14.699219-11.96875-26.664062-26.667969-26.664062h-309.332031c-14.699219 0-26.667969 11.964843-26.667969 26.664062v245.335938c0 14.699219 11.96875 26.664062 26.667969 26.664062h122.664062c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
              fill={fillColor}
            />
            <Path
              d="m410.667969 160h-394.667969c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h394.667969c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
              fill={fillColor}
            />
            <Path
              d="m101.332031 117.332031c-8.832031 0-16-7.167969-16-16v-85.332031c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v85.332031c0 8.832031-7.167969 16-16 16zm0 0"
              fill={fillColor}
            />
            <Path
              d="m325.332031 117.332031c-8.832031 0-16-7.167969-16-16v-85.332031c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v85.332031c0 8.832031-7.167969 16-16 16zm0 0"
              fill={fillColor}
            />
            <Path
              d="m373.332031 512c-76.457031 0-138.664062-62.207031-138.664062-138.667969 0-76.457031 62.207031-138.664062 138.664062-138.664062 76.460938 0 138.667969 62.207031 138.667969 138.664062 0 76.460938-62.207031 138.667969-138.667969 138.667969zm0-245.332031c-58.816406 0-106.664062 47.847656-106.664062 106.664062 0 58.816407 47.847656 106.667969 106.664062 106.667969 58.816407 0 106.667969-47.851562 106.667969-106.667969 0-58.816406-47.851562-106.664062-106.667969-106.664062zm0 0"
              fill={fillColor}
            />
          </G>
        </Icon>
    )
}

export default CalendarIcon