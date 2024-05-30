import { FC } from "react";

interface MenuProps {
     size?: number,
     color?: string
}

const MenuIcon: FC<MenuProps> = ({ size, color }) => (
     <svg
          style={{
               width: size ? `${size}px` : '100px',
               height: 'auto'
          }}
          viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 17H19" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12H19" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 7H19" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

)

export default MenuIcon;