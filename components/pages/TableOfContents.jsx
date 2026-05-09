export function TableOfContents({ setCurrentPage }) {
  const contents = [
    { num: '01', title: 'Acknowledgement', pageId: 'acknowledgement' },
    { num: '02', title: 'Student Trainee Prayer', pageId: 'prayer' },
    { num: '03', title: 'Personal Philosophy', pageId: 'philosophy' },
    { num: '04', title: 'Career Plan', pageId: 'career-plan' },
    {
      num: '05',
      title: 'Chapter I — Introduction',
      pageId: 'introduction',
      children: [
        { title: 'A. Importance of Internship', pageId: 'intro-importance' },
        { title: 'B. Objectives of Internship', pageId: 'intro-objectives' },
        { title: 'C. Time and Place', pageId: 'intro-time-place' },
      ],
    },
    {
      num: '06',
      title: 'Chapter II — Company Profile',
      pageId: 'company-profile',
      children: [
        { title: 'Company Overview', pageId: 'company-overview' },
        { title: '1. Nature of Agency', pageId: 'company-nature' },
        { title: '2. Mission / Vision / Goal', pageId: 'company-mission' },
        { title: '3. History / Background', pageId: 'company-history' },
        { title: '4. Organizational Structure', pageId: 'company-structure' },
      ],
    },
    {
      num: '07',
      title: 'Chapter III — Work Experiences',
      pageId: 'work-experience',
      children: [
        { title: '1. Weekly Reports', pageId: 'work-weekly' },
        { title: '2. Daily Time Record', pageId: 'work-timerecord' },
        { title: '3. Progress Report', pageId: 'work-progress' },
        { title: '4. Analysis Report', pageId: 'work-analysis' },
      ],
    },
    { num: '08', title: 'Chapter IV — Assessment', pageId: 'assessment' },
    { num: '09', title: 'V. Appendices', pageId: 'appendices' },
  ];

  const handleNavigate = (pageId) => {
    if (setCurrentPage) setCurrentPage(pageId);
  };

  return (
    <div className='min-h-screen p-4 sm:p-6 md:p-8 bg-white'>
      <div className='max-w-4xl mx-auto'>
        {/* Breadcrumb */}
        <div className='text-sm text-pink-500 mb-2'>
          <span className='text-pink-600'>E-Portfolio</span>
          <span className='mx-2'>›</span>
          <span>Table of Contents</span>
        </div>

        {/* Header */}
        <div className='flex items-center gap-3 mb-8'>
          <div className='w-10 h-10 rounded-lg bg-pink-600 flex items-center justify-center shrink-0'>
            <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
              <path d='M4 6h16M4 10h16M4 14h10M4 18h7' />
            </svg>
          </div>
          <div>
            <p className='text-xs font-semibold text-pink-500 uppercase tracking-wider'>Navigation</p>
            <h1 className='text-2xl sm:text-3xl font-bold text-pink-900'>Table of Contents</h1>
          </div>
        </div>

        {/* Contents List */}
        <div className='bg-pink-50/50 border border-pink-100 rounded-2xl overflow-hidden'>
          {contents.map((item, idx) => (
            <div key={idx} className={idx !== 0 ? 'border-t border-pink-100' : ''}>
              {/* Main row */}
              <button
                onClick={() => handleNavigate(item.pageId)}
                className='w-full flex items-center justify-between px-5 py-4 hover:bg-pink-100/60 transition-colors group text-left'
              >
                <div className='flex items-center gap-4'>
                  <span className='text-xs font-bold text-pink-400 w-6 shrink-0'>{item.num}</span>
                  <span className='text-sm sm:text-base font-semibold text-pink-900 group-hover:text-pink-600 transition-colors'>
                    {item.title}
                  </span>
                </div>
                <svg
                  className='w-4 h-4 text-pink-400 group-hover:text-pink-600 shrink-0 transition-colors'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M8 5l8 7-8 7' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </button>

              {/* Sub-items */}
              {item.children && (
                <div className='bg-white border-t border-pink-100'>
                  {item.children.map((child, cidx) => (
                    <button
                      key={cidx}
                      onClick={() => handleNavigate(child.pageId)}
                      className='w-full flex items-center justify-between px-5 py-3 pl-14 hover:bg-pink-50 transition-colors group text-left border-t border-pink-50 first:border-t-0'
                    >
                      <span className='text-xs sm:text-sm text-pink-600 group-hover:text-pink-900 transition-colors'>
                        {child.title}
                      </span>
                      <svg
                        className='w-3 h-3 text-pink-300 group-hover:text-pink-500 shrink-0 transition-colors'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        viewBox='0 0 24 24'
                      >
                        <path d='M9 18l6-6-6-6' strokeLinecap='round' strokeLinejoin='round' />
                      </svg>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className='text-center pt-6 pb-8'>
          <p className='text-xs text-pink-400'>
            © 2026 OJT E-Portfolio · <span className='text-pink-600'>May Ann O. Capistrano</span>
          </p>
        </div>
      </div>
    </div>
  );
}
