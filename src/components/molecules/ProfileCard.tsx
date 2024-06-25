import React from 'react';
import { motion } from 'framer-motion';

interface ProfileCardProps {
  name: string;
  title: string;
  affliation: string;
  description: string;
  avatarSrc: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, affliation, description, avatarSrc }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-64">
        <img src={avatarSrc} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-purple-400 mb-4">{title}</p>
        <p className="text-gray-400 mb-4">{affliation}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
