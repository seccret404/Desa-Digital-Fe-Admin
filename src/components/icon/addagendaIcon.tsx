import { FC } from "react";

interface AddAgendaProps {
     size?: number,
     color?: string
}

const AddAgendaIcon: FC<AddAgendaProps> = ({ size, color }) => (
     <svg style={{
          width: size ? `${size}px` : '100px',
          height: 'auto'
     }} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 13.5417V15.875C19 18.7034 19 20.1176 18.1213 20.9963C17.2426 21.875 15.8284 21.875 13 21.875H11C8.17157 21.875 6.75736 21.875 5.87868 20.9963C5 20.1176 5 18.7034 5 15.875V9.125C5 6.29657 5 4.88236 5.87868 4.00368C6.75736 3.125 8.17157 3.125 11 3.125H12" stroke={color} stroke-linecap="round" />
          <path d="M18 3.125L18 9.375" stroke={color} stroke-linecap="round" />
          <path d="M21 6.25L15 6.25" stroke={color} stroke-linecap="round" />
          <path d="M9 13.541L15 13.541" stroke={color} stroke-linecap="round" />
          <path d="M9 9.375L13 9.375" stroke={color} stroke-linecap="round" />
          <path d="M9 17.709L13 17.709" stroke={color} stroke-linecap="round" />
     </svg>

)

export default AddAgendaIcon;