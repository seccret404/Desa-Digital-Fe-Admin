import { FC } from "react";

interface ArrowRightProps {
     size?: number,
     color?: string
}

const ArrowRIghtIcon: FC<ArrowRightProps> = ({ size, color }) => (
     <svg
          style={{
               width: size ? `${size}px` : "100px",
               height: "auto",
          }}
          viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L8 8L1 15" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
     </svg>

)

export default ArrowRIghtIcon;