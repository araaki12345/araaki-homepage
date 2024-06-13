import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MainTemplate from '../templates/MainTemplate';
const creations = [
  { name: "SU-CRAFT", description: "静大生のマインクラフトサーバー", link: "#" },
  { name: "静大マイクラ認証bot", description: "静大マイクラの認証に使うdiscord bot", link: "#" }
];

const WorksPage: React.FC = () => {
  return (
    <MainTemplate>
    <div className="space-y-8">
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
