import { ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border: 0;
  padding: 8px 14px;
  transition: all 0.3s;

  ${({ theme, variant }) => ({
    backgroundColor: theme.colors[variant].main,
    color: theme.colors[variant].text,
    ":hover": {
      backgroundColor: theme.colors[variant].light,
    },
    ":focus": {
      backgroundColor: theme.colors[variant].dark,
    },
  })}
`;

interface ButtonProps {
  variant?: "primary" | "accent";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}
