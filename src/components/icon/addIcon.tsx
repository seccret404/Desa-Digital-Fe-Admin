import { FC } from "react";

interface AddProps {
     size?: number,
     color?: string
}

const AddIcon: FC<AddProps> = ({ size, color }) => (
     <svg style={{
          width: size ? `${size}px` : '100px',
          height: 'auto'
     }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M6 12H18" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     <path d="M12 18L12 6" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>

)

export default AddIcon;