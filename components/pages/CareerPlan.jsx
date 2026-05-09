export function CareerPlan() {
  const milestones = [
    {
      timeline: '0–2 YEARS',
      title: 'SHORT-TERM',
      description: 'Secure a position where I can apply my skills in records handling, office support, or basic IT functions. My goal is to gain practical experience, improve my efficiency at work, and build a strong foundation in both technical and administrative tasks.',
    },
    {
      timeline: '3–5 YEARS',
      title: 'MID-TERM',
      description: 'Develop into a more skilled professional by taking on roles that involve data management, system support, or process improvement. I plan to enhance my knowledge in digital tools and database systems while becoming more independent and dependable in handling responsibilities.',
    },
    {
      timeline: '5+ YEARS',
      title: 'LONG-TERM',
      description: 'Build a stable and progressive career in the field of Information Technology or office systems management. I aim to take on leadership roles and contribute to improving systems and workflows that increase productivity and organization within a company.',
    },
  ];

  return (
    <div className='min-h-screen p-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-sm text-slate-400 mb-8'>
          <span className='text-rose-700'>E-Portfolio</span>
          <span className='mx-2'>›</span>
          <span>Career Plan</span>
        </div>

        <h1 className='text-4xl font-bold text-white mb-8'>Career Plan</h1>



        <h2 className='text-2xl font-semibold text-white mb-6'>Career Plans</h2>

        <div className='space-y-6'>
          {milestones.map((milestone, idx) => (
            <div
              key={idx}
              className='bg-slate-800/40 backdrop-blur border border-rose-800/20 rounded-xl p-6 hover:border-rose-700/40 transition-all'
            >
              <p className='text-rose-700 text-sm font-semibold mb-2'>{milestone.timeline}</p>
              <h3 className='text-lg font-bold text-white mb-3'>{milestone.title}</h3>
              <p className='text-slate-300 text-sm leading-relaxed'>{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
