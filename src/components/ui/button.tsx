import { FC } from "react"

interface ButtonProps {
     width?: number,
     height?: number,
     children?: React.ReactNode;
     color?:string,
     rounded?:number,
     bgColor?:string

}

const Button: FC<ButtonProps> = ({ width, height, children,color,rounded,bgColor }) => (
     <button
          style={{
               height: height,
               width: width,
               color:color,
               backgroundColor:bgColor,
               borderRadius:rounded

          }}
     >
          {children}
     </button>
)

export default Button;