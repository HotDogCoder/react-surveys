import { colors } from '@mui/material';
import { type } from 'os';
import React from 'react';

interface CustomButtonProps {
  id?: string;
  colors: string[];
  icon: React.ReactElement;
  label: string;
  type?: 'button' | 'submit' | 'reset';
  onClick: () => void;
}

export const CustomButton = ({ id, icon, label, type="button", onClick, colors = ['blue','blue'] }: CustomButtonProps) => {
  return (
    <button
    id={id? id : ''}
    type={type}
    className={`dark:border-slate-700 dark:border-solid dark:border text-white dark:text-stone-700 dark:bg-slate-300 bg-blue-600 hover:bg-blue-700 flex items-center px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
    onClick={onClick}>
      <div className='p-1'>{icon}</div> <p className=''>{label}</p>
    </button>
  );
};