import { FC } from "react";

interface ArrowIconProps {
     size?: number;
     color?: string;
}

const ArrowIcon: FC<ArrowIconProps> = ({ size, color }) => (
     <svg style={{
          width: size ? `${size}px` : "100px",
          height: "auto",
     }} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="30" height="30" rx="5" fill="#D9D9D9" fill-opacity="0.26" />
          <path d="M8 22L22 8" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M14 8H22V16" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
     </svg>


)

export default ArrowIcon;