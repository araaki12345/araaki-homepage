import React, { useEffect, useState } from 'react';
import logoImage from '@/assets/DALL·E-2024-06-14-13.25.png'; // ロゴ画像をインポート

const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000); // スプラッシュスクリーンを3秒間表示

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50">
      <div className="text-center">
        <img src={logoImage} alt="Logo" className="w-32 h-32 mb-4" />
        <h1 className="text-3xl font-bold">AKIRA MOROOKA</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
