import React from "react";
import Svg, { Path, Rect } from 'react-native-svg';

export const AddIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/Svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
    >
      <Rect width="48" height="48" fill="#564AE2" rx="24"></Rect>
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M24.042 18v11.842M30.083 23.922H18"
      ></Path>
    </Svg>
  );
}