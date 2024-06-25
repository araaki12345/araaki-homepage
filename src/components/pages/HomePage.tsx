import React from 'react';
import ProfileSection from '../organisms/ProfileSection';
import MainTemplate from '../templates/MainTemplate';

const HomePage: React.FC = () => {
  return (
    
    <MainTemplate>
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center break-words">HOME</h1>
      <ProfileSection />
    </MainTemplate>
  );
};

export default HomePage;
