import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MainTemplate from '../templates/MainTemplate';

const devices = [
  {
    name: "メインPC(デスクトップ)",
    description: "メインで使ってるPC",
    image: "path/to/macbook.jpg",
    specs: {
      processor: "AMD Ryzen9 7900X",
      memory: "32GB",
      storage: "SSD 256GB + 1TB + 2TB, HDD 2TB", 
      GPU: "Palit RTX 4070 SUPER"
    }
  },
  {
    name: "Raytrek R5-AA6(ノートPC)",
    description: "大学などで使うPC",
    image: "path/to/iphone.jpg",
    specs: {
      processor: "Core i7-12700H",
      memory: "32GB",
      storage: "1TB",
      GPU: "RTX 3060 Laptop"
    }
  },
  {
    name: "サーバー(デスクトップ)",
    description: "SU-CRAFTのサーバーとして使っているPC",
    image: "path/to/macbook.jpg",
    specs: {
      processor: "Intel core i5 10400",
      memory: "32GB",
      storage: "SSD 512GB + HDD 4TB", 
      GPU: "内蔵GPU"
    }
  },
  {
    name: "家庭用サーバー(デスクトップ)",
    description: "家庭用ファイルサーバー兼マイクラサーバーのデータ保管用サーバー",
    image: "path/to/macbook.jpg",
    specs: {
      processor: "Intel celeron G3900",
      memory: "32GB",
      storage: "SSD 256GB + 1TB + 2TB, HDD 2TB", 
      GPU: "Palit RTX 4070 SUPER"
    }
  },
];

const DevicesPage: React.FC = () => {
  return (
    <MainTemplate>
    <div className="space-y-8">
      {devices.map((device, index) => (
        <Card key={index} className="dark:bg-gray-800 dark:text-white">
          <CardHeader>
            <h2>{device.name}</h2>
          </CardHeader>
          <CardContent>
            <img src={device.image} alt={device.name} className="mb-4" />
            <p>{device.description}</p>
            <ul className="list-disc pl-5">
              <li><strong>プロセッサ:</strong> {device.specs.processor}</li>
              <li><strong>メモリ:</strong> {device.specs.memory}</li>
              <li><strong>ストレージ:</strong> {device.specs.storage}</li>
              <li><strong>GPU:</strong> {device.specs.GPU}</li>
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
    </MainTemplate>
  );
}

export default DevicesPage;