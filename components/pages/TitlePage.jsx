export function TitlePage({ setCurrentPage }) {
  const handleNavigate = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className='min-h-screen p-4 sm:p-6 md:p-8 bg-white'>
      <div className='max-w-4xl mx-auto'>
        {/* Breadcrumb */}
        <div className='text-sm text-pink-500 mb-8'>
          <span className='text-pink-600'>E-Portfolio</span>
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
                backgroundImage: 'url(/OMSC1.png)',
              }}
            ></div>
            <div className='absolute inset-0 bg-white/20'></div>
            <div className='relative border border-pink-300 rounded-2xl p-8 sm:p-10 md:p-16 text-center bg-white/80 backdrop-blur'>
              <div className='mb-8'>
                <p className='text-pink-600 font-semibold uppercase tracking-widest text-sm sm:text-base'>
                  College of Arts, Science, and Technology
                </p>
              </div>
              <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-pink-900 mb-6'>
                ON-THE-JOB-TRAINING
              </h1>
              <p className='text-base sm:text-lg md:text-xl text-pink-700'>
                A complete documentation of the student&apos;s internship experience.
              </p>
            </div>
          </div>

          {/* Info Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6'>
            <div className='group'>
              <div className='h-full bg-pink-50 backdrop-blur border border-pink-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-pink-400 transition-all'>
                <p className='text-xs font-semibold text-pink-600 uppercase mb-1 sm:mb-2'>
                  Student Name
                </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-pink-900 break-words'>May Ann O. Capistrano</p>
              </div>
            </div>

            <div className='group'>
              <div className='h-full bg-pink-50 backdrop-blur border border-pink-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-pink-400 transition-all'>
                <p className='text-xs font-semibold text-pink-600 uppercase mb-1 sm:mb-2'>
                  Student ID
                </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-pink-900 break-words'>MA22-IT-02471</p>
              </div>
            </div>

            <div className='group'>
              <div className='h-full bg-pink-50 backdrop-blur border border-pink-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-pink-400 transition-all'>
                <p className='text-xs font-semibold text-pink-600 uppercase mb-1 sm:mb-2'>
                  Course & Year
                </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-pink-900 break-words'>
                  Bachelor of Science in Information Technology, 4th Year
                </p>
              </div>
            </div>

            <div className='group'>
              <div className='h-full bg-pink-50 backdrop-blur border border-pink-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-pink-400 transition-all'>
                <p className='text-xs font-semibold text-pink-600 uppercase mb-1 sm:mb-2'>
                  Institution
                </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-pink-900 break-words'>
                  Occidental Mindoro State College
                </p>
              </div>
            </div>

            <div className='group md:col-span-2'>
              <div className='h-full bg-pink-50 backdrop-blur border border-pink-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-pink-400 transition-all'>
                <p className='text-xs font-semibold text-pink-600 uppercase mb-1 sm:mb-2'>
                  Host Company
                </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-pink-900 break-words'>
                  OMSC LIBRARY MAIN CAMPUS - LABANGAN SAN JOSE OCCIDENTAL MINDORO
                </p>
              </div>
            </div>

            <div className='group md:col-span-2'>
              <div className='h-full bg-pink-50 backdrop-blur border border-pink-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-pink-400 transition-all'>
                <p className='text-xs font-semibold text-pink-600 uppercase mb-1 sm:mb-2'>
                  OJT Coordinator
                </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-pink-900 break-words'>Maricris M. Usita, EdD</p>
              </div>
            </div>
          </div>
        </div>



        {/* E-PORTFOLIO CONTENTS SECTION */}
        <div className='mb-16 scroll-mt-8'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl sm:text-4xl font-bold text-pink-900 mb-3'>E-Portfolio Contents</h2>
            <p className='text-sm sm:text-base text-pink-600'>Navigate through the comprehensive documentation of your internship experience</p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            {/* Chapter I */}
            <div className='group cursor-pointer' onClick={() => handleNavigate('introduction')}>
              <div className='bg-pink-50 backdrop-blur border border-pink-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-pink-400 transition-all h-full relative overflow-hidden'>
                <div className='absolute left-0 top-0 w-1 h-full bg-pink-600'></div>
                <div className='flex items-start gap-4 mb-3'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center flex-shrink-0'>
                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-pink-900' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M4 6h16V4H4v2zm0 4h16v-2H4v2zm0 4h16v-2H4v2zm0 4h16v-2H4v2z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-base sm:text-lg font-bold text-pink-900 mb-1'>Chapter I: Introduction</h3>
                    <p className='text-xs sm:text-sm text-pink-600'>Overview of internship importance, objectives, and setting</p>
                  </div>
                  <svg className='w-5 h-5 text-pink-500 group-hover:text-pink-600 transition-colors flex-shrink-0 mt-1'>
                    <path fill='currentColor' d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Chapter II */}
            <div className='group cursor-pointer' onClick={() => handleNavigate('company-profile')}>
              <div className='bg-pink-50 backdrop-blur border border-pink-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-pink-400 transition-all h-full relative overflow-hidden'>
                <div className='absolute left-0 top-0 w-1 h-full bg-pink-600'></div>
                <div className='flex items-start gap-4 mb-3'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center flex-shrink-0'>
                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-pink-900' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-base sm:text-lg font-bold text-pink-900 mb-1'>Chapter II: Company Profile</h3>
                    <p className='text-xs sm:text-sm text-pink-600'>Details about the host company, its mission, and structure</p>
                  </div>
                  <svg className='w-5 h-5 text-pink-500 group-hover:text-pink-600 transition-colors flex-shrink-0 mt-1'>
                    <path fill='currentColor' d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Chapter III */}
            <div className='group cursor-pointer' onClick={() => handleNavigate('work-experience')}>
              <div className='bg-pink-50 backdrop-blur border border-pink-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-pink-400 transition-all h-full relative overflow-hidden'>
                <div className='absolute left-0 top-0 w-1 h-full bg-pink-600'></div>
                <div className='flex items-start gap-4 mb-3'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center flex-shrink-0'>
                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-pink-900' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2V17zm4 0h-2V7h2V17zm4 0h-2v-4h2V17z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-base sm:text-lg font-bold text-pink-900 mb-1'>Chapter III: Work Experiences</h3>
                    <p className='text-xs sm:text-sm text-pink-600'>Weekly reports, time records, and project documentation</p>
                  </div>
                  <svg className='w-5 h-5 text-pink-500 group-hover:text-pink-600 transition-colors flex-shrink-0 mt-1'>
                    <path fill='currentColor' d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Chapter IV */}
            <div className='group cursor-pointer' onClick={() => handleNavigate('assessment')}>
              <div className='bg-pink-50 backdrop-blur border border-pink-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-pink-400 transition-all h-full relative overflow-hidden'>
                <div className='absolute left-0 top-0 w-1 h-full bg-pink-600'></div>
                <div className='flex items-start gap-4 mb-3'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center flex-shrink-0'>
                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-pink-900' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 9h-4v4h4v-4z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-base sm:text-lg font-bold text-pink-900 mb-1'>Chapter IV: Assessment</h3>
                    <p className='text-xs sm:text-sm text-pink-600'>Evaluation forms and internship performance assessment</p>
                  </div>
                  <svg className='w-5 h-5 text-pink-500 group-hover:text-pink-600 transition-colors flex-shrink-0 mt-1'>
                    <path fill='currentColor' d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Appendices */}
            <div className='group cursor-pointer col-span-1 md:col-span-1' onClick={() => handleNavigate('appendices')}>
              <div className='bg-pink-50 backdrop-blur border border-pink-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-pink-400 transition-all h-full relative overflow-hidden'>
                <div className='absolute left-0 top-0 w-1 h-full bg-pink-600'></div>
                <div className='flex items-start gap-4 mb-3'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center flex-shrink-0'>
                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-pink-900' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M19 2H5c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V8h10v4z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-base sm:text-lg font-bold text-pink-900 mb-1'>Appendices</h3>
                    <p className='text-xs sm:text-sm text-pink-600'>Additional documentation, certificates, and attachments</p>
                  </div>
                  <svg className='w-5 h-5 text-pink-500 group-hover:text-pink-600 transition-colors flex-shrink-0 mt-1'>
                    <path fill='currentColor' d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TABLE OF CONTENTS SECTION */}
        <div className='mb-16 scroll-mt-8'>
          <div className='bg-pink-50/40 backdrop-blur border border-pink-200 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8'>
            <div className='flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-pink-600 to-pink-700 flex items-center justify-center flex-shrink-0'>
                <svg className='w-5 h-5 sm:w-6 sm:h-6 text-pink-900' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z'/>
                </svg>
              </div>
              <div>
                <p className='text-xs sm:text-sm font-semibold text-pink-600 uppercase tracking-wider'>NAVIGATION</p>
                <h3 className='text-lg sm:text-2xl font-bold text-pink-900'>Table of Contents</h3>
              </div>
            </div>
            
            <div className='space-y-3'>
              <div className='flex items-center justify-between p-3 rounded-lg'>
                <div className='flex items-center gap-4'>
                  <span className='text-pink-600 font-bold text-sm'>01</span>
                  <span className='text-pink-900 font-semibold text-sm sm:text-base'>Acknowledgement</span>
                </div>
                <svg className='w-5 h-5 text-pink-500 flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 rounded-lg'>
                <div className='flex items-center gap-4'>
                  <span className='text-pink-600 font-bold text-sm'>02</span>
                  <span className='text-pink-900 font-semibold text-sm sm:text-base'>Student Trainee Prayer</span>
                </div>
                <svg className='w-5 h-5 text-pink-500 flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 rounded-lg'>
                <div className='flex items-center gap-4'>
                  <span className='text-pink-600 font-bold text-sm'>03</span>
                  <span className='text-pink-900 font-semibold text-sm sm:text-base'>Personal Philosophy</span>
                </div>
                <svg className='w-5 h-5 text-pink-500 flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 rounded-lg'>
                <div className='flex items-center gap-4'>
                  <span className='text-pink-600 font-bold text-sm'>04</span>
                  <span className='text-pink-900 font-semibold text-sm sm:text-base'>Career Plan</span>
                </div>
                <svg className='w-5 h-5 text-pink-500 flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 rounded-lg'>
                <div className='flex items-center gap-4'>
                  <span className='text-pink-600 font-bold text-sm'>05</span>
                  <span className='text-pink-900 font-semibold text-sm sm:text-base'>Chapter I — Introduction</span>
                </div>
                <svg className='w-5 h-5 text-pink-500 flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 rounded-lg'>
                <div className='flex items-center gap-4'>
                  <span className='text-pink-600 font-bold text-sm'>06</span>
                  <span className='text-pink-900 font-semibold text-sm sm:text-base'>Chapter II — Company Profile</span>
                </div>
                <svg className='w-5 h-5 text-pink-500 flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 rounded-lg'>
                <div className='flex items-center gap-4'>
                  <span className='text-pink-600 font-bold text-sm'>07</span>
                  <span className='text-pink-900 font-semibold text-sm sm:text-base'>Chapter III — Work Experiences</span>
                </div>
                <svg className='w-5 h-5 text-pink-500 flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 rounded-lg'>
                <div className='flex items-center gap-4'>
                  <span className='text-pink-600 font-bold text-sm'>08</span>
                  <span className='text-pink-900 font-semibold text-sm sm:text-base'>Chapter IV — Assessment</span>
                </div>
                <svg className='w-5 h-5 text-pink-500 flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex items-center justify-between p-3 rounded-lg'>
                <div className='flex items-center gap-4'>
                  <span className='text-pink-600 font-bold text-sm'>09</span>
                  <span className='text-pink-900 font-semibold text-sm sm:text-base'>Appendices</span>
                </div>
                <svg className='w-5 h-5 text-pink-500 flex-shrink-0'>
                  <path fill='currentColor' d='M8 5v14l11-7z'/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ACKNOWLEDGEMENT SECTION */}
        <div className='mb-16 scroll-mt-8'>
          <div className='bg-pink-50 backdrop-blur border border-pink-200 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8'>
            <div className='flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-pink-600 to-pink-700 flex items-center justify-center flex-shrink-0'>
                <svg className='w-5 h-5 sm:w-6 sm:h-6 text-pink-900' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/>
                </svg>
              </div>
              <div>
                <p className='text-xs sm:text-sm font-semibold text-pink-600 uppercase tracking-wider'>SECTION 01</p>
                <h3 className='text-xl sm:text-2xl font-bold text-pink-900'>Acknowledgement</h3>
              </div>
            </div>
            
            <div className='space-y-3 sm:space-y-4 text-sm sm:text-base text-pink-700 leading-relaxed'>
              <p>I would like to express my sincere appreciation to the people who played a significant role in the completion of my On-the-Job Training.</p>
              
              <p>To our OJT Coordinator, Ma&apos;am Maricris M. Usita, EdD, thank you for your continuous guidance and support. Your direction helped me stay on track and complete my training with confidence.</p>
              
              <p>I am also grateful to the OMSC College Library | Learning and Innovation Center, Labangan San Jose for giving me the opportunity to be part of your team. Being exposed to actual office operations allowed me to understand how proper records management contributes to an organized and efficient workplace.</p>
              
              <p>To my supervisor, <span className='font-semibold text-pink-900'>Anniezeth A. Antolin, RL, MLIS</span>, thank you for your guidance and for trusting me with responsibilities that helped me grow. Your support pushed me to become more responsible and attentive in my work.</p>
              
              <p>I would also like to thank my family for their constant encouragement and support throughout this journey.</p>
              
              <p>Above all, I thank Almighty God for giving me the strength and perseverance to successfully complete my training.</p>
              
              <p>This experience has helped me build confidence and prepared me for future challenges in my chosen career.</p>
            </div>
          </div>
        </div>

        {/* STUDENT TRAINEE PRAYER SECTION */}
        <div className='mb-16 scroll-mt-8'>
          <div className='bg-pink-50/40 backdrop-blur border border-pink-200 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8'>
            <div className='flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-pink-600 to-pink-700 flex items-center justify-center flex-shrink-0'>
                <svg className='w-5 h-5 sm:w-6 sm:h-6 text-pink-900' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z'/>
                </svg>
              </div>
              <div>
                <p className='text-xs sm:text-sm font-semibold text-pink-600 uppercase tracking-wider'>SECTION 02</p>
                <h3 className='text-xl sm:text-2xl font-bold text-pink-900'>Student Trainee Prayer</h3>
              </div>
            </div>
            
            <div className='space-y-3 sm:space-y-4 text-sm sm:text-base text-pink-700 leading-relaxed border-l-4 border-pink-600 pl-6'>
              <p className='italic'>&quot;Lord, grant me the wisdom to learn, the patience to listen, and the courage to face every task with diligence.&quot;</p>
              <p className='italic'>&quot;May my hands work with skill, my mind think with clarity, and my heart stay humble in every challenge.&quot;</p>
              <p className='italic'>&quot;Bless this season of training, that I may grow into a professional who uplifts others and serves with integrity. Amen.&quot;</p>
            </div>
          </div>
        </div>

        {/* PERSONAL PHILOSOPHY SECTION */}
        <div className='mb-16 scroll-mt-8'>
          <div className='bg-pink-50/40 backdrop-blur border border-pink-200 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8'>
            <div className='flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-pink-600 to-pink-700 flex items-center justify-center flex-shrink-0'>
                <svg className='w-5 h-5 sm:w-6 sm:h-6 text-pink-900' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z'/>
                </svg>
              </div>
              <div>
                <p className='text-xs sm:text-sm font-semibold text-pink-600 uppercase tracking-wider'>SECTION 03</p>
                <h3 className='text-xl sm:text-2xl font-bold text-pink-900'>Personal Philosophy</h3>
              </div>
            </div>
            
            <div className='space-y-3 sm:space-y-4 text-sm sm:text-base text-pink-700 leading-relaxed'>
              <p>I believe that improvement comes from doing the work consistently and learning from every experience. During my training at the OMSC College Library | Learning and Innovation Center, Labangan San Jose, I realized that productivity is not just about finishing tasks, but about doing them correctly and efficiently.</p>
              
              <p>By performing tasks such as scanning documents, organizing records alphabetically, preparing file storage, and handling document transfers, I developed a stronger sense of discipline and attention to detail. These responsibilities trained me to work accurately while managing time effectively.</p>
              
              <p>This experience taught me that reliability and consistency are just as important as technical skills. When tasks are done properly, they contribute to a smoother and more organized system.</p>
              
              <p>As I move forward, I aim to continue improving my skills, stay consistent in my work, and take every opportunity as a chance to grow both personally and professionally.</p>
            </div>
          </div>
        </div>

        {/* CAREER PLAN SECTION */}
        <div className='mb-16 scroll-mt-8'>
          <div className='bg-pink-50/40 backdrop-blur border border-pink-200 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8'>
            <div className='flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-pink-600 to-pink-700 flex items-center justify-center flex-shrink-0'>
                <svg className='w-5 h-5 sm:w-6 sm:h-6 text-pink-900' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z'/>
                </svg>
              </div>
              <div>
                <p className='text-xs sm:text-sm font-semibold text-pink-600 uppercase tracking-wider'>SECTION 04</p>
                <h3 className='text-xl sm:text-2xl font-bold text-pink-900'>Career Plan</h3>
              </div>
            </div>
            
            <div className='space-y-6'>
              <div className='bg-pink-50 border border-pink-300 rounded-lg p-4 sm:p-6'>
                <h4 className='text-pink-600 font-bold text-xs sm:text-sm uppercase tracking-wider mb-3'>SHORT-TERM (0–2 YEARS)</h4>
                <p className='text-pink-700 text-xs sm:text-sm leading-relaxed'>Secure a position where I can apply my skills in records handling, office support, or basic IT functions. My goal is to gain practical experience, improve my efficiency at work, and build a strong foundation in both technical and administrative tasks.</p>
              </div>
              
              <div className='bg-pink-50 border border-pink-300 rounded-lg p-4 sm:p-6'>
                <h4 className='text-pink-600 font-bold text-xs sm:text-sm uppercase tracking-wider mb-3'>MID-TERM (3–5 YEARS)</h4>
                <p className='text-pink-700 text-xs sm:text-sm leading-relaxed'>Develop into a more skilled professional by taking on roles that involve data management, system support, or process improvement. I plan to enhance my knowledge in digital tools and database systems while becoming more independent and dependable in handling responsibilities.</p>
              </div>
              
              <div className='bg-pink-50 border border-pink-300 rounded-lg p-4 sm:p-6'>
                <h4 className='text-pink-600 font-bold text-xs sm:text-sm uppercase tracking-wider mb-3'>LONG-TERM (5+ YEARS)</h4>
                <p className='text-pink-700 text-xs sm:text-sm leading-relaxed'>Build a stable and progressive career in the field of Information Technology or office systems management. I aim to take on leadership roles and contribute to improving systems and workflows that increase productivity and organization within a company.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
