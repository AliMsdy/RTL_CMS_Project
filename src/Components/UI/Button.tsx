import { ButtonHTMLAttributes, ReactNode } from "react";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  variant?: string;
};


const baseStyles = "rounded-lg text-white p-2";

function Button({ children, className,variant, ...props }: ButtonProps) {
  let bgColor= null
  switch (variant) {
    case "delete":
      bgColor = "bg-red-700"
      break;
    case "confirm":
      bgColor="bg-green-700"
      break
      case "reject":
        bgColor="bg-red-500"
        break
    default:
      bgColor="bg-custom-blue"
  }
  const classNameStyles = `${bgColor} ${baseStyles} ${className}`;
  return (
    <button className={classNameStyles} {...props}>
      {children}
    </button>
  );
}

export default Button;
