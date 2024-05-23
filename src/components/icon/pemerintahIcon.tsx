import { FC } from "react";

interface PemerintahProps {
     size?: number,
     color?: string
}

const PemerintahIcon: FC<PemerintahProps> = ({ size, color }) => (
     <svg style={{
          width: size ? `${size}px` : '100px',
          height: 'auto'
     }} viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
     <path d="M21 8L12 2L3 8L12 14L21 8Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M21 12L12 18L3 12" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M21 16L12 22L3 16" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>

)

export default PemerintahIcon;