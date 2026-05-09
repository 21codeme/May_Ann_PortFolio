export function PersonalPhilosophy() {
  return (
    <div className='min-h-screen p-4 sm:p-6 md:p-8 bg-white'>
      <div className='max-w-3xl mx-auto'>
        {/* Breadcrumb */}
        <div className='text-sm text-pink-500 mb-2'>
          <span className='text-pink-600'>E-Portfolio</span>
          <span className='mx-2'>›</span>
          <span>Personal Philosophy</span>
        </div>

        {/* Header */}
        <div className='flex items-center gap-3 mb-8'>
          <div className='w-10 h-10 rounded-lg bg-pink-600 flex items-center justify-center shrink-0'>
            <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
              <path d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
            </svg>
          </div>
          <div>
            <p className='text-xs font-semibold text-pink-500 uppercase tracking-wider'>Section 03</p>
            <h1 className='text-2xl sm:text-3xl font-bold text-pink-900'>Personal Philosophy</h1>
          </div>
        </div>

        {/* Quote highlight */}
        <div className='bg-pink-600 rounded-2xl p-6 sm:p-8 mb-6'>
          <p className='text-white text-lg sm:text-xl font-semibold italic text-center leading-relaxed'>
            &ldquo;Change your thoughts and you change your world.&rdquo;
          </p>
        </div>

        <div className='bg-pink-50/50 border border-pink-100 rounded-2xl p-6 sm:p-8 space-y-4 text-sm sm:text-base text-pink-700 leading-relaxed'>
          <p>
            My philosophy in life is <span className='font-semibold text-pink-900'>&ldquo;change your thoughts and you change your world.&rdquo;</span> Thoughts play an important role in molding our behavior. Whatever we believed about ourselves is usually made manifest into our virtual world.
          </p>

          <p>
            When we feed our minds with negativity, we lose the motivation and drive to follow our dreams. When we register to our subconscious minds that we are the best, we start believing so and this somehow boosts our confidence to do the impossible.
          </p>

          <p>
            Most motivation speakers will tell you that attitude is what separates winners from losers, leaders from followers and lions from sheep.
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
