
import React, { ReactNode } from 'react';
import { Page } from '@/types';

interface MyLabLayoutProps {
  children: ReactNode;
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const MyLabLayout: React.FC<MyLabLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-[500px]">
      {children}
    </div>
  );
};

export default MyLabLayout;
