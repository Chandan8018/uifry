import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store'; // Adjust the import according to your file structure

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themeState = useSelector((state: RootState) => state.theme);
  const { theme } = themeState;

  return (
    <div className={theme}>
      <div className="bg-[#BEBFC3] text-black dark:bg-black dark:text-white min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default ThemeProvider;
