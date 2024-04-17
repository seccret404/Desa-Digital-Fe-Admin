import { FC } from "react";

interface AgendaProps {
     size?: number,
     color?: string
}

const AgendaIcon: FC<AgendaProps> = ({ size, color }) => (
     <svg style={{
          width: size ? `${size}px` : '100px',
          height: 'auto'
     }} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 8.33398H20" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M19 4.16602H5C4.44772 4.16602 4 4.63239 4 5.20768V19.791C4 20.3663 4.44772 20.8327 5 20.8327H19C19.5523 20.8327 20 20.3663 20 19.791V5.20768C20 4.63239 19.5523 4.16602 19 4.16602Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M15 12.5L11 16.6667L9 14.5833" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 2.08398V4.16732" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 2.08398V4.16732" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
     </svg>

)

export default AgendaIcon;