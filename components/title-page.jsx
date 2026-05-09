export function TitlePage() {
  return (
    <div className='min-h-screen p-4 sm:p-6 md:p-8'>
      <div className='max-w-4xl mx-auto'>
        {/* Breadcrumb */}
        <div className='text-sm text-slate-400 mb-8'>
          <span className='text-rose-700'>E-Portfolio</span>
          <span className='mx-2'>›</span>
          <span>Title Page</span>
        </div>

        {/* TITLE PAGE SECTION */}
        <div className='mb-16'>
          {/* Hero Section with Background Image */}
          <div className='relative mb-12 rounded-2xl overflow-hidden'>
            <div 
              className='absolute inset-0 bg-cover bg-center'
              style={{
                backgroundImage: 'url(/cover-image.jpg)',
              }}
            ></div>
            <div className='absolute inset-0 bg-black/40'></div>
            <div className='relative border border-rose-800/30 rounded-2xl p-6 sm:p-8 md:p-12 text-center'>
              <div className='mb-6'>
                <p className='text-rose-700 font-semibold uppercase tracking-widest'>
                  College of Arts, Science, and Technology
                </p>
              </div>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>
                ON-THE-JOB-TRAINING
              </h1>
              <p className='text-sm sm:text-base md:text-lg text-slate-300'>
                A complete documentation of the student&apos;s internship experience.
              </p>
            </div>
          </div>

          {/* Info Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6'>
            <div className='group'>
              <div className='h-full bg-slate-800/40 backdrop-blur border border-rose-800/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-rose-700/40 transition-all'>
                <p className='text-xs font-semibold text-rose-700 uppercase mb-1 sm:mb-2'>
                  Student Name
                </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white break-words'>Jan Rey C. Pa</p>
              </div>
            </div>

            <div className='group'>
              <div className='h-full bg-slate-800/40 backdrop-blur border border-rose-800/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-rose-700/40 transition-all'>
                <p className='text-xs font-semibold text-rose-700 uppercase mb-1 sm:mb-2'>
                  Student ID
                </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white break-words'>MA19-IT-01369</p>
              </div>
            </div>

            <div className='group'>
              <div className='h-full bg-slate-800/40 backdrop-blur border border-rose-800/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-rose-700/40 transition-all'>
                <p className='text-xs font-semibold text-rose-700 uppercase mb-1 sm:mb-2'>
                  Course & Year
                </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white break-words'>
                  Bachelor of Science in Information Technology, 4th Year
                </p>
              </div>
            </div>

            <div className='group'>
              <div className='h-full bg-slate-800/40 backdrop-blur border border-rose-800/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-rose-700/40 transition-all'>
                <p className='text-xs font-semibold text-rose-700 uppercase mb-1 sm:mb-2'>
                  Institution
                </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white break-words'>
                  Occidental Mindoro State College
                </p>
              </div>
            </div>

            <div className='group md:col-span-2'>
              <div className='h-full bg-slate-800/40 backdrop-blur border border-rose-800/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-rose-700/40 transition-all'>
                <p className='text-xs font-semibold text-rose-700 uppercase mb-1 sm:mb-2'>
                  Host Company
                </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white break-words'>
                  Occidental Mindoro State College, Sj Campus MIS Office
                </p>
              </div>
            </div>

            <div className='group md:col-span-2'>
              <div className='h-full bg-slate-800/40 backdrop-blur border border-rose-800/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-rose-700/40 transition-all'>
                <p className='text-xs font-semibold text-rose-700 uppercase mb-1 sm:mb-2'>
                  OJT Coordinator
                </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white break-words'>Leiza Linda L. Pelayo</p>
              </div>
            </div>
          </div>
        </div>

        {/* E-PORTFOLIO CONTENTS SECTION */}
        <div className='mb-16 scroll-mt-8'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-3'>E-Portfolio Contents</h2>
            <p className='text-sm sm:text-base text-slate-400'>Navigate through the comprehensive documentation of your internship experience</p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            {/* Chapter I */}
            <div className='group cursor-pointer'>
              <div className='bg-slate-800/40 backdrop-blur border border-slate-700 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-rose-800/50 transition-all h-full relative overflow-hidden'>
                <div className='absolute left-0 top-0 w-1 h-full bg-rose-800'></div>
                <div className='flex items-start gap-4 mb-3'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-rose-700 to-rose-900 flex items-center justify-center flex-shrink-0'>
                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M4 6h16V4H4v2zm0 4h16v-2H4v2zm0 4h16v-2H4v2zm0 4h16v-2H4v2z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-base sm:text-lg font-bold text-white mb-1'>Chapter I: Introduction</h3>
                    <p className='text-xs sm:text-sm text-slate-400'>Overview of internship importance, objectives, and setting</p>
                  </div>
                  <svg className='w-5 h-5 text-slate-400 group-hover:text-rose-700 transition-colors flex-shrink-0 mt-1'>
                    <path fill='currentColor' d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Chapter II */}
            <div className='group cursor-pointer'>
              <div className='bg-slate-800/40 backdrop-blur border border-slate-700 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-rose-800/50 transition-all h-full relative overflow-hidden'>
                <div className='absolute left-0 top-0 w-1 h-full bg-rose-800'></div>
                <div className='flex items-start gap-4 mb-3'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-rose-700 to-orange-600 flex items-center justify-center flex-shrink-0'>
                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-base sm:text-lg font-bold text-white mb-1'>Chapter II: Company Profile</h3>
                    <p className='text-xs sm:text-sm text-slate-400'>Details about the host company, its mission, and structure</p>
                  </div>
                  <svg className='w-5 h-5 text-slate-400 group-hover:text-rose-700 transition-colors flex-shrink-0 mt-1'>
                    <path fill='currentColor' d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Chapter III */}
            <div className='group cursor-pointer'>
              <div className='bg-slate-800/40 backdrop-blur border border-slate-700 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-orange-500/50 transition-all h-full relative overflow-hidden'>
                <div className='absolute left-0 top-0 w-1 h-full bg-orange-500'></div>
                <div className='flex items-start gap-4 mb-3'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center flex-shrink-0'>
                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2V17zm4 0h-2V7h2V17zm4 0h-2v-4h2V17z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-base sm:text-lg font-bold text-white mb-1'>Chapter III: Work Experiences</h3>
                    <p className='text-xs sm:text-sm text-slate-400'>Weekly reports, time records, and project documentation</p>
                  </div>
                  <svg className='w-5 h-5 text-slate-400 group-hover:text-rose-700 transition-colors flex-shrink-0 mt-1'>
                    <path fill='currentColor' d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Chapter IV */}
            <div className='group cursor-pointer'>
              <div className='bg-slate-800/40 backdrop-blur border border-slate-700 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-rose-800/50 transition-all h-full relative overflow-hidden'>
                <div className='absolute left-0 top-0 w-1 h-full bg-rose-800'></div>
                <div className='flex items-start gap-4 mb-3'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-rose-700 to-rose-900 flex items-center justify-center flex-shrink-0'>
                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 9h-4v4h4v-4z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-base sm:text-lg font-bold text-white mb-1'>Chapter IV: Assessment</h3>
                    <p className='text-xs sm:text-sm text-slate-400'>Evaluation forms and internship performance assessment</p>
                  </div>
                  <svg className='w-5 h-5 text-slate-400 group-hover:text-rose-700 transition-colors flex-shrink-0 mt-1'>
                    <path fill='currentColor' d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Appendices */}
            <div className='group cursor-pointer col-span-1 md:col-span-1'>
              <div className='bg-slate-800/40 backdrop-blur border border-slate-700 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-pink-500/50 transition-all h-full relative overflow-hidden'>
                <div className='absolute left-0 top-0 w-1 h-full bg-pink-500'></div>
                <div className='flex items-start gap-4 mb-3'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center flex-shrink-0'>
                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M19 2H5c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V8h10v4z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-base sm:text-lg font-bold text-white mb-1'>Appendices</h3>
                    <p className='text-xs sm:text-sm text-slate-400'>Additional documentation, certificates, and attachments</p>
                  </div>
                  <svg className='w-5 h-5 text-slate-400 group-hover:text-rose-700 transition-colors flex-shrink-0 mt-1'>
                    <path fill='currentColor' d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TABLE OF CONTENTS SECTION */}
        <div className='mb-16 scroll-mt-8'>
          <div className='bg-slate-800/40 backdrop-blur border border-slate-700 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8'>
            <div className='flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-rose-700 to-rose-900 flex items-center justify-center flex-shrink-0'>
                <svg className='w-5 h-5 sm:w-6 sm:h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z'/>
                </svg>
              </div>
              <div>
                <p className='text-xs sm:text-sm font-semibold text-rose-700 uppercase tracking-wider'>NAVIGATION</p>
                <h3 className='text-lg sm:text-2xl font-bold text-white'>Table of Contents</h3>
              </div>
            </div>
            
            <div className='space-y-3'>
              <div className='flex items-center justify-between p-3 hover:bg-slate-700/30 rounded-lg transition-colors cursor-pointer group'>
                <div className='flex items-center gap-4'>
                  <span className='text-rose-700 font-bold text-sm'>01</span>
                  <span className='text-white font-semibold group-hover:text-rose-700 transition-colors text-sm sm:text-base'>Acknowledgement</span>
                </div>
                <svg className='w-5 h-5 text-slate-500 group-hover:text-rose-700 transition-colors flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 hover:bg-slate-700/30 rounded-lg transition-colors cursor-pointer group'>
                <div className='flex items-center gap-4'>
                  <span className='text-rose-700 font-bold text-sm'>02</span>
                  <span className='text-white font-semibold group-hover:text-rose-700 transition-colors text-sm sm:text-base'>Student Trainee Prayer</span>
                </div>
                <svg className='w-5 h-5 text-slate-500 group-hover:text-rose-700 transition-colors flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 hover:bg-slate-700/30 rounded-lg transition-colors cursor-pointer group'>
                <div className='flex items-center gap-4'>
                  <span className='text-rose-700 font-bold text-sm'>03</span>
                  <span className='text-white font-semibold group-hover:text-rose-700 transition-colors text-sm sm:text-base'>Personal Philosophy</span>
                </div>
                <svg className='w-5 h-5 text-slate-500 group-hover:text-rose-700 transition-colors flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 hover:bg-slate-700/30 rounded-lg transition-colors cursor-pointer group'>
                <div className='flex items-center gap-4'>
                  <span className='text-rose-700 font-bold text-sm'>04</span>
                  <span className='text-white font-semibold group-hover:text-rose-700 transition-colors text-sm sm:text-base'>Career Plan</span>
                </div>
                <svg className='w-5 h-5 text-slate-500 group-hover:text-rose-700 transition-colors flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 hover:bg-slate-700/30 rounded-lg transition-colors cursor-pointer group'>
                <div className='flex items-center gap-4'>
                  <span className='text-rose-700 font-bold text-sm'>05</span>
                  <span className='text-white font-semibold group-hover:text-rose-700 transition-colors text-sm sm:text-base'>Chapter I — Introduction</span>
                </div>
                <svg className='w-5 h-5 text-slate-500 group-hover:text-rose-700 transition-colors flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 hover:bg-slate-700/30 rounded-lg transition-colors cursor-pointer group'>
                <div className='flex items-center gap-4'>
                  <span className='text-rose-700 font-bold text-sm'>06</span>
                  <span className='text-white font-semibold group-hover:text-rose-700 transition-colors text-sm sm:text-base'>Chapter II — Company Profile</span>
                </div>
                <svg className='w-5 h-5 text-slate-500 group-hover:text-rose-700 transition-colors flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 hover:bg-slate-700/30 rounded-lg transition-colors cursor-pointer group'>
                <div className='flex items-center gap-4'>
                  <span className='text-rose-700 font-bold text-sm'>07</span>
                  <span className='text-white font-semibold group-hover:text-rose-700 transition-colors text-sm sm:text-base'>Chapter III — Work Experiences</span>
                </div>
                <svg className='w-5 h-5 text-slate-500 group-hover:text-rose-700 transition-colors flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 hover:bg-slate-700/30 rounded-lg transition-colors cursor-pointer group'>
                <div className='flex items-center gap-4'>
                  <span className='text-rose-700 font-bold text-sm'>08</span>
                  <span className='text-white font-semibold group-hover:text-rose-700 transition-colors text-sm sm:text-base'>Chapter IV — Assessment</span>
                </div>
                <svg className='w-5 h-5 text-slate-500 group-hover:text-rose-700 transition-colors flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 hover:bg-slate-700/30 rounded-lg transition-colors cursor-pointer group'>
                <div className='flex items-center gap-4'>
                  <span className='text-rose-700 font-bold text-sm'>09</span>
                  <span className='text-white font-semibold group-hover:text-rose-700 transition-colors text-sm sm:text-base'>Appendices</span>
                </div>
                <svg className='w-5 h-5 text-slate-500 group-hover:text-rose-700 transition-colors flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ACKNOWLEDGEMENT SECTION */}
        <div className='mb-16 scroll-mt-8'>
          <div className='bg-slate-800/40 backdrop-blur border border-slate-700 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8'>
            <div className='flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-rose-700 to-rose-900 flex items-center justify-center flex-shrink-0'>
                <svg className='w-5 h-5 sm:w-6 sm:h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/>
                </svg>
              </div>
              <div>
                <p className='text-xs sm:text-sm font-semibold text-rose-700 uppercase tracking-wider'>SECTION 01</p>
                <h3 className='text-xl sm:text-2xl font-bold text-white'>Acknowledgement</h3>
              </div>
            </div>
            
            <div className='space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed'>
              <p>I would like to sincerely express my gratitude to all the people who supported and guided me throughout my On-the-Job Training experience.</p>
              
              <p>First, to our OJT Coordinator, <span className='font-semibold text-white'>Ma&apos;am Leiza Linda L. Pelayo</span>, thank you for your patience, guidance, and continuous encouragement that helped me successfully complete this training journey.</p>
              
              <p>To the <span className='font-semibold text-white'>OMSC MIS Office</span>, I am deeply grateful for the opportunity to undergo my training in your department. Thank you for allowing me to experience actual technical operations such as network troubleshooting and CCTV installation, and for sharing valuable knowledge that contributed to my professional growth.</p>
              
              <p>To my supervisor, <span className='font-semibold text-white'>Engr. Oliver M. Dimaano</span>, thank you for your guidance, support, and mentorship throughout my training. Your expertise and insights helped me enhance my technical skills and understand the importance of responsibility and efficiency in handling real-world IT tasks.</p>
              
              <p>To my family, I am truly grateful for your endless love, understanding, and motivation that kept me going through every challenge.</p>
              
              <p>And above all, to <span className='font-semibold text-white'>Almighty God</span>, thank You for the strength, wisdom, and guidance that allowed me to complete this training safely and successfully.</p>
              
              <p>This experience has taught me valuable lessons that I will carry with me as I continue to grow in my chosen career.</p>
            </div>
          </div>
        </div>

        {/* STUDENT TRAINEE PRAYER SECTION */}
        <div className='mb-16 scroll-mt-8'>
          <div className='bg-slate-800/40 backdrop-blur border border-slate-700 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8'>
            <div className='flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-rose-700 to-rose-900 flex items-center justify-center flex-shrink-0'>
                <svg className='w-5 h-5 sm:w-6 sm:h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z'/>
                </svg>
              </div>
              <div>
                <p className='text-xs sm:text-sm font-semibold text-rose-700 uppercase tracking-wider'>SECTION 02</p>
                <h3 className='text-xl sm:text-2xl font-bold text-white'>Student Trainee Prayer</h3>
              </div>
            </div>
            
            <div className='space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed border-l-4 border-rose-700 pl-6'>
              <p className='italic'>&quot;Lord, grant me the wisdom to learn, the patience to listen, and the courage to face every task with diligence.&quot;</p>
              <p className='italic'>&quot;May my hands work with skill, my mind think with clarity, and my heart stay humble in every challenge.&quot;</p>
              <p className='italic'>&quot;Bless this season of training, that I may grow into a professional who uplifts others and serves with integrity. Amen.&quot;</p>
            </div>
          </div>
        </div>

        {/* PERSONAL PHILOSOPHY SECTION */}
        <div className='mb-16 scroll-mt-8'>
          <div className='bg-slate-800/40 backdrop-blur border border-slate-700 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8'>
            <div className='flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-rose-700 to-rose-900 flex items-center justify-center flex-shrink-0'>
                <svg className='w-5 h-5 sm:w-6 sm:h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z'/>
                </svg>
              </div>
              <div>
                <p className='text-xs sm:text-sm font-semibold text-rose-700 uppercase tracking-wider'>SECTION 03</p>
                <h3 className='text-xl sm:text-2xl font-bold text-white'>Personal Philosophy</h3>
              </div>
            </div>
            
            <div className='space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed'>
              <p>I believe that growth comes from hands-on experience and continuous learning. During my On-the-Job Training at the OMSC MIS Office, I realized that technical skills must be supported by patience, responsibility, and a willingness to solve problems in real-world situations.</p>
              
              <p>Working on tasks such as troubleshooting internet connections and assisting in CCTV installation taught me the importance of accuracy, safety, and critical thinking. These experiences helped me become more confident in handling technical challenges.</p>
              
              <p>I aim to continue improving my skills by learning from every task and experience, and to apply my knowledge in a practical and meaningful way as I pursue a career in the field of Information Technology.</p>
            </div>
          </div>
        </div>

        {/* CAREER PLAN SECTION */}
        <div className='mb-16 scroll-mt-8'>
          <div className='bg-slate-800/40 backdrop-blur border border-slate-700 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8'>
            <div className='flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-rose-700 to-rose-900 flex items-center justify-center flex-shrink-0'>
                <svg className='w-5 h-5 sm:w-6 sm:h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z'/>
                </svg>
              </div>
              <div>
                <p className='text-xs sm:text-sm font-semibold text-rose-700 uppercase tracking-wider'>SECTION 04</p>
                <h3 className='text-xl sm:text-2xl font-bold text-white'>Career Plan</h3>
              </div>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
              <div className='bg-slate-700/40 border border-slate-600 rounded-lg p-4 sm:p-6'>
                <h4 className='text-rose-700 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3'>SHORT-TERM (0-2 YRS)</h4>
                <p className='text-slate-300 text-xs sm:text-sm leading-relaxed'>Gain entry-level experience in an office or IT-related environment such as administrative support, data management, or system assistance. Improve technical literacy and develop professional workplace skills such as communication, organization, and time management.</p>
              </div>
              
              <div className='bg-slate-700/40 border border-slate-600 rounded-lg p-4 sm:p-6'>
                <h4 className='text-rose-700 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3'>MID-TERM (3-5 YRS)</h4>
                <p className='text-slate-300 text-xs sm:text-sm leading-relaxed'>Grow into a more specialized role such as system support, IT assistant, or business/process analyst. Enhance knowledge in office systems, database management, and workflow optimization while taking on greater responsibilities in the workplace.</p>
              </div>
              
              <div className='bg-slate-700/40 border border-slate-600 rounded-lg p-4 sm:p-6'>
                <h4 className='text-rose-700 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3'>LONG-TERM (5+ YRS)</h4>
                <p className='text-slate-300 text-xs sm:text-sm leading-relaxed'>Establish a stable career in the IT or administrative field, potentially in system management, operations coordination, or business solutions. Aim to become a reliable professional who contributes to improving organizational processes and efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
