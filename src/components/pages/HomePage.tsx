import React from 'react';
import ProfileSection from '../organisms/ProfileSection';
import MainTemplate from '../templates/MainTemplate';

const HomePage: React.FC = () => {
  return (
    <MainTemplate>
      <ProfileSection />
    </MainTemplate>
  );
};

export default HomePage;
