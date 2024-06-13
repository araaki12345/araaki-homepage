import React from 'react';
import { Button as ShadButton } from "@/components/ui/button";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <ShadButton onClick={onClick}>{children}</ShadButton>;
};

export default Button;
