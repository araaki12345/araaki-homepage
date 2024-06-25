import React from 'react';
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
      <h1 className="text-4xl font-bold mb-12 text-center">MY DEVICES</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {devices.map((device, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
              <img src={device.image} alt={device.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{device.name}</h2>
                <p className="text-gray-400 mb-4">{device.description}</p>
                <ul className="text-sm text-gray-300">
                  <li><span className="font-semibold">CPU:</span> {device.specs.processor}</li>
                  <li><span className="font-semibold">メモリ:</span> {device.specs.memory}</li>
                  <li><span className="font-semibold">ストレージ:</span> {device.specs.storage}</li>
                  <li><span className="font-semibold">GPU:</span> {device.specs.GPU}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </MainTemplate>
  );
}

export default DevicesPage;
