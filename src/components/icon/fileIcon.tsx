import { FC } from "react";

interface FileIconProps {
     size?: number;
     color?: string;
}

const FileIcon: FC<FileIconProps> = ({ size, color }) => (
     <svg style={{
          width: size ? `${size}px` : "100px",
          height: "auto",
     }} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 35H9.99998C9.07951 35 8.33332 34.2538 8.33332 33.3333L8.33331 6.66667C8.33331 5.74619 9.07951 5 9.99998 5L22.6051 5C23.0694 5 23.5126 5.19366 23.8281 5.53432L31.2229 13.5208C31.5082 13.8288 31.6667 14.2332 31.6667 14.6531L31.6667 33.3333C31.6667 34.2538 30.9205 35 30 35Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M31.6667 15L23.3334 15C22.4129 15 21.6667 14.2538 21.6667 13.3333L21.6667 5" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
     </svg>

)

export default FileIcon;