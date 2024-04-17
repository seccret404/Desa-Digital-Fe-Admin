import { FC } from "react";

interface UserIconProps {
     size?: number;
     color?: string;
}

const UserIcon: FC<UserIconProps> = ({ size, color }) => (
     <svg style={{
          width: size ? `${size}px` : '100px',
          height: 'auto'
     }} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6667 33.3333C11.6667 30.5719 15.3976 28.3333 20 28.3333C24.6024 28.3333 28.3334 30.5719 28.3334 33.3333" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M30 23.7492C32.9432 24.5207 35 26.2828 35 28.3331" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10 23.7492C7.05683 24.5207 5 26.2828 5 28.3331" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M20 23.3333C22.7614 23.3333 25 21.0948 25 18.3333C25 15.5719 22.7614 13.3333 20 13.3333C17.2386 13.3333 15 15.5719 15 18.3333C15 21.0948 17.2386 23.3333 20 23.3333Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M30 17.0602C31.0229 16.1446 31.6666 14.8142 31.6666 13.3333C31.6666 10.5719 29.4281 8.33333 26.6666 8.33333C25.3861 8.33333 24.2179 8.81475 23.3333 9.60648" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9.99998 17.0602C8.97706 16.1446 8.33331 14.8142 8.33331 13.3333C8.33331 10.5719 10.5719 8.33333 13.3333 8.33333C14.6139 8.33333 15.7821 8.81475 16.6666 9.60648" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
     </svg>

)

export default UserIcon;