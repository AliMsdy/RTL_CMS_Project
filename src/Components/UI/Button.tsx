import { ButtonHTMLAttributes, ReactNode } from "react";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

const baseStyles = "bg-custom-blue rounded-lg text-white p-2";

function Button({ children, className, ...props }: ButtonProps) {
  const classNameStyles = `${baseStyles} ${className}`;
  return (
    <button className={classNameStyles} {...props}>
      {children}
    </button>
  );
}

export default Button;
