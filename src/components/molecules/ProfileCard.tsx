import React from 'react';
import CustomAvatar from '../atoms/Avatar';
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  avatarSrc: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, description, avatarSrc }) => {
  return (
    <Card>
      <CardHeader>
        <CustomAvatar src={avatarSrc} alt={`${name}'s avatar`} />
        <h2>{name}</h2>
        <p>{title}</p>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
