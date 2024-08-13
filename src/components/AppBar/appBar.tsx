import React from 'react';
import { Bell, MessagesSquare } from 'lucide-react';

export interface HeaderComponentProps {
  leftIcons?: React.ReactNode[];
  centerTexts: { text: string; style?: React.CSSProperties }[];
  children?: React.ReactNode;
}

  const MyAppBar: React.FC<HeaderComponentProps> = ({ leftIcons, centerTexts }) => {

  return (
    <div className="bg-gray-800 text-white">
      <div className="flex items-center justify-start p-2">
        <div className="flex space-x-3 w-1/3">
          {/* Uncomment this if you want to use the leftIcons prop */}
          {/* {leftIcons?.map((icon, index) => (
            <button key={index} className="text-white">
              {icon}
            </button>
          ))} */}
          <Bell />
          <MessagesSquare />
        </div>
        <div className="flex flex-col items-center">
          {centerTexts.map((item, index) => (
            <p key={index} style={item.style} className="text-lg">
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MyAppBar