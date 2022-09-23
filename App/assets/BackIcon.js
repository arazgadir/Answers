import React from "react";
import Svg, { Path } from 'react-native-svg';

export const BackIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/Svg"
      width="18"
      height="15"
      fill="none"
      viewBox="0 0 18 15"
    >
      <Path
        stroke="#201000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1.25 7.274h15M7.3 13.299L1.25 7.275 7.3 1.25"
      ></Path>
    </Svg>
  );
}
