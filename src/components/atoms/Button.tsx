import React from 'react';
import { Button as ShadButton } from "@/components/ui/button";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, ariaLabel }) => {
  return <ShadButton onClick={onClick} aria-label={ariaLabel} className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition-colors duration-300">{children}</ShadButton>;
};

export default Button;
