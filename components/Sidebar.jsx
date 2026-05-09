import { useState } from 'react';
import {
  ChevronDown,
  Home,
  BookOpen,
  Building2,
  Briefcase,
  BarChart3,
  FileText,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Sidebar({ currentPage, setCurrentPage, isMobile = false, onClose }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: false,
    company: false,
    workExp: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const topItems = [
    { id: 'title-page', label: 'Title Page', icon: Home },
  ];

  const sections = [
    {
      id: 'introduction',
      label: 'I. Introduction',
      icon: BookOpen,
      subsections: [
        { id: 'intro-importance', label: 'A. Importance of Internship' },
        { id: 'intro-objectives', label: 'B. Objectives of Internship' },
        { id: 'intro-time-place', label: 'C. Time and Place' },
      ],
    },
    {
      id: 'company',
      label: 'II. Company Profile',
      icon: Building2,
      subsections: [
        { id: 'company-overview', label: 'Company Overview' },
        { id: 'company-nature', label: '1. Nature of Agency' },
        { id: 'company-mission', label: '2. Mission / Vision / Goal' },
        { id: 'company-history', label: '3. History / Background' },
        { id: 'company-structure', label: '4. Organizational Structure' },
      ],
    },
    {
      id: 'workExp',
      label: 'III. Work Experiences',
      icon: Briefcase,
      subsections: [
        { id: 'work-weekly', label: '1. Weekly Reports' },
        { id: 'work-timerecord', label: '2. Daily Time Record' },
        { id: 'work-progress', label: '3. Progress Report' },
        { id: 'work-analysis', label: '4. Analysis Report' },
      ],
    },
    {
      id: 'assessment',
      label: 'IV. Assessment',
      icon: BarChart3,
      subsections: [],
    },
    {
      id: 'appendices',
      label: 'V. Appendices',
      icon: FileText,
      subsections: [],
    },
  ];

  return (
    <aside className={`${isMobile ? 'w-64' : 'w-80'} h-screen bg-white border-r border-pink-200 flex flex-col`}>
      {/* Header */}
      <div className='p-4 sm:p-6 border-b border-pink-200 flex items-center justify-between shrink-0'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-lg bg-linear-to-br from-pink-500 to-pink-700 flex items-center justify-center'>
            <FileText className='w-6 h-6 text-white' />
          </div>
          <div>
            <h1 className='text-lg font-bold text-pink-900'>E-Portfolio</h1>
            <p className='text-xs text-pink-500'>OJT Journey</p>
          </div>
        </div>
        {isMobile && (
          <button
            onClick={onClose}
            className='p-2 hover:bg-pink-50 rounded-lg transition-colors cursor-pointer'
          >
            <X className='w-5 h-5 text-pink-600' />
          </button>
        )}
      </div>

      {/* Student Profile */}
      <div className='p-3 mx-3 my-3 rounded-lg sm:rounded-xl bg-pink-50 border border-pink-200 shrink-0'>
        <div className='flex flex-col items-center text-center gap-2 sm:gap-3'>
          <img 
            src="/profi.jpg" 
            alt="May Ann O. Capistrano"
            className='w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover border-2 border-pink-500'
          />
          <div>
            <p className='text-xs sm:text-sm font-semibold text-pink-900'>May Ann O. Capistrano</p>
            <p className='text-xs text-pink-500'>OJT Student</p>
          </div>
        </div>
      </div>

      {/* Navigation - Scrollable */}
      <div className='flex-1 px-3 space-y-1 overflow-y-auto min-h-0'>
        <p className='text-xs font-semibold text-pink-600 px-2 py-2 uppercase tracking-wider'>
          E-PORTFOLIO CONTENTS
        </p>

        {/* Top Level Items */}
        {topItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all cursor-pointer ${
                currentPage === item.id
                  ? 'bg-pink-600 text-white'
                  : 'text-pink-700 hover:bg-pink-600 hover:text-white'
              }`}
            >
              <Icon className='w-4 h-4 shrink-0' />
              <span className='text-sm font-medium'>{item.label}</span>
            </button>
          );
        })}

        <p className='text-xs font-semibold text-pink-600 px-2 py-3 uppercase tracking-wider mt-4'>
          MAIN SECTIONS
        </p>

        {/* Sectioned Items */}
        {sections.map((section) => (
          <div key={section.id}>
            <button
              onClick={() => {
                if (section.id === 'introduction') {
                  // For introduction, just set the page without expanding
                  setCurrentPage(section.id);
                } else {
                  // For other sections, set page and toggle expansion
                  setCurrentPage(section.id);
                  if (section.subsections.length > 0) {
                    toggleSection(section.id);
                  }
                }
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all cursor-pointer ${
                currentPage === section.id
                  ? 'bg-pink-600 text-white'
                  : 'text-pink-700 hover:bg-pink-600 hover:text-white'
              }`}
            >
              <div className='flex items-center gap-3'>
                <section.icon className='w-4 h-4 shrink-0' />
                <span className='text-sm font-medium'>{section.label}</span>
              </div>
              {section.subsections.length > 0 && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform shrink-0 ${
                    expandedSections[section.id] ? 'rotate-180' : ''
                  }`}
                />
              )}
            </button>

            {/* Subsections */}
            {section.subsections.length > 0 && expandedSections[section.id] && (
              <div className='ml-6 mt-1 space-y-1 border-l border-pink-300 pl-2'>
                {section.subsections.map((subsection) => (
                  <button
                    key={subsection.id}
                    onClick={() => setCurrentPage(subsection.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all cursor-pointer ${
                      currentPage === subsection.id
                        ? 'bg-pink-100 text-pink-600'
                        : 'text-pink-600 hover:text-pink-900 hover:bg-pink-50'
                    }`}
                  >
                    {subsection.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className='p-4 border-t border-pink-200 shrink-0'>
        <p className='text-xs text-pink-500 text-center'>
          E-Portfolio | May Ann O. Capistrano
        </p>
      </div>
    </aside>
  );
}
