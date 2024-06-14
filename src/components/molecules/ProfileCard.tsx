import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface ProfileCardProps {
  name: string;
  title: string;
  affliation:string;
  description: string;
  avatarSrc: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, affliation ,description, avatarSrc }) => {
  return (
    <div className="card p-4 rounded-lg shadow-md bg-gray-800">
      <div className="flex items-center space-x-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={avatarSrc} alt={`${name}'s avatar`} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-bold txt-white">{name}</h2>
          <p className="text-sm">{title}</p>
        </div>
      </div>
      <p className="mt-4">{affliation}</p>
      <p className="mt-4">{description}</p>
    </div>
  );
};

export default ProfileCard;
