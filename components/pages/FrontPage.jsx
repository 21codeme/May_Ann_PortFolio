export function FrontPage() {
  return (
    <div className='min-h-screen p-8 bg-white'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-sm text-pink-500 mb-8'>
          <span className='text-pink-600'>E-Portfolio</span>
          <span className='mx-2'>›</span>
          <span>Front Page</span>
        </div>

        <div className='bg-pink-50 backdrop-blur border border-pink-200 rounded-2xl p-12'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-pink-900 mb-4'>
              ON-THE-JOB-TRAINING
            </h1>
            <p className='text-lg text-pink-600'>E-Portfolio Documentation</p>
          </div>

          <div className='space-y-8 text-pink-700'>
            <div>
              <h2 className='text-xl font-semibold text-pink-900 mb-2'>Student Information</h2>
              <p className='text-pink-600'>Name: May Ann O. Capistrano</p>
              <p className='text-pink-600'>ID: MA22-IT-06261</p>
              <p className='text-pink-600'>Course: Bachelor of Science in Information Technology</p>
            </div>

            <div>
              <h2 className='text-xl font-semibold text-pink-900 mb-2'>Institution</h2>
              <p className='text-pink-600'>Occidental Mindoro State College</p>
            </div>

            <div>
              <h2 className='text-xl font-semibold text-pink-900 mb-2'>Training Period</h2>
              <p className='text-pink-600'>Duration: [Training Period]</p>
              <p className='text-pink-600'>Location: OMSC LIBRARY MAIN CAMPUS - LABANGAN SAN JOSE OCCIDENTAL MINDORO</p>
            </div>

            <div className='pt-8 border-t border-pink-200 text-center'>
              <p className='text-pink-600 font-semibold'>Academic Year 2024-2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
