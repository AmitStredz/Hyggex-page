import React from 'react';

interface ContentDisplayProps {
  title: string;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ title }) => {
  return (
    <div className="bg-gray-300 p-4 m-2">
      <h2 className="text-2xl font-bold">{title}</h2>
      {/* Content will be displayed here */}
    </div>
  );
};

export default ContentDisplay;
