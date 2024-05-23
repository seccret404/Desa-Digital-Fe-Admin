import { FC } from "react";

interface DusunProps {
     size?: number,
     color?: string
}

const DusunIcon: FC<DusunProps> = ({ size, color }) => (
     <svg style={{
          width: size ? `${size}px` : '100px',
          height: 'auto'
     }} viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
     <path d="M2 20H22" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M19.6683 12.6431L15.1683 8.60035C14.7882 8.25887 14.2118 8.25887 13.8317 8.60035L9.33169 12.6431C9.12058 12.8328 9 13.1032 9 13.387V19.9999H19C19.5523 19.9999 20 19.5522 20 18.9999V13.387C20 13.1032 19.8794 12.8328 19.6683 12.6431Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M9 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4H11C11.5523 4 12 4.44772 12 5V10" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>

)

export default DusunIcon;