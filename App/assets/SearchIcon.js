import React from "react";
import Svg, { Path } from 'react-native-svg';

 
export const SearchIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/Svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <Path
        fill="#201000"
        fillRule="evenodd"
        d="M0 8.67C0 3.882 3.84 0 8.578 0c2.275 0 4.456.913 6.065 2.54a8.717 8.717 0 012.512 6.13c0 4.788-3.84 8.67-8.577 8.67C3.84 17.34 0 13.458 0 8.67zm17.013 6.984l2.555 2.062h.044c.517.523.517 1.37 0 1.892a1.314 1.314 0 01-1.871 0l-2.12-2.43a1.082 1.082 0 010-1.524.986.986 0 011.392 0z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
}
