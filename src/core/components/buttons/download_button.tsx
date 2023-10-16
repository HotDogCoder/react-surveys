import { colors } from '@mui/material';
import React from 'react';

interface CustomButtonProps {
  id?: string;
  colors: string[];
  icon: React.ReactElement;
  label: string;
  onClick: () => void;
  file_path: string;
  file_name: string;
}

export const DownloadButton = ({ file_path, file_name, id, icon, label, onClick, colors = ['blue','blue'] }: CustomButtonProps) => {
  return (
    <a id={id? id : ''} target='_blank' className={`flex px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`} href={file_path} download={file_name}>
      {icon} {label}
    </a>
    
  );
};