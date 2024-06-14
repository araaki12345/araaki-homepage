import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MainTemplate from '../templates/MainTemplate';
const creations = [
  { name: "SU-CRAFT", description: "静大生のマインクラフトサーバー", link: "https://x.com/craft_su185" },
  { name: "静大マイクラ認証bot", description: "静大マイクラの認証に使うdiscord bot", link: "https://github.com/araaki12345/SUMinecraft-discord" },
  { name: "ラズパイ水温計", description: "水温をWebぺージとメールから見ることができる水温計(工事中)", link: "工事中" }
];

const WorksPage: React.FC = () => {
  return (
    <MainTemplate>
    <h1 className="text-4xl font-bold">WORKS</h1>
    <div className="space-y-8 font-bold">
      {creations.map((work, index) => (
        <Card key={index} className="dark:bg-gray-800 dark:text-white">
          <CardHeader>
            <h2>{work.name}</h2>
          </CardHeader>
          <CardContent>
            <p>{work.description}</p>
            <a href={work.link} className="text-blue-500 underline">詳細を見る</a>
          </CardContent>
        </Card>
      ))}
    </div>
    </MainTemplate>
  );
};

export default WorksPage;
