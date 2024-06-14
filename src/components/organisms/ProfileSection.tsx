import React from 'react';
import ProfileCard from '../molecules/ProfileCard';
import SocialLink from '../molecules/SocialLink';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import profileImage from '@/assets/Profile.jpg';

const ProfileSection: React.FC = () => {
  return (
    <div className="profile-section">
      <ProfileCard
        name="諸岡 成(araaki)"
        title="@cinebenchsuki"
        affliation='所属:静岡大学情報学部情報社会学科'
        description="ジャンクPCなどのガジェット系が大好物です。最近はOSINTに興味があります。"
        avatarSrc={profileImage}
      />
      <div className="social-links">
        <SocialLink href="https://x.com/cinebenchsuki" icon={FaTwitter} />
        <SocialLink href="https://instagram.com/araaki12345" icon={FaInstagram} />
        <SocialLink href="https://github.com/araaki12345" icon={FaGithub} />
      </div>
    </div>
  );
};

export default ProfileSection;
