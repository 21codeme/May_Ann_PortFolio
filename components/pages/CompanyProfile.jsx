import { useEffect } from 'react';
import { Eye, CheckCircle, Network, Shield, Database, Wrench } from 'lucide-react';

const SECTION_ANCHORS = {
  'company-profile': 'section-overview',
  'company-overview': 'section-overview',
  'company-nature': 'section-nature',
  'company-mission': 'section-mission',
  'company-history': 'section-history',
  'company-structure': 'section-structure',
};

export function CompanyProfile({ section }) {
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
    <div className='min-h-screen p-4 sm:p-6 md:p-8 bg-white'>
      <div className='max-w-6xl mx-auto'>
        {/* Breadcrumb */}
        <div className='text-sm text-pink-500 mb-8'>
          <span className='text-pink-600'>E-Portfolio</span>
          <span className='mx-2'>›</span>
          <span>II. Company Profile</span>
        </div>

        <h1 className='text-2xl sm:text-3xl font-bold text-pink-900 mb-8'>Company Profile</h1>

        <div className='space-y-16'>
          
          {/* Section 1: Company Overview */}
          <section id='section-overview'>
            <h2 className='text-xl sm:text-2xl font-bold text-pink-900 mb-1'>Company Overview</h2>
            <p className='text-sm text-pink-500 mb-6'>Overview of OMSC College Library | Learning and Innovation Center</p>
            
            <div className='bg-pink-50/50 backdrop-blur border border-pink-200/50 rounded-2xl p-6 sm:p-10 mb-6'>
              <p className='text-pink-700 leading-relaxed mb-8'>
                Occidental Mindoro State College (OMSC) – OMSC College Library | Learning and Innovation Center, Labangan San Jose is a premier public higher education institution that provides quality education and training to students in various fields. The Library plays a vital role in managing the institution&apos;s record management systems, document organization, medical record handling, and information storage services, ensuring efficient and secure operations across all campus administrative functions.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex gap-4 p-5 bg-pink-200/30 rounded-xl border border-rose-800/20'>
                  <div className='flex-shrink-0'>
                    <Database className='w-6 h-6 text-pink-600' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-pink-900 mb-1'>Record Organization & Management</h3>
                    <p className='text-sm text-pink-500'>Organizes and maintains institutional records and documents.</p>
                  </div>
                </div>

                <div className='flex gap-4 p-5 bg-pink-200/30 rounded-xl border border-green-500/20'>
                  <div className='flex-shrink-0'>
                    <Network className='w-6 h-6 text-green-400' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-pink-900 mb-1'>Document Digitization & Scanning</h3>
                    <p className='text-sm text-pink-500'>Digitizes and scans records for efficient digital storage.</p>
                  </div>
                </div>

                <div className='flex gap-4 p-5 bg-pink-200/30 rounded-xl border border-orange-500/20'>
                  <div className='flex-shrink-0'>
                    <Wrench className='w-6 h-6 text-orange-400' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-pink-900 mb-1'>File Management & Storage</h3>
                    <p className='text-sm text-pink-500'>Manages file storage systems and document retrieval services.</p>
                  </div>
                </div>

                <div className='flex gap-4 p-5 bg-pink-200/30 rounded-xl border border-rose-800/20'>
                  <div className='flex-shrink-0'>
                    <Shield className='w-6 h-6 text-pink-600' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-pink-900 mb-1'>Confidentiality & Data Protection</h3>
                    <p className='text-sm text-pink-500'>Ensures security and confidentiality of institutional records.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Nature of Agency */}
          <section id='section-nature'>
            <h2 className='text-xl sm:text-2xl font-bold text-pink-900 mb-1'>Nature of the Agency</h2>
            <p className='text-sm text-pink-500 mb-6'>Functions and responsibilities of the OMSC College Library | Learning and Innovation Center</p>
            
            <div className='bg-pink-50/50 backdrop-blur border border-pink-200/50 rounded-2xl p-6 sm:p-10'>
              <p className='text-pink-700 leading-relaxed mb-8'>
                The OMSC College Library | Learning and Innovation Center, Labangan San Jose is an administrative unit responsible for managing and maintaining the institution&apos;s record systems, document organization, digitization, and storage services. It provides a professional environment where organizational expertise, accuracy, and responsiveness ensure reliable and secure record management operations that support the institution&apos;s academic and administrative missions.
              </p>

              <div className='rounded-2xl overflow-hidden border border-pink-300'>
                <img
                  src='/omsc-library.jpg'
                  alt='OMSC College Library | Learning and Innovation Center'
                  className='w-full h-auto object-cover'
                />
              </div>
              <p className='text-center text-sm text-pink-500 mt-3'>OMSC College Library | Learning and Innovation Center, Labangan San Jose</p>
            </div>
          </section>

          {/* Section 3: Vision & Mission */}
          <section id='section-mission'>
            <h2 className='text-xl sm:text-2xl font-bold text-pink-900 mb-1'>Vision and Mission</h2>
            <p className='text-sm text-pink-500 mb-6'>The guiding principles of Occidental Mindoro State College</p>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='border border-pink-200/50 rounded-2xl p-8 bg-pink-50/50'>
                <div className='flex items-center gap-3 mb-6'>
                  <Eye className='w-6 h-6 text-pink-600' />
                  <h3 className='text-lg font-semibold text-pink-900'>Vision</h3>
                </div>
                <p className='text-pink-700 leading-relaxed text-base'>
                  A premier higher education institution that develops globally competitive, locally responsive, innovative professionals, and life-long learners.
                </p>
              </div>

              <div className='border border-pink-200/50 rounded-2xl p-8 bg-pink-50/50'>
                <div className='flex items-center gap-3 mb-6'>
                  <CheckCircle className='w-6 h-6 text-green-400' />
                  <h3 className='text-lg font-semibold text-pink-900'>Mission</h3>
                </div>
                <p className='text-pink-700 leading-relaxed text-base'>
                  OMSC is committed to produce intellectual and human capital by developing excellent graduates through outcomes-based instruction, relevant research, responsive technical advisory services, community engagement, and sustainable production.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: History & Background */}
          <section id='section-history'>
            <h2 className='text-xl sm:text-2xl font-bold text-pink-900 mb-1'>History & Background</h2>
            <p className='text-sm text-pink-500 mb-6'>The development and expansion of Occidental Mindoro State College</p>
            
            <div className='bg-pink-50/50 backdrop-blur border border-pink-200/50 rounded-2xl p-6 sm:p-10'>
              <p className='text-pink-700 leading-relaxed mb-8'>
                Occidental Mindoro State College was established in 1966 as a Barrio High School, chartered as Occidental Mindoro National College on June 24, 1983, renamed as Occidental Mindoro State College on July 27, 2009, and finally proposed for conversion into Occidental Mindoro State University by virtue of Republic Act 11587. The OMSC College Library | Learning and Innovation Center, Labangan San Jose serves as a crucial hub for the institution&apos;s technical and administrative operations.
              </p>

              <div className='space-y-4'>
                <div className='border-l-4 border-pink-600 pl-6 py-3'>
                  <h4 className='font-semibold text-pink-900 text-lg mb-2'>OMSC Main Campus</h4>
                  <p className='text-pink-500 text-sm'>
                    Located in Labangan, San Jose, the Main Campus sits on 8.7 hectares of land and serves more than 10,150 students. It offers multiple colleges and programs including Arts, Business, Criminal Justice, Engineering, Architecture, and Hospitality Management, known for strong board exam performance and accredited programs.
                  </p>
                </div>

                <div className='border-l-4 border-pink-600 pl-6 py-3'>
                  <h4 className='font-semibold text-pink-900 text-lg mb-2'>OMSC San Jose Campus</h4>
                  <p className='text-pink-500 text-sm'>
                    A training ground for educators, midwives, and IT professionals with 2,892 enrollees. It is known for producing quality graduates and maintaining strong performance in licensure examinations, including being a Top Performing School in Midwifery and having a Level IV accredited BSIT program.
                  </p>
                </div>

                <div className='border-l-4 border-pink-600 pl-6 py-3'>
                  <h4 className='font-semibold text-pink-900 text-lg mb-2'>OMSC Murtha Campus</h4>
                  <p className='text-pink-500 text-sm'>
                    Located 7 kilometers from San Jose Campus, it serves 1,113 agriculture students and focuses on agro-forestry, animal husbandry, rice and vegetable production, and food processing under expert faculty members.
                  </p>
                </div>

                <div className='border-l-4 border-pink-600 pl-6 py-3'>
                  <h4 className='font-semibold text-pink-900 text-lg mb-2'>OMSC Sablayan Campus</h4>
                  <p className='text-pink-500 text-sm'>
                    Established in 2011, it has grown steadily with 3,243 students and offers several programs while supporting student development and regional education needs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Organizational Structure */}
          <section id='section-structure'>
            <h2 className='text-xl sm:text-2xl font-bold text-pink-900 mb-1'>Organizational Structure</h2>
            <p className='text-sm text-pink-500 mb-6'>The organizational hierarchy of the OMSC College Library</p>
            
            <div className='bg-pink-50/50 backdrop-blur border border-pink-200/50 rounded-2xl p-6 sm:p-10'>
              <div className='flex items-center justify-center'>
                <img 
                  src='/omsc-org-chart.jpg' 
                  alt='OMSC Main Library Organizational Chart' 
                  className='max-w-full h-auto rounded-lg border border-pink-300/50'
                />
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className='text-center pt-4 pb-8 border-t border-pink-200/50'>
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
