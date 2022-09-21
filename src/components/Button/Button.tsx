import { ReactNode } from "react";

interface ButtonProps {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
