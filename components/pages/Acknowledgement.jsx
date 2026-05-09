export function Acknowledgement() {
  return (
    <div className='min-h-screen p-4 sm:p-6 md:p-8 bg-white'>
      <div className='max-w-3xl mx-auto'>
        {/* Breadcrumb */}
        <div className='text-sm text-pink-500 mb-2'>
          <span className='text-pink-600'>E-Portfolio</span>
          <span className='mx-2'>›</span>
          <span>Acknowledgement</span>
        </div>

        {/* Header */}
        <div className='flex items-center gap-3 mb-8'>
          <div className='w-10 h-10 rounded-lg bg-pink-600 flex items-center justify-center shrink-0'>
            <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
              <path d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
            </svg>
          </div>
          <div>
            <p className='text-xs font-semibold text-pink-500 uppercase tracking-wider'>Section 01</p>
            <h1 className='text-2xl sm:text-3xl font-bold text-pink-900'>Acknowledgement</h1>
          </div>
        </div>

        <div className='bg-pink-50/50 border border-pink-100 rounded-2xl p-6 sm:p-8 space-y-4 text-sm sm:text-base text-pink-700 leading-relaxed'>
          <p>
            The completion of this undertaking could not have been possible without the participation and assistance of so many people whose names may not all be enumerated. Their contributions are sincerely appreciated and gratefully acknowledged. However, the group would like to express their deep appreciation and indebtedness particularly to the following:
          </p>

          <p>
            To our OJT Adviser, <span className='font-semibold text-pink-900'>Maricris Usita</span>, for guiding and showing us the courage to work hard and better in our chosen office and giving us an advice to work professionally.
          </p>

          <p>
            To the Library office family thank you for the acceptance, for the support and for giving me permission on performing my On-the-Job-Training at your office. To the employee&apos;s and teachers who trusting, guided, support me and imparting my skills and knowledge, also for treating me for being a part of your OJT staff to discover new ideas to your office, thank you for believing.
          </p>

          <p>
            Thanks to my <span className='font-semibold text-pink-900'>Friends</span>, for helping me and sharing my problems, also when I needed help, and for making me happy in times of difficulty and giving me color in my college life.
          </p>

          <p>
            To my <span className='font-semibold text-pink-900'>Parents</span>, for the understanding, for working hard to support financially and my study, for guiding me in every decision I&apos;d made and thank you for everlasting love that I&apos;ve felt.
          </p>

          <p>
            The <span className='font-semibold text-pink-900'>Almighty God</span>, for waking me up every day for all the blessing we received every day and for what we are going to received more, for guidance, strength, talent, wisdom, understanding, and knowledge to accomplish this chapter of my life.
          </p>
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
