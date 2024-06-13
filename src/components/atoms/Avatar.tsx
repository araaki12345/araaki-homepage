import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface AvatarProps {
  src: string;
  alt: string;
}

const CustomAvatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{alt.charAt(0)}</AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
