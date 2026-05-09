import { useEffect } from 'react';

const SECTION_ANCHORS = {
  'intro-importance': 'section-importance',
  'intro-objectives': 'section-objectives',
  'intro-time-place': 'section-time-place',
};

export function Introduction({ section }) {
  useEffect(() => {
    const anchorId = SECTION_ANCHORS[section];
    if (anchorId) {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [section]);

  return (
    <div className='min-h-screen p-4 sm:p-6 md:p-8 bg-white'>
      <div className='max-w-4xl mx-auto'>

        {/* Breadcrumb */}
        <div className='text-sm text-pink-500 mb-2'>
          <span className='text-pink-600'>E-Portfolio</span>
          <span className='mx-2'>›</span>
          <span>Introduction</span>
        </div>
        <h1 className='text-2xl sm:text-3xl font-bold text-pink-900 mb-8'>Introduction</h1>

        <div className='space-y-12'>

          {/* ── A. IMPORTANCE OF INTERNSHIP ── */}
          <section id='section-importance'>
            <h2 className='text-xl sm:text-2xl font-bold text-pink-900 mb-1'>Importance of Internship</h2>
            <p className='text-sm text-pink-500 mb-4'>Why on-the-job training matters for student development.</p>

            <div className='bg-pink-100/50 border border-pink-50 rounded-xl p-5 sm:p-6'>
              <p className='text-pink-700 text-sm sm:text-base leading-relaxed mb-5'>
                During my internship at the OMSC College Library | Learning and Innovation Center, Labangan San Jose, I experienced actual record management operations and administrative responsibilities.
                It gave me the opportunity to apply my organizational skills in a real working environment
                while understanding the importance of accuracy, proper documentation, and efficiency in handling records management and information systems.
              </p>

              <p className='text-pink-900 font-semibold text-sm sm:text-base mb-3'>Key Tasks:</p>
              <ul className='space-y-2'>
                {[
                  'Scanned and digitized records',
                  'Labeled and covered file boxes for proper storage',
                  'Transported medical records from the clinic to the records office',
                  'Organized records alphabetically based on the names of record owners',
                  'Supporting daily administrative and record management tasks',
                ].map((task) => (
                  <li key={task} className='flex items-start gap-2 text-pink-700 text-sm sm:text-base'>
                    <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-600 shrink-0'></span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── B. OBJECTIVES OF INTERNSHIP ── */}
          <section id='section-objectives'>
            <h2 className='text-xl sm:text-2xl font-bold text-pink-900 mb-1'>Objectives of Internship</h2>
            <p className='text-sm text-pink-500 mb-4'>The intended learning outcomes of this OJT engagement.</p>

            <div className='bg-pink-100/50 border border-pink-50 rounded-xl p-5 sm:p-6'>
              <p className='text-pink-700 text-sm sm:text-base leading-relaxed mb-5'>
                All in all, the internship aims to train the student in real-world Records Office operations by developing organizational, administrative, and professional skills in handling record management, documentation, and information systems within an actual workplace environment.
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                {/* Objective 1 */}
                <div className='bg-pink-50/50 border border-pink-200 rounded-lg p-4'>
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-md bg-rose-800/20 flex items-center justify-center shrink-0 mt-0.5'>
                      <svg className='w-4 h-4 text-pink-600' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z'/>
                      </svg>
                    </div>
                    <div>
                      <p className='text-pink-900 font-semibold text-sm mb-1'>Record Digitization and Scanning</p>
                      <p className='text-pink-500 text-xs leading-relaxed'>To gain hands-on experience in scanning and digitizing paper records, ensuring accuracy and proper documentation standards in the record management process.</p>
                    </div>
                  </div>
                </div>

                {/* Objective 2 */}
                <div className='bg-pink-50/50 border border-pink-200 rounded-lg p-4'>
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-md bg-rose-800/20 flex items-center justify-center shrink-0 mt-0.5'>
                      <svg className='w-4 h-4 text-pink-600' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5.5-9c.83 0 1.5-.67 1.5-1.5S7.33 8 6.5 8 5 8.67 5 9.5 5.67 11 6.5 11zm11 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z'/>
                      </svg>
                    </div>
                    <div>
                      <p className='text-pink-900 font-semibold text-sm mb-1'>File Organization and Management</p>
                      <p className='text-pink-500 text-xs leading-relaxed'>To develop skills in organizing records alphabetically, properly labeling and covering file boxes, and maintaining systematic storage systems for efficient retrieval.</p>
                    </div>
                  </div>
                </div>

                {/* Objective 3 */}
                <div className='bg-pink-50/50 border border-pink-200 rounded-lg p-4'>
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-md bg-orange-500/20 flex items-center justify-center shrink-0 mt-0.5'>
                      <svg className='w-4 h-4 text-orange-400' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                        <path d='M3 3h18v18H3z'/>
                        <path d='M3 9h18M9 3v18M15 3v18'/>
                      </svg>
                    </div>
                    <div>
                      <p className='text-pink-900 font-semibold text-sm mb-1'>Medical Records Handling</p>
                      <p className='text-pink-500 text-xs leading-relaxed'>To understand the importance of confidentiality and proper handling of sensitive medical records while developing safe transport and storage practices.</p>
                    </div>
                  </div>
                </div>

                {/* Objective 4 */}
                <div className='bg-pink-50/50 border border-pink-200 rounded-lg p-4'>
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-md bg-rose-800/20 flex items-center justify-center shrink-0 mt-0.5'>
                      <svg className='w-4 h-4 text-pink-600' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                        <rect x='4' y='4' width='16' height='16' rx='1'/>
                        <path d='M9 9h6v6H9z'/>
                      </svg>
                    </div>
                    <div>
                      <p className='text-pink-900 font-semibold text-sm mb-1'>Attention to Detail and Accuracy</p>
                      <p className='text-pink-500 text-xs leading-relaxed'>To develop meticulous attention to detail in documenting, organizing, and cataloging records, ensuring data integrity and accuracy in all record management tasks.</p>
                    </div>
                  </div>
                </div>

                {/* Objective 5 */}
                <div className='bg-pink-50/50 border border-pink-200 rounded-lg p-4'>
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-md bg-yellow-500/20 flex items-center justify-center shrink-0 mt-0.5'>
                      <svg className='w-4 h-4 text-yellow-400' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                        <path d='M9 14l6-6M15 14l-6-6'/>
                        <path d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z'/>
                      </svg>
                    </div>
                    <div>
                      <p className='text-pink-900 font-semibold text-sm mb-1'>Administrative Support and Organization</p>
                      <p className='text-pink-500 text-xs leading-relaxed'>To improve organizational and administrative skills by supporting daily record office operations and maintaining efficient workflows in document management.</p>
                    </div>
                  </div>
                </div>

                {/* Objective 6 */}
                <div className='bg-pink-50/50 border border-pink-200 rounded-lg p-4'>
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-md bg-pink-500/20 flex items-center justify-center shrink-0 mt-0.5'>
                      <svg className='w-4 h-4 text-pink-400' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/>
                      </svg>
                    </div>
                    <div>
                      <p className='text-pink-900 font-semibold text-sm mb-1'>Problem-Solving and Efficiency</p>
                      <p className='text-pink-500 text-xs leading-relaxed'>To develop critical thinking skills in identifying challenges in record management and implementing practical solutions to improve office efficiency.</p>
                    </div>
                  </div>
                </div>

                {/* Objective 7 — full width */}
                <div className='bg-pink-50/50 border border-pink-200 rounded-lg p-4 sm:col-span-2'>
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-md bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5'>
                      <svg className='w-4 h-4 text-indigo-400' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/>
                      </svg>
                    </div>
                    <div>
                      <p className='text-pink-900 font-semibold text-sm mb-1'>Workplace Communication and Collaboration</p>
                      <p className='text-pink-500 text-xs leading-relaxed'>To develop communication and teamwork skills by collaborating with office staff, understanding workplace dynamics, and contributing to record office operations.</p>
                    </div>
                  </div>
                </div>

                {/* Objective 8 — full width */}
                <div className='bg-pink-50/50 border border-pink-200 rounded-lg p-4 sm:col-span-2'>
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-md bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5'>
                      <svg className='w-4 h-4 text-cyan-400' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/>
                      </svg>
                    </div>
                    <div>
                      <p className='text-pink-900 font-semibold text-sm mb-1'>Professional Development and Work Ethics</p>
                      <p className='text-pink-500 text-xs leading-relaxed'>To build discipline, responsibility, and professionalism in a records management environment, preparing for future careers in administration, records management, or IT support.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── C. TIME AND PLACE OF INTERNSHIP ── */}
          <section id='section-time-place'>
            <h2 className='text-xl sm:text-2xl font-bold text-pink-900 mb-1'>Time and Place of Internship</h2>
            <p className='text-sm text-pink-500 mb-4'>Details of training duration, location, and assigned role.</p>

            <div className='bg-pink-100/50 border border-pink-50 rounded-xl p-5 sm:p-6'>
              <p className='text-pink-700 text-sm sm:text-base leading-relaxed mb-5'>
                The internship was conducted at the OMSC College Library | Learning and Innovation Center, Labangan San Jose,
                where the student was assigned to assist in managing record systems, scanning and digitizing documents, organizing files,
                and handling medical record transportation. It provided hands-on
                experience in real record management operations and improved understanding of administrative and documentation workflows.
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                {/* Training Period */}
                <div className='bg-pink-50/50 border border-rose-800/30 rounded-lg p-4'>
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-md bg-rose-800/20 flex items-center justify-center shrink-0 mt-0.5'>
                      <svg className='w-4 h-4 text-pink-600' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                        <rect x='3' y='4' width='18' height='18' rx='2' ry='2'/>
                        <line x1='16' y1='2' x2='16' y2='6'/>
                        <line x1='8' y1='2' x2='8' y2='6'/>
                        <line x1='3' y1='10' x2='21' y2='10'/>
                      </svg>
                    </div>
                    <div>
                      <p className='text-pink-600 font-semibold text-sm mb-1'>Training Period</p>
                      <p className='text-pink-900 text-sm font-medium'>January 27, 2026 – April 28, 2026</p>
                      <p className='text-pink-500 text-xs mt-0.5'>489 total hours completed</p>
                    </div>
                  </div>
                </div>

                {/* Place of Internship */}
                <div className='bg-pink-50/50 border border-rose-800/30 rounded-lg p-4'>
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-md bg-rose-800/20 flex items-center justify-center shrink-0 mt-0.5'>
                      <svg className='w-4 h-4 text-pink-600' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                        <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/>
                        <circle cx='12' cy='10' r='3'/>
                      </svg>
                    </div>
                    <div>
                      <p className='text-pink-600 font-semibold text-sm mb-1'>Place of Internship</p>
                      <p className='text-pink-900 text-sm font-medium'>Occidental Mindoro State College – San Jose Campus</p>
                      <p className='text-pink-500 text-xs mt-0.5'>Records Office</p>
                    </div>
                  </div>
                </div>

                {/* Role */}
                <div className='bg-pink-50/50 border border-rose-800/30 rounded-lg p-4'>
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-md bg-rose-800/20 flex items-center justify-center shrink-0 mt-0.5'>
                      <svg className='w-4 h-4 text-pink-600' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z'/>
                      </svg>
                    </div>
                    <div>
                      <p className='text-pink-600 font-semibold text-sm mb-1'>Role</p>
                      <p className='text-pink-900 text-sm font-medium'>Intern / Records Management Assistant</p>
                      <p className='text-pink-500 text-xs mt-0.5'>Records Office</p>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className='bg-pink-50/50 border border-orange-500/30 rounded-lg p-4'>
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-md bg-orange-500/20 flex items-center justify-center shrink-0 mt-0.5'>
                      <svg className='w-4 h-4 text-orange-400' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                        <circle cx='12' cy='12' r='10'/>
                        <polyline points='12 6 12 12 16 14'/>
                      </svg>
                    </div>
                    <div>
                      <p className='text-orange-400 font-semibold text-sm mb-1'>Working Hours</p>
                      <p className='text-pink-900 text-sm font-medium'>8:00 AM – 5:00 PM</p>
                      <p className='text-pink-500 text-xs mt-0.5'>Monday to Friday</p>
                    </div>
                  </div>
                </div>

                {/* Work Environment — full width */}
                <div className='bg-pink-50/50 border border-indigo-500/30 rounded-lg p-4 sm:col-span-2'>
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-md bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5'>
                      <svg className='w-4 h-4 text-indigo-400' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 3L2 12h3v8h6v-5h2v5h6v-8h3L12 3z'/>
                      </svg>
                    </div>
                    <div>
                      <p className='text-indigo-400 font-semibold text-sm mb-1'>Work Environment</p>
                      <p className='text-pink-700 text-sm leading-relaxed'>Onsite office environment handling record management, digitization, filing, and administrative tasks in a structured Records Office setting.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className='text-center pt-4 pb-8 border-t border-pink-50/50'>
            <p className='text-xs text-slate-500'>
              © 2026 OJT E-Portfolio &nbsp;·&nbsp;{' '}
              <span className='text-pink-600'>Student Internship Documentation</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

