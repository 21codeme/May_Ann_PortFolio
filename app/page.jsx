'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';
import { TitlePage } from '@/components/pages/TitlePage';
import { FrontPage } from '@/components/pages/FrontPage';
import { TableOfContents } from '@/components/pages/TableOfContents';
import { Acknowledgement } from '@/components/pages/Acknowledgement';
import { StudentPrayer } from '@/components/pages/StudentPrayer';
import { PersonalPhilosophy } from '@/components/pages/PersonalPhilosophy';
import { CareerPlan } from '@/components/pages/CareerPlan';
import { Introduction } from '@/components/pages/Introduction';
import { CompanyProfile } from '@/components/pages/CompanyProfile';
import { WorkExperience } from '@/components/pages/WorkExperience';
import { Assessment } from '@/components/pages/Assessment';
import { Appendices } from '@/components/pages/Appendices';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('title-page');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const contentRef = useRef(null);

  useEffect(() => {
    // Scroll content area to top on every page change
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'title-page':
        return <TitlePage setCurrentPage={setCurrentPage} />;
      case 'front-page':
        return <FrontPage />;
      case 'table-of-contents':
        return <TableOfContents setCurrentPage={setCurrentPage} />;
      case 'acknowledgement':
        return <Acknowledgement />;
      case 'prayer':
        return <StudentPrayer />;
      case 'philosophy':
        return <PersonalPhilosophy />;
      case 'career-plan':
        return <CareerPlan />;
      case 'introduction':
      case 'intro-importance':
      case 'intro-objectives':
      case 'intro-time-place':
        return <Introduction section={currentPage} />;
      case 'company-overview':
      case 'company-nature':
      case 'company-mission':
      case 'company-history':
      case 'company-structure':
      case 'company-profile':
      case 'company':
        return <CompanyProfile section={currentPage === 'company' ? 'company-overview' : currentPage} />;
      case 'work-weekly':
      case 'work-timerecord':
      case 'work-progress':
      case 'work-analysis':
      case 'work-experience':
      case 'workExp':
        return <WorkExperience section={currentPage === 'workExp' ? 'work-weekly' : currentPage} />;
      case 'assessment':
        return <Assessment />;
      case 'appendices':
        return <Appendices />;
      default:
        return <TitlePage />;
    }
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className='flex h-screen bg-white'>
      {/* Desktop Sidebar - hidden on mobile */}
      <div className='hidden md:block'>
        <Sidebar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          isMobile={false}
          onClose={handleCloseSidebar}
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className='fixed inset-0 bg-black/50 z-40 md:hidden'
          onClick={handleCloseSidebar}
        />
      )}

      <div 
        className={`fixed left-0 top-0 h-screen z-50 md:hidden transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          isMobile={true}
          onClose={handleCloseSidebar}
        />
      </div>

      <main className='flex-1 flex flex-col h-screen bg-white overflow-hidden'>
        {/* Header for mobile */}
        <div className='md:hidden flex items-center justify-between p-4 border-b border-pink-200 bg-white'>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className='p-2 hover:bg-pink-50 rounded-lg transition-colors'
          >
            <Menu className='w-6 h-6 text-pink-600' />
          </button>
          <h1 className='text-lg font-semibold text-pink-900'>Title Page</h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className='p-2 hover:bg-pink-50 rounded-lg transition-colors'
          >
            {isDarkMode ? (
              <Sun className='w-6 h-6 text-pink-600' />
            ) : (
              <Moon className='w-6 h-6 text-pink-400' />
            )}
          </button>
        </div>

        {/* Desktop Header */}
        <div className='hidden md:flex items-center justify-between p-4 border-b border-pink-200 bg-white'>
          <h1 className='text-xl font-semibold text-pink-900'>E-Portfolio</h1>
          <div className='flex items-center gap-4'>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className='p-2 hover:bg-pink-50 rounded-lg transition-colors'
            >
              {isDarkMode ? (
                <Sun className='w-6 h-6 text-pink-600' />
              ) : (
                <Moon className='w-6 h-6 text-pink-400' />
              )}
            </button>
            <div className='flex items-center gap-3 pl-4 border-l border-pink-200'>
              <div className='text-right'>
                <p className='text-sm font-semibold text-pink-900'>May Ann O. Capistrano</p>
                <p className='text-xs text-pink-500'>BSIT - 4th Year</p>
              </div>
              <div className='w-10 h-10 rounded-full bg-linear-to-br from-pink-500 to-pink-700 flex items-center justify-center text-white font-bold text-sm'>
                MC
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div ref={contentRef} className='flex-1 overflow-auto'>
          {renderPage()}
        </div>
      </main>
    </div>
  );
}
