'use client';

import { useEffect } from 'react';
import { Calendar, Clock, TrendingUp, BarChart3 } from 'lucide-react';

const SECTION_ANCHORS = {
  'work-experience': 'section-weekly',
  'work-weekly': 'section-weekly',
  'work-timerecord': 'section-timerecord',
  'work-progress': 'section-progress',
  'work-analysis': 'section-analysis',
};

export function WorkExperience({ section }) {
  useEffect(() => {
    const anchorId = SECTION_ANCHORS[section];
    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [section]);

  return (
    <div className='min-h-screen bg-white'>
      <div className='p-4 sm:p-8 max-w-6xl mx-auto'>
        {/* Breadcrumb */}
        <div className='text-xs sm:text-sm text-pink-500 mb-6 sm:mb-8'>
          <span className='text-pink-600'>E-Portfolio</span>
          <span className='mx-2'>â€º</span>
          <span>III. Work Experiences</span>
        </div>

        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-pink-900 mb-1 sm:mb-2'>Work Experiences</h1>
        <p className='text-xs sm:text-sm text-pink-500 mb-6 sm:mb-10'>Record of internship activities and professional development</p>

        <div className='space-y-8 sm:space-y-12'>

          {/* Section 1: Weekly Reports */}
          <section id='section-weekly'>
            <h2 className='text-xl sm:text-2xl font-bold text-pink-900 mb-2 flex items-center gap-3'>
              <Calendar className='w-5 sm:w-6 h-5 sm:h-6 text-pink-600' />
              Weekly Reports
            </h2>
            <p className='text-xs sm:text-sm text-pink-500 mb-6 sm:mb-8'>Summary of weekly internship activities and learnings</p>
            
            <div className='bg-pink-50/50 backdrop-blur border border-pink-200/50 rounded-lg sm:rounded-2xl p-4 sm:p-8'>
              <p className='text-pink-700 leading-relaxed mb-6 sm:mb-8'>
                This section presents a weekly narrative summary of the Records Office internship, highlighting key activities, learnings, and experiences throughout the training period.
              </p>

              <div className='space-y-4 sm:space-y-6'>
                {/* Week 1 */}
                <div className='border-l-4 border-pink-600 pl-3 sm:pl-6 py-3 sm:py-4 bg-pink-200/30 rounded-lg'>
                  <h3 className='text-pink-900 font-bold mb-2 text-sm sm:text-base'>January 27 - February 2, 2026</h3>
                  <p className='text-pink-500 text-xs sm:text-sm mb-3 sm:mb-4'>38 Hours</p>
                  <div className='space-y-3 sm:space-y-4'>
                    <div>
                      <p className='text-pink-600 font-semibold mb-2 text-xs sm:text-sm'>Activities</p>
                      <p className='text-pink-700 text-xs sm:text-sm leading-relaxed'>Orientation and introduction to Records Office structure. Assisted in organizing and filing documents alphabetically. Learned proper handling and storage procedures for institutional records. Observed staff scanning and digitizing paper records.</p>
                    </div>
                    <div>
                      <p className='text-green-400 font-semibold mb-2 text-xs sm:text-sm'>Learnings</p>
                      <p className='text-pink-700 text-xs sm:text-sm leading-relaxed'>Gained understanding of Records Office operations and organizational structure. Learned the importance of accuracy and attention to detail in record management. Developed appreciation for systematic filing and proper record keeping standards.</p>
                    </div>
                    <div>
                      <p className='text-red-400 font-semibold mb-2 text-xs sm:text-sm'>Issues</p>
                      <p className='text-pink-700 text-xs sm:text-sm leading-relaxed'>Initial unfamiliarity with the filing system. Time management with large volumes of documents. Need for better understanding of alphabetical organization rules.</p>
                    </div>
                  </div>
                </div>

                {/* Week 2 */}
                <div className='border-l-4 border-pink-600 pl-3 sm:pl-6 py-3 sm:py-4 bg-pink-200/30 rounded-lg'>
                  <h3 className='text-pink-900 font-bold mb-2 text-sm sm:text-base'>February 3-9, 2026</h3>
                  <p className='text-pink-500 text-xs sm:text-sm mb-3 sm:mb-4'>40 Hours</p>
                  <div className='space-y-3 sm:space-y-4'>
                    <div>
                      <p className='text-pink-600 font-semibold mb-2 text-xs sm:text-sm'>Activities</p>
                      <p className='text-pink-700 text-xs sm:text-sm leading-relaxed'>Began scanning and digitizing records using office scanners. Labeled and covered file boxes for proper storage. Transported medical records from the clinic to the records office. Continued organizing documents alphabetically.</p>
                    </div>
                    <div>
                      <p className='text-green-400 font-semibold mb-2 text-xs sm:text-sm'>Learnings</p>
                      <p className='text-pink-700 text-xs sm:text-sm leading-relaxed'>Mastered basic scanning and digitization techniques. Understood the importance of proper labeling for document retrieval. Learned proper handling procedures for sensitive medical records. Improved speed and accuracy in document organization.</p>
                    </div>
                    <div>
                      <p className='text-red-400 font-semibold mb-2 text-xs sm:text-sm'>Issues</p>
                      <p className='text-pink-700 text-xs sm:text-sm leading-relaxed'>Scanner occasionally malfunctioned during heavy use. Physical fatigue from carrying multiple file boxes. Some difficulty with consistent label formatting across different file types.</p>
                    </div>
                  </div>
                </div>

                {/* Week 3 */}
                <div className='border-l-4 border-pink-600 pl-3 sm:pl-6 py-3 sm:py-4 bg-pink-200/30 rounded-lg'>
                  <h3 className='text-pink-900 font-bold mb-2 text-sm sm:text-base'>February 10-16, 2026</h3>
                  <p className='text-pink-500 text-xs sm:text-sm mb-3 sm:mb-4'>42 Hours</p>
                  <div className='space-y-3 sm:space-y-4'>
                    <div>
                      <p className='text-pink-600 font-semibold mb-2 text-xs sm:text-sm'>Activities</p>
                      <p className='text-pink-700 text-xs sm:text-sm leading-relaxed'>Advanced scanning and digitization of older records. Organized and cross-referenced newly digitized files in the system. Performed quality checks on scanned documents for accuracy. Assisted in creating backup copies of digital records.</p>
                    </div>
                    <div>
                      <p className='text-green-400 font-semibold mb-2 text-xs sm:text-sm'>Learnings</p>
                      <p className='text-pink-700 text-xs sm:text-sm leading-relaxed'>Learned quality assurance procedures for digitized documents. Understood the importance of proper file organization and naming conventions. Gained knowledge in data protection and backup systems. Improved proficiency in record management software.</p>
                    </div>
                    <div>
                      <p className='text-red-400 font-semibold mb-2 text-xs sm:text-sm'>Issues</p>
                      <p className='text-pink-700 text-xs sm:text-sm leading-relaxed'>Complex file naming systems required additional training. Some older documents were difficult to scan due to deterioration. Limited access to certain administrative records for confidentiality reasons.</p>
                    </div>
                  </div>
                </div>

                {/* Week 4 */}
                <div className='border-l-4 border-pink-600 pl-3 sm:pl-6 py-3 sm:py-4 bg-pink-200/30 rounded-lg'>
                  <h3 className='text-pink-900 font-bold mb-2 text-sm sm:text-base'>February 17-23, 2026</h3>
                  <p className='text-pink-500 text-xs sm:text-sm mb-3 sm:mb-4'>40 Hours</p>
                  <div className='space-y-3 sm:space-y-4'>
                    <div>
                      <p className='text-pink-600 font-semibold mb-2 text-xs sm:text-sm'>Activities</p>
                      <p className='text-pink-700 text-xs sm:text-sm leading-relaxed'>Completed scanning of all scheduled records for the period. Organized and filed newly processed documents in designated storage areas. Updated record inventory and tracking systems. Assisted supervisor with record retrieval requests from other departments.</p>
                    </div>
                    <div>
                      <p className='text-green-400 font-semibold mb-2 text-xs sm:text-sm'>Learnings</p>
                      <p className='text-pink-700 text-xs sm:text-sm leading-relaxed'>Developed proficiency in completing repetitive tasks while maintaining high standards. Understood interdepartmental communication and collaboration in record management. Learned the importance of maintaining accurate inventory systems. Improved time management and workload prioritization skills.</p>
                    </div>
                    <div>
                      <p className='text-red-400 font-semibold mb-2 text-xs sm:text-sm'>Issues</p>
                      <p className='text-pink-700 text-xs sm:text-sm leading-relaxed'>High volume of requests sometimes delayed routine digitization work. Need for better coordination system between departments. Occasional discrepancies in record inventory required investigation and correction.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Daily Time Record */}
          <section id='section-timerecord'>
            <h2 className='text-xl sm:text-2xl font-bold text-pink-900 mb-2 flex items-center gap-3'>
              <Clock className='w-5 sm:w-6 h-5 sm:h-6 text-pink-600' />
              Daily Time Record (DTR)
            </h2>
            <p className='text-xs sm:text-sm text-pink-500 mb-6 sm:mb-8'>Internship Duration: January 27, 2026 â€“ May 6, 2026</p>
            
            <div className='bg-pink-50/50 backdrop-blur border border-pink-200/50 rounded-lg sm:rounded-2xl p-4 sm:p-8'>
              <div className='mb-6 sm:mb-8'>
                <p className='text-lg sm:text-2xl font-bold text-pink-600 mb-4 sm:mb-6'>386:50 total hours completed</p>
                <p className='text-xs sm:text-sm text-pink-700 leading-relaxed mb-6'>
                  This section presents the daily attendance record of the internship, including time in, time out, and total hours rendered per day.
                </p>
              </div>

              {/* Monthly Summary Cards */}
              <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-6 sm:mb-10'>
                <div className='bg-pink-50 rounded-lg p-2 sm:p-4 border border-pink-200'>
                  <p className='text-pink-500 text-xs mb-1 sm:mb-2'>January</p>
                  <p className='text-base sm:text-lg font-bold text-pink-900'>38:52</p>
                </div>
                <div className='bg-pink-50 rounded-lg p-2 sm:p-4 border border-pink-200'>
                  <p className='text-pink-500 text-xs mb-1 sm:mb-2'>February</p>
                  <p className='text-base sm:text-lg font-bold text-pink-900'>93:04</p>
                </div>
                <div className='bg-pink-50 rounded-lg p-2 sm:p-4 border border-pink-200'>
                  <p className='text-pink-500 text-xs mb-1 sm:mb-2'>March</p>
                  <p className='text-base sm:text-lg font-bold text-pink-900'>131:33</p>
                </div>
                <div className='bg-pink-50 rounded-lg p-2 sm:p-4 border border-pink-200'>
                  <p className='text-pink-500 text-xs mb-1 sm:mb-2'>April</p>
                  <p className='text-base sm:text-lg font-bold text-pink-900'>102:56</p>
                </div>
                <div className='bg-pink-50 rounded-lg p-2 sm:p-4 border border-pink-200'>
                  <p className='text-pink-500 text-xs mb-1 sm:mb-2'>May</p>
                  <p className='text-base sm:text-lg font-bold text-pink-900'>20:25</p>
                </div>
                <div className='bg-pink-100 rounded-lg p-2 sm:p-4 border border-pink-300'>
                  <p className='text-pink-500 text-xs mb-1 sm:mb-2'>Total</p>
                  <p className='text-base sm:text-lg font-bold text-pink-600'>386:50</p>
                </div>
              </div>

              {/* Reusable table header */}
              {[
                {
                  month: 'January 2026',
                  total: '38:52',
                  rows: [
                    { date: '01/26/2026', amIn: '', amOut: '', pmIn: '1:00 PM', pmOut: '4:00 PM', hours: '3:00' },
                    { date: '01/27/2026', amIn: '7:53 AM', amOut: '12:00 PM', pmIn: '12:40 PM', pmOut: '5:05 PM', hours: '8:05' },
                    { date: '01/28/2026', amIn: '7:51 AM', amOut: '11:30 AM', pmIn: '12:00 PM', pmOut: '7:00 PM', hours: '10:00' },
                    { date: '01/29/2026', amIn: '8:00 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '5:00 PM', hours: '8:00' },
                    { date: '01/30/2026', amIn: '8:13 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '7:00 PM', hours: '9:47' },
                  ],
                },
                {
                  month: 'February 2026',
                  total: '93:04',
                  rows: [
                    { date: '02/02/2026', amIn: '7:25 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '4:06 PM', hours: '7:41' },
                    { date: '02/04/2026', amIn: '8:09 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '1:41 PM', hours: '4:32' },
                    { date: '02/05/2026', amIn: '8:13 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '7:00 PM', hours: '9:47' },
                    { date: '02/06/2026', amIn: '8:05 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '4:05 PM', hours: '7:00' },
                    { date: '02/16/2026', amIn: '7:05 AM', amOut: '11:02 AM', pmIn: '12:00 PM', pmOut: '4:00 PM', hours: '7:55' },
                    { date: '02/18/2026', amIn: '8:00 AM', amOut: '11:04 AM', pmIn: '11:54 AM', pmOut: '5:00 PM', hours: '8:00' },
                    { date: '02/20/2026', amIn: '7:59 AM', amOut: '11:00 AM', pmIn: '12:01 PM', pmOut: '5:00 PM', hours: '7:59' },
                    { date: '02/23/2026', amIn: '7:59 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '4:00 PM', hours: '7:01' },
                    { date: '02/24/2026', amIn: '8:00 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '5:00 PM', hours: '8:00' },
                    { date: '02/25/2026', amIn: '8:20 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '5:00 PM', hours: '7:40' },
                    { date: '02/26/2026', amIn: '8:09 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '5:00 PM', hours: '7:51' },
                    { date: '02/27/2026', amIn: '8:22 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '7:00 PM', hours: '9:38' },
                  ],
                },
                {
                  month: 'March 2026',
                  total: '131:33',
                  rows: [
                    { date: '02/03/2026', amIn: '7:08 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '4:02 PM', hours: '7:54' },
                    { date: '03/03/2026', amIn: '8:20 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '5:08 PM', hours: '7:48' },
                    { date: '04/03/2026', amIn: '8:04 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '5:30 PM', hours: '9:26' },
                    { date: '05/03/2026', amIn: '8:00 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '7:00 PM', hours: '10:00' },
                    { date: '06/03/2026', amIn: '8:24 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '5:10 PM', hours: '7:46' },
                    { date: '09/03/2026', amIn: '7:18 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '6:20 PM', hours: '10:02' },
                    { date: '10/03/2026', amIn: '7:39 AM', amOut: '11:00 AM', pmIn: '12:13 PM', pmOut: '6:05 PM', hours: '8:52' },
                    { date: '11/03/2026', amIn: '', amOut: '', pmIn: '12:35 PM', pmOut: '6:02 PM', hours: '5:27' },
                    { date: '12/03/2026', amIn: '7:50 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '7:00 PM', hours: '10:00' },
                    { date: '13/03/2026', amIn: '9:14 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '2:30 PM', hours: '4:16' },
                    { date: '16/03/2026', amIn: '7:47 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '5:00 PM', hours: '8:13' },
                    { date: '17/03/2026', amIn: '', amOut: '', pmIn: '11:45 AM', pmOut: '2:05 PM', hours: '2:20' },
                    { date: '18/03/2026', amIn: '8:00 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '5:00 PM', hours: '8:00' },
                    { date: '19/03/2026', amIn: '', amOut: '', pmIn: '12:46 PM', pmOut: '5:35 PM', hours: '4:49' },
                    { date: '23/03/2026', amIn: '8:00 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '7:00 PM', hours: '10:00' },
                    { date: '25/03/2026', amIn: '8:00 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '5:30 PM', hours: '8:30' },
                    { date: '27/03/2026', amIn: '8:00 AM', amOut: '11:00 AM', pmIn: '12:50 PM', pmOut: '7:00 PM', hours: '9:10' },
                  ],
                },
                {
                  month: 'April 2026',
                  total: '102:56',
                  rows: [
                    { date: '06/04/2026', amIn: '7:35 AM', amOut: '12:00 PM', pmIn: '1:00 PM', pmOut: '4:14 PM', hours: '7:39' },
                    { date: '07/04/2026', amIn: '9:30 AM', amOut: '12:00 PM', pmIn: '1:20 PM', pmOut: '5:11 PM', hours: '6:21' },
                    { date: '08/04/2026', amIn: '8:41 AM', amOut: '12:00 PM', pmIn: '1:00 PM', pmOut: '5:05 PM', hours: '7:24' },
                    { date: '10/04/2026', amIn: '7:58 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '5:02 PM', hours: '8:02' },
                    { date: '13/04/2026', amIn: '7:51 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '5:20 PM', hours: '8:29' },
                    { date: '15/04/2026', amIn: '7:30 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '7:00 PM', hours: '10:00' },
                    { date: '16/04/2026', amIn: '7:48 AM', amOut: '11:00 AM', pmIn: '', pmOut: '', hours: '3:00' },
                    { date: '20/04/2026', amIn: '7:40 AM', amOut: '12:00 PM', pmIn: '1:00 PM', pmOut: '6:02 PM', hours: '9:22' },
                    { date: '21/04/2026', amIn: '8:03 AM', amOut: '12:00 PM', pmIn: '1:00 PM', pmOut: '6:30 PM', hours: '9:27' },
                    { date: '22/04/2026', amIn: '7:53 AM', amOut: '12:00 PM', pmIn: '1:00 PM', pmOut: '7:00 PM', hours: '10:00' },
                    { date: '23/04/2026', amIn: '9:00 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '7:00 PM', hours: '9:00' },
                    { date: '28/04/2026', amIn: '7:40 AM', amOut: '11:00 AM', pmIn: '12:00 PM', pmOut: '5:40 PM', hours: '8:40' },
                    { date: '29/04/2026', amIn: '7:55 AM', amOut: '12:00 PM', pmIn: '1:00 PM', pmOut: '2:32 PM', hours: '5:32' },
                  ],
                },
                {
                  month: 'May 2026',
                  total: '20:25',
                  rows: [
                    { date: '04/05/2026', amIn: '7:29 AM', amOut: '12:00 PM', pmIn: '1:00 PM', pmOut: '7:00 PM', hours: '10:31' },
                    { date: '05/05/2026', amIn: '8:06 AM', amOut: '12:00 PM', pmIn: '1:00 PM', pmOut: '7:00 PM', hours: '9:54' },
                    { date: '06/05/2026', amIn: '8:30 AM', amOut: '', pmIn: '', pmOut: '', hours: '0:00' },
                  ],
                },
              ].map(({ month, total, rows }) => (
                <div key={month} className='mb-8 sm:mb-12'>
                  <h3 className='text-base sm:text-xl font-bold text-pink-900 mb-3 sm:mb-4'>{month}  Total: {total}</h3>
                  <div className='overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0'>
                    <table className='w-full text-xs sm:text-sm'>
                      <thead>
                        <tr className='bg-pink-200/50 border-b border-pink-300'>
                          <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-pink-700 font-semibold whitespace-nowrap'>Date</th>
                          <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-pink-700 font-semibold whitespace-nowrap'>AM In</th>
                          <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-pink-700 font-semibold whitespace-nowrap'>AM Out</th>
                          <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-pink-700 font-semibold whitespace-nowrap'>PM In</th>
                          <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-pink-700 font-semibold whitespace-nowrap'>PM Out</th>
                          <th className='px-2 sm:px-4 py-2 sm:py-3 text-left text-pink-600 font-semibold whitespace-nowrap'>Total Hours</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row, i) => (
                          <tr key={i} className='border-b border-pink-200 hover:bg-pink-200/30'>
                            <td className='px-2 sm:px-4 py-2 sm:py-3 text-pink-700 whitespace-nowrap'>{row.date}</td>
                            <td className='px-2 sm:px-4 py-2 sm:py-3 text-pink-700 whitespace-nowrap'>{row.amIn}</td>
                            <td className='px-2 sm:px-4 py-2 sm:py-3 text-pink-700 whitespace-nowrap'>{row.amOut}</td>
                            <td className='px-2 sm:px-4 py-2 sm:py-3 text-pink-700 whitespace-nowrap'>{row.pmIn}</td>
                            <td className='px-2 sm:px-4 py-2 sm:py-3 text-pink-700 whitespace-nowrap'>{row.pmOut}</td>
                            <td className='px-2 sm:px-4 py-2 sm:py-3 text-pink-600 font-semibold whitespace-nowrap'>{row.hours}</td>
                          </tr>
                        ))}
                        <tr className='bg-pink-100 font-bold'>
                          <td colSpan={5} className='px-2 sm:px-4 py-2 sm:py-3 text-pink-700 text-right'>{month.split(' ')[0]} Total Hours</td>
                          <td className='px-2 sm:px-4 py-2 sm:py-3 text-pink-600'>{total}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Internship Progress Report */}
          <section id='section-progress'>
            <h2 className='text-xl sm:text-2xl font-bold text-pink-900 mb-2 flex items-center gap-3'>
              <TrendingUp className='w-5 sm:w-6 h-5 sm:h-6 text-pink-600' />
              Internship Progress Report
            </h2>
            <p className='text-xs sm:text-sm text-pink-500 mb-6 sm:mb-8'>Weekly summary of tasks, completed work, and identified areas for improvement</p>
            
            <div className='bg-pink-50/50 backdrop-blur border border-pink-200/50 rounded-lg sm:rounded-2xl p-4 sm:p-8'>
              {[
                {
                  week: 'January 27 To January 30, 2026',
                  hours: '38:52',
                  rows: [
                    { obj: 'Orientation and familiarization with the OMSC College Library', status: 'Completed orientation; introduced to library staff and facilities', problem: 'Adjusting to library routines and understanding the layout of different sections' },
                    { obj: 'Assist in organizing and arranging library materials', status: 'Assisted in shelving books and arranging materials alphabetically', problem: 'Unfamiliarity with the Dewey Decimal Classification system' },
                    { obj: 'Observe library operations and services', status: 'Observed circulation desk operations and reference services', problem: 'Limited hands-on experience during the first days of orientation' },
                  ],
                },
                {
                  week: 'February 2 To February 27, 2026',
                  hours: '93:04',
                  rows: [
                    { obj: 'Assist in cataloging and processing new library materials', status: 'Helped in stamping, labeling, and processing newly acquired books', problem: 'Some books lacked complete bibliographic information for proper cataloging' },
                    { obj: 'Provide assistance at the circulation desk', status: 'Assisted in borrowing and returning of library materials', problem: 'Managing multiple patron requests simultaneously during peak hours' },
                    { obj: 'Organize and maintain library shelves', status: 'Conducted shelf reading and re-shelving of misplaced materials', problem: 'Large volume of materials required extended time for proper arrangement' },
                  ],
                },
                {
                  week: 'March 2 To March 27, 2026',
                  hours: '131:33',
                  rows: [
                    { obj: 'Assist in digitizing and encoding library records', status: 'Encoded bibliographic data of library materials into the library system', problem: 'Some older records had incomplete or illegible information' },
                    { obj: 'Support library programs and activities', status: 'Assisted in preparing materials for library-sponsored activities and events', problem: 'Coordinating schedules with library staff for activity preparations' },
                    { obj: 'Maintain cleanliness and orderliness of library areas', status: 'Regularly cleaned and organized reading areas and reference sections', problem: 'Ensuring consistent maintenance during busy library hours' },
                  ],
                },
                {
                  week: 'April 6 To April 29, 2026',
                  hours: '102:56',
                  rows: [
                    { obj: 'Assist in inventory and stock-taking of library materials', status: 'Participated in the annual inventory of library books and resources', problem: 'Discrepancies between physical count and system records required verification' },
                    { obj: 'Provide reference and reader assistance services', status: 'Guided library users in locating materials and using library resources', problem: 'Some patrons required extended assistance in finding specific references' },
                    { obj: 'Support administrative tasks of the library office', status: 'Assisted in preparing reports, filing documents, and encoding data', problem: 'Managing multiple administrative tasks within limited time' },
                  ],
                },
                {
                  week: 'May 4 To May 6, 2026',
                  hours: '20:25',
                  rows: [
                    { obj: 'Complete remaining library tasks and final documentation', status: 'Finalized all assigned tasks and submitted required internship documents', problem: 'Ensuring completeness of all required documents before the end of internship' },
                    { obj: 'Conduct exit interview and clearance', status: 'Completed exit procedures and obtained clearance from the library office', problem: 'Coordinating with different offices for clearance requirements' },
                  ],
                },
              ].map(({ week, hours, rows }, idx) => (
                <div key={idx} className='mb-6 sm:mb-8'>
                  <div className='bg-pink-200/50 rounded-lg p-4 mb-4'>
                    <h3 className='text-pink-900 font-bold text-sm sm:text-base'>{week}</h3>
                    <p className='text-pink-500 text-xs sm:text-sm'>{hours} Hours</p>
                  </div>
                  <div className='overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0'>
                    <table className='w-full text-xs sm:text-sm'>
                      <thead>
                        <tr className='border-b border-pink-300'>
                          <th className='px-3 sm:px-4 py-3 text-left text-pink-600 font-semibold w-1/3'>Objectives</th>
                          <th className='px-3 sm:px-4 py-3 text-left text-green-500 font-semibold w-1/3'>Work Status</th>
                          <th className='px-3 sm:px-4 py-3 text-left text-red-400 font-semibold w-1/3'>Problems Met</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row, ridx) => (
                          <tr key={ridx} className='border-b border-pink-200'>
                            <td className='px-3 sm:px-4 py-3 text-pink-700 align-top'>{row.obj}</td>
                            <td className='px-3 sm:px-4 py-3 text-pink-700 align-top'>{row.status}</td>
                            <td className='px-3 sm:px-4 py-3 text-pink-700 align-top'>{row.problem}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Internship Analysis Report */}
          <section id='section-analysis'>
            <h2 className='text-xl sm:text-2xl font-bold text-pink-900 mb-2 flex items-center gap-3'>
              <BarChart3 className='w-5 sm:w-6 h-5 sm:h-6 text-pink-600' />
              Internship Analysis Report
            </h2>
            <p className='text-xs sm:text-sm text-pink-500 mb-6 sm:mb-8'>Reflection on the OMSC College Library internship experience</p>
            
            <div className='bg-pink-50/50 backdrop-blur border border-pink-200/50 rounded-lg sm:rounded-2xl p-4 sm:p-8 space-y-6 sm:space-y-8'>
              <p className='text-pink-700 leading-relaxed'>
                This section discusses my experiences, observations, and learning during my internship at the OMSC College Library | Learning and Innovation Center, Labangan San Jose. It includes reflections about the workplace environment, supervision, challenges encountered, and the skills and values I developed throughout the training period.
              </p>

              {/* 1. Workplace Environment */}
              <div className='border-l-4 border-pink-600 pl-6 py-4'>
                <h3 className='text-pink-900 font-bold text-lg mb-4'>1. Workplace Environment</h3>
                <div className='space-y-4'>
                  <div>
                    <p className='text-pink-600 font-semibold mb-2'>The workplace environment was effective because:</p>
                    <p className='text-pink-700 text-sm leading-relaxed'>
                      The OMSC College Library maintained an orderly and systematic setup that helped staff and interns perform tasks efficiently. Books and library materials were arranged properly using the Dewey Decimal Classification system, making it easier to locate and manage resources. The library atmosphere encouraged productivity and cooperation among staff members, which made the learning experience more comfortable and engaging. The availability of library equipment and materials also helped interns become familiar with actual library procedures related to cataloging, circulation, and reference services.
                    </p>
                  </div>
                  <div>
                    <p className='text-red-400 font-semibold mb-2'>The workplace environment was challenging because:</p>
                    <p className='text-pink-700 text-sm leading-relaxed'>
                      Some tasks required extra care due to the confidential nature of certain library records and patron information, limiting direct access to specific data and procedures. There were also times when a large number of library materials needed to be processed within a limited period, requiring better time management and focus. Adjusting to library routines and understanding proper cataloging and classification procedures also took time during the first weeks of the internship.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Supervision */}
              <div className='border-l-4 border-green-400 pl-6 py-4'>
                <h3 className='text-pink-900 font-bold text-lg mb-4'>2. Supervision</h3>
                <div className='space-y-4'>
                  <div>
                    <p className='text-pink-600 font-semibold mb-2'>The most valuable contribution of the supervisor was:</p>
                    <p className='text-pink-700 text-sm leading-relaxed'>
                      The supervisor provided clear instructions and guidance regarding the correct handling, organizing, and processing of library materials. Through supervision and corrections, I learned the importance of accuracy, responsibility, and proper workplace behavior in a library setting. The encouragement and support given by the supervisor also helped me become more confident in completing tasks independently and efficiently.
                    </p>
                  </div>
                  <div>
                    <p className='text-red-400 font-semibold mb-2'>The supervisor could further improve the internship by:</p>
                    <p className='text-pink-700 text-sm leading-relaxed'>
                      Providing more discussions regarding advanced library systems and digital cataloging procedures would help interns gain broader knowledge about library operations. More scheduled evaluations or feedback sessions could also help interns identify their strengths and areas that need improvement throughout the training period.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Experiences and Events During Internship */}
              <div className='border-l-4 border-pink-600 pl-6 py-4'>
                <h3 className='text-pink-900 font-bold text-lg mb-4'>3. Experiences and Events During Internship</h3>
                <div className='space-y-4'>
                  <div>
                    <p className='text-pink-600 font-semibold mb-2'>The experiences that most influenced my internship were:</p>
                    <p className='text-pink-700 text-sm leading-relaxed'>
                      Performing tasks such as cataloging library materials, assisting patrons at the circulation desk, and organizing book shelves improved my attention to detail and patience. These responsibilities required consistency and careful handling of important library resources. Working in a professional library environment also taught me how to communicate effectively with library staff and patrons, and how to follow workplace standards and procedures.
                    </p>
                  </div>
                  <div>
                    <p className='text-red-400 font-semibold mb-2'>An important improvement observed in the organization was:</p>
                    <p className='text-pink-700 text-sm leading-relaxed'>
                      The library&apos;s use of organized classification systems and digital cataloging helped improve efficiency in managing library resources. This process reduced delays in locating materials and demonstrated how proper organization contributes to smoother library operations and better resource accessibility for students and faculty.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Personal Evaluation */}
              <div className='border-l-4 border-yellow-400 pl-6 py-4'>
                <h3 className='text-pink-900 font-bold text-lg mb-4'>4. Personal Evaluation</h3>
                <div className='space-y-4'>
                  <div>
                    <p className='text-pink-600 font-semibold mb-2'>The most significant lesson I learned was:</p>
                    <p className='text-pink-700 text-sm leading-relaxed'>
                      I learned that maintaining organization and accuracy is essential in every workplace. Even small responsibilities such as proper shelving and accurate cataloging contribute to the overall effectiveness of library operations when completed properly and responsibly. The internship also taught me the importance of discipline, cooperation, and adaptability in handling daily tasks and adjusting to a professional library environment.
                    </p>
                  </div>
                  <div>
                    <p className='text-red-400 font-semibold mb-2'>If given another opportunity to experience this internship, I would:</p>
                    <p className='text-pink-700 text-sm leading-relaxed'>
                      Become more proactive in learning different library systems and procedures to further improve my skills and understanding of library science and information management. I would also ask more questions and seek additional responsibilities to gain wider exposure to library operations. Additionally, I would continue practicing efficiency and confidence in handling tasks independently and assisting library patrons more effectively.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Overall Assessment */}
              <div className='border-l-4 border-cyan-400 pl-6 py-4'>
                <h3 className='text-pink-900 font-bold text-lg mb-4'>5. Overall Assessment</h3>
                <div className='space-y-4'>
                  <div>
                    <p className='text-pink-600 font-semibold mb-2'>The internship program could be improved by:</p>
                    <p className='text-pink-700 text-sm leading-relaxed'>
                      Providing interns with more orientation regarding library procedures and information management practices before assigning tasks. Additional exposure to digital library systems and administrative operations would also help interns gain more practical experience. Regular mentoring and performance discussions could further enhance the learning and development of interns throughout the training period.
                    </p>
                  </div>
                  <div>
                    <p className='text-green-400 font-semibold mb-2'>This internship experience provided insights into:</p>
                    <p className='text-pink-700 text-sm leading-relaxed'>
                      Career opportunities related to library science, information management, and Information Technology support services. The internship also strengthened my understanding of workplace discipline, teamwork, and responsibility in maintaining organized library operations. Most importantly, the experience motivated me to continue developing my knowledge and skills in preparation for future professional opportunities in library and information services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
