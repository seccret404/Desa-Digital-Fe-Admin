import { FC } from "react";

interface DataDesaProps {
     size?: number,
     color?: string
}

const DataDesaIcon: FC<DataDesaProps> = ({ size, color }) => (
     <svg style={{
          width: size ? `${size}px` : '100px',
          height: 'auto'
     }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C4.44772 3 4 3.44771 4 4V10.1649C4 17.5464 10.2742 20.3516 11.7098 20.8968C11.9 20.9691 12.1 20.9691 12.2902 20.8968C13.7258 20.3516 20 17.5464 20 10.1649V4C20 3.44772 19.5523 3 19 3Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M15 9L11 13L9 11" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
     </svg>

)

export default DataDesaIcon;