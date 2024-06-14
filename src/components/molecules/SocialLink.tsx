import React from 'react';
import { IconType } from 'react-icons';

interface SocialLinkProps {
  href: string;
  icon: IconType;
  name: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: IconComponent }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <IconComponent size={24} />
        </a>
  );
};

export default SocialLink;
