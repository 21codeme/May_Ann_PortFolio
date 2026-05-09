export function Assessment() {
  return (
    <div id='assessment-top' className='min-h-screen p-4 sm:p-6 md:p-8 bg-white'>
      <div className='max-w-6xl mx-auto'>
        {/* Breadcrumb */}
        <div className='text-sm text-pink-500 mb-8'>
          <span className='text-pink-600'>E-Portfolio</span>
          <span className='mx-2'>›</span>
          <span>IV. Assessment</span>
        </div>

        <h1 className='text-2xl sm:text-3xl font-bold text-pink-900 mb-8'>IV. Assessment</h1>

        <div className='space-y-8'>
          {/* APPENDIX A Header */}
          <div className='bg-pink-50 backdrop-blur border border-pink-200 rounded-2xl p-6 sm:p-10'>
            <p className='text-pink-600 text-sm font-semibold mb-2'>APPENDIX A</p>
            <h2 className='text-2xl sm:text-3xl font-bold text-pink-900 mb-2'>Student Internship Evaluation Form</h2>
            <p className='text-pink-600 mb-8'>Occidental Mindoro State College × OMSC LIBRARY MAIN CAMPUS</p>

            {/* Student Details Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='border border-pink-200 rounded-lg p-6 bg-white'>
                <p className='text-pink-600 text-sm mb-2'>Student Name</p>
                <p className='text-pink-900 text-lg font-semibold'>May Ann O. Capistrano</p>
              </div>
              <div className='border border-pink-200 rounded-lg p-6 bg-white'>
                <p className='text-pink-600 text-sm mb-2'>Program</p>
                <p className='text-pink-900 text-lg font-semibold'>BS Information Technology</p>
              </div>
              <div className='border border-pink-200 rounded-lg p-6 bg-white'>
                <p className='text-pink-600 text-sm mb-2'>Company</p>
                <p className='text-pink-900 text-lg font-semibold'>OMSC LIBRARY MAIN CAMPUS - LABANGAN SAN JOSE OCCIDENTAL MINDORO</p>
              </div>
              <div className='border border-pink-200 rounded-lg p-6 bg-white'>
                <p className='text-pink-600 text-sm mb-2'>Supervisor</p>
                <p className='text-pink-900 text-lg font-semibold'>Ms. Ronalyn C. Francisco</p>
              </div>
              <div className='md:col-span-2 border border-pink-200 rounded-lg p-6 bg-white'>
                <p className='text-pink-600 text-sm mb-2'>Internship Period</p>
                <p className='text-pink-900 text-lg font-semibold'>January 2026 – April 2026</p>
              </div>
            </div>
          </div>

          {/* Evaluation Form Pages */}
          <div className='bg-pink-50 backdrop-blur border border-pink-200 rounded-2xl p-6 sm:p-10'>
            <h3 className='text-xl font-bold text-pink-900 mb-6'>Evaluation Form Pages</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {/* Page 1 */}
              <div className='rounded-lg overflow-hidden border border-pink-200 hover:border-pink-400 transition-colors'>
                <div className='relative bg-pink-100 aspect-[8.5/11]'>
                  <img src='/eval1.png' alt='Evaluation Form Page 1' className='w-full h-full object-cover' />
                  <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-3'>
                    <p className='text-white text-xs font-semibold'>Page 1: Form Header & Quantitative</p>
                  </div>
                </div>
              </div>

              {/* Page 2 */}
              <div className='rounded-lg overflow-hidden border border-pink-200 hover:border-pink-400 transition-colors'>
                <div className='relative bg-pink-100 aspect-[8.5/11]'>
                  <img src='/eval2.png' alt='Evaluation Form Page 2' className='w-full h-full object-cover' />
                  <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-3'>
                    <p className='text-white text-xs font-semibold'>Page 2: Qualitative Assessment</p>
                  </div>
                </div>
              </div>

              {/* Page 3 */}
              <div className='rounded-lg overflow-hidden border border-pink-200 hover:border-pink-400 transition-colors'>
                <div className='relative bg-pink-100 aspect-[8.5/11]'>
                  <img src='/eval-page3.jpg' alt='Evaluation Form Page 3' className='w-full h-full object-cover' />
                  <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-3'>
                    <p className='text-white text-xs font-semibold'>Page 3: Computation & Signatures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Summary */}
          <div className='bg-pink-50 backdrop-blur border border-pink-200 rounded-2xl p-6 sm:p-10'>
            <h2 className='text-xl sm:text-2xl font-bold text-pink-900 mb-8'>Performance Summary</h2>
            
            {/* Rating Cards */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
              <div className='bg-white rounded-xl p-6 border border-pink-200 text-center'>
                <p className='text-pink-600 text-sm mb-2'>SR</p>
                <p className='text-3xl font-bold text-pink-600'>5</p>
              </div>
              <div className='bg-white rounded-xl p-6 border border-pink-200 text-center'>
                <p className='text-pink-600 text-sm mb-2'>PR</p>
                <p className='text-3xl font-bold text-pink-600'>5</p>
              </div>
              <div className='bg-white rounded-xl p-6 border border-pink-200 text-center'>
                <p className='text-pink-600 text-sm mb-2'>SICR</p>
                <p className='text-3xl font-bold text-pink-600'>5</p>
              </div>
              <div className='bg-white rounded-xl p-6 border border-pink-200 text-center'>
                <p className='text-pink-600 text-sm mb-2'>ASR</p>
                <p className='text-3xl font-bold text-amber-500'>4</p>
              </div>
            </div>

            {/* Overall Rating */}
            <div className='border-t border-pink-200 pt-6'>
              <p className='text-pink-600 text-center mb-2'>Overall Rating</p>
              <p className='text-center text-4xl font-bold text-pink-600'>4.75</p>
            </div>
          </div>

          {/* General Comments */}
          <div className='bg-pink-50 backdrop-blur border border-pink-200 rounded-2xl p-6 sm:p-10'>
            <h3 className='text-lg font-bold text-pink-900 mb-4'>General Comments</h3>
            <p className='text-pink-700 leading-relaxed'>
              The intern demonstrated strong work ethic, responsibility, and attention to detail. She was able to complete assigned tasks efficiently and showed good communication skills in dealing with students and staff.
            </p>
          </div>

          {/* Evaluators */}
          <div className='bg-pink-50 backdrop-blur border border-pink-200 rounded-2xl p-6 sm:p-10'>
            <h3 className='text-lg font-bold text-pink-900 mb-6'>Evaluators</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div>
                <p className='text-pink-900 font-bold mb-1'>Student Intern</p>
                <p className='text-pink-700'>May Ann O. Capistrano</p>
              </div>
              <div>
                <p className='text-pink-900 font-bold mb-1'>Supervisor</p>
                <p className='text-pink-700'>Ms. Ronalyn C. Francisco</p>
              </div>
              <div>
                <p className='text-pink-900 font-bold mb-1'>Student Internship Coordinator</p>
                <p className='text-pink-700'>Maricris M. Usita, EdD</p>
              </div>
              <div>
                <p className='text-pink-900 font-bold mb-1'>Peer</p>
                <p className='text-pink-700'>Justine Mae Montaro</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className='text-center pt-4 pb-8 border-t border-pink-200'>
            <p className='text-xs text-pink-500'>
              © 2026 OJT E-Portfolio &nbsp;·&nbsp;{' '}
              <span className='text-pink-600'>Student Internship Documentation</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
