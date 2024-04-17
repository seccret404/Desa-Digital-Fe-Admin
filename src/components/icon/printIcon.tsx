import { FC } from "react";

interface PrintProps {
     color?: string;
     size?: number;
}

const PrintIcon: FC<PrintProps> = ({ size, color }) => (
     <svg style={{
          width: size ? `${size}px` : '100px',
          height: 'auto'
     }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 7H6V3H18V7ZM18 12.5C18.2833 12.5 18.521 12.404 18.713 12.212C18.905 12.02 19.0007 11.7827 19 11.5C19 11.2167 18.904 10.9793 18.712 10.788C18.52 10.5967 18.2827 10.5007 18 10.5C17.7167 10.5 17.4793 10.596 17.288 10.788C17.0967 10.98 17.0007 11.2173 17 11.5C17 11.7833 17.096 12.021 17.288 12.213C17.48 12.405 17.7173 12.5007 18 12.5ZM16 19V15H8V19H16ZM18 21H6V17H2V11C2 10.15 2.29167 9.43767 2.875 8.863C3.45833 8.28833 4.16667 8.00067 5 8H19C19.85 8 20.5627 8.28767 21.138 8.863C21.7133 9.43833 22.0007 10.1507 22 11V17H18V21Z" fill={color} />
     </svg>

)

export default PrintIcon