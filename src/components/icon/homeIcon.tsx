import { FC } from "react";

interface HomeIconProps{
     size?:number;
     color?:string
}

const HomeIcon:  FC<HomeIconProps>=({size,color})=>(
     <svg style={{
          width:size? `${size}px`: '100px',
          height:'auto'
     }} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M16.6585 7.70116L9.6585 1.57616C9.28148 1.24626 8.71852 1.24626 8.3415 1.57616L1.3415 7.70116C1.12448 7.89105 1 8.16537 1 8.45374V17C1 17.5523 1.44772 18 2 18H6C6.55228 18 7 17.5523 7 17V13C7 12.4477 7.44772 12 8 12H10C10.5523 12 11 12.4477 11 13V17C11 17.5523 11.4477 18 12 18H16C16.5523 18 17 17.5523 17 17V8.45374C17 8.16537 16.8755 7.89105 16.6585 7.70116Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>
)

export default HomeIcon;