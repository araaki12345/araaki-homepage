import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MainTemplate from '../templates/MainTemplate';
import mainPc from "@/assets/MainPC1.jpg";
import laptop from "@/assets/Laptop1.jpg";
import server from "@/assets/Server.jpg";
import fileServer from "@/assets/FileServer.jpg";
import junkPcImage from "@/assets/junkpc.jpg";

const devices = [
  {
    name: "メインPC(デスクトップ)",
    description: "メインで使ってるPC",
    image: mainPc,
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
    image: laptop,
    specs: {
      processor: "Core i7-12700H",
      memory: "32GB",
      storage: "SSD 1TB",
      GPU: "RTX 3060 Laptop"
    }
  },
  {
    name: "サーバー(デスクトップ)",
    description: "SU-CRAFTのサーバーとして使っているPC",
    image: server,
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
    image: fileServer,
    specs: {
      processor: "Intel celeron G3900",
      memory: "32GB",
      storage: "SSD 256GB + 1TB + 2TB, HDD 2TB", 
      GPU: "Palit RTX 4070 SUPER"
    }
  },
  {
    name: "ジャンクPC(デスクトップ?)",
    description: "なんとなく組んで文鎮化しているPC、ケースはない",
    image: junkPcImage,
    specs: {
      processor: "Intel Core2 Quad Q9650",
      memory: "8GB",
      storage: "SSD 500GB", 
      GPU: "Unknown GTX 1050"
    }
  }
];

const DevicesPage: React.FC = () => {
  return (
    <MainTemplate>
    <h1 className="text-2xl　text-3xl font-bold　mb-6">DEVICES</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {devices.map((device, index) => (
        <Card key={index} className="dark:bg-gray-800 dark:text-white">
          <CardHeader>
           <h2 className="text-xl font-bold">{device.name}</h2>
          </CardHeader>
          <CardContent>
          <img src={device.image} alt={device.name} className="w-full h-48 object-cover mb-4 rounded" />
            <p className="text-sm　mb-2"><strong>説明:</strong> {device.description}</p>
            <ul className="list-disc pl-5　text-sm">
              <li><strong>CPU:</strong> {device.specs.processor}</li>
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
