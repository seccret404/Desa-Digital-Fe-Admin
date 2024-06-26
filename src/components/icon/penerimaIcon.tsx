import { FC } from "react";

interface PenerimaProps {
     size?: number,
     color?: string
}

const PenerimaIcon: FC<PenerimaProps> = ({ size, color }) => (
     <svg style={{
          width: size ? `${size}px` : '100px',
          height: 'auto'
     }} viewBox="0 0 24 24" fill="none"   xmlns="http://www.w3.org/2000/svg">
     <path d="M3 19C3 16.7909 5.68629 15 9 15C12.3137 15 15 16.7909 15 19" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M21 10L17 14L15 12" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>
     

)

export default PenerimaIcon;

