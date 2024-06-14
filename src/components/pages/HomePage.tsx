import React from 'react';
import ProfileSection from '../organisms/ProfileSection';
import MainTemplate from '../templates/MainTemplate';

const HomePage: React.FC = () => {
  return (
    
    <MainTemplate>
    <h1 className="text-3xl font-bold">HOME</h1>
      <ProfileSection />
    </MainTemplate>
  );
};

export default HomePage;
