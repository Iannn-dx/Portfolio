import { useState } from 'react'
import AnimatedGridPattern from "./components/animatedGridPattern"
import viteLogo from "./assets/vite.svg"

function App() {
  const [isDark, setIsDark] = useState(true)

  const bg = isDark ? '#0f0f17' : '#ffffff'
  const muted = isDark ? 'text-gray-400' : 'text-gray-600'

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: bg, color: isDark ? '#fff' : '#000' }}>
      <AnimatedGridPattern />
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg font-semibold shadow-lg transition-colors duration-300 cursor-pointer text-sm"
        style={{ backgroundColor: isDark ? '#1e1e30' : '#e0e0e0', color: isDark ? '#fff' : '#000' }}
      >
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>

      <div className="max-w-5xl mx-auto px-6 py-10">

          <div className="flex items-center gap-5 p-6 mb-6">
            <img
              src="profile.jpg"
              alt="Profile"
              className="w-24 h-24 object-cover border-2 border-gray-700"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">Ian Khristopher Teves</h1>
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className={`text-sm mt-1 ${muted}`}>22 Year Old | Web Developer / IT Helpdesk Staff</p>
              {/* <p className={`text-sm mt-1 ${muted}`}> GitHub | Aspiring Web Developer</p> */}
              <div className="flex gap-3 mt-4 items-center">
                <button className="px-5 py-2 rounded-lg font-medium text-sm transition-colors duration-300 cursor-pointer" style={{ backgroundColor: isDark ? '#1e1e30' : '#e0e0e0', color: isDark ? '#fff' : '#000' }}>View Resume</button>
                <button className="px-5 py-2 rounded-lg font-medium text-sm transition-colors duration-300 cursor-pointer" style={{ backgroundColor: isDark ? '#1e1e30' : '#e0e0e0', color: isDark ? '#fff' : '#000' }}>Send Email</button>
                <img src={viteLogo} alt="Vite" className="h-5 ml-1" />
              </div>
            </div>
          </div>
        {/* </div> */}

        <div className="mb-10">
          <p className={`text-xs uppercase tracking-[0.3em] ${muted}`}>01 / About</p>
          <div className="border-t pt-6" style={{ borderColor: isDark ? '#ffffff15' : '#00000015' }}>
            <p className="text-base leading-loose max-w-2xl">
              I’m an IT graduate and currently working as an IT Staff / Computer Programmer. I focus on web development, system development, and IT support. I enjoy building simple, practical solutions and continuously learning new technologies.
            </p>
            <p className={`text-base leading-loose max-w-2xl mt-4 ${muted}`}>
              I enjoy turning ideas into functional, real-world solutions through clean code and thoughtful design. Always eager to learn, collaborate, and grow in the ever-evolving tech industry.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <p className={`text-xs uppercase tracking-[0.3em] ${muted}`}>02 / Experience</p>
          <div className="border-t" style={{ borderColor: isDark ? '#ffffff15' : '#00000015' }}>
            {[
              { role: 'IT Programmer / IT Staff', company: 'Cagayan Museum and Historical Research Center', year: '2026'},
              { role: 'OJT Internship', company: 'Office Of Civil Defense', year: '2025' },
              { role: 'Academic / Project Experience', company: 'Cagayan State University - Carig Campus', year: '2022-2026' },
              
            ].map((item, i) => (
              <div key={i} className="flex items-start justify-between py-5 border-b" style={{ borderColor: isDark ? '#ffffff10' : '#00000010' }}>
                <div className="flex items-start gap-4">
                  <span className="text-xs mt-1" style={{ color: '#6c63ff' }}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="font-medium text-sm">{item.role}</p>
                    {item.company && <p className={`text-xs mt-0.5 ${muted}`}>{item.company}</p>}
                  </div>
                </div>
                <span className={`text-xs ${muted}`}>{item.year}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <p className={`text-xs uppercase tracking-[0.3em] mb-6 ${muted}`}>03 / Tech Stack</p>
          <div className="border-t pt-6" style={{ borderColor: isDark ? '#ffffff15' : '#00000015' }}>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <p className='w-full text-sm uppercase tracking-[0.3em] ${muted}'>Frontend</p>
              {['HTML', 'CSS', 'Tailwind CSS', 'Javascript', 'React(Vite)', 'Bootstrap',].map((tech) => (
                <span key={tech} className={`text-sm ${muted}`}>{tech}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
              <p className='w-full text-sm uppercase tracking-[0.3em] ${muted}'>Backend and Database</p>
              {['PHP', 'Laravel', 'MySQL', 'PostgreSQL'].map((tech) => (
                <span key={tech} className={`text-sm ${muted}`}>{tech}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
              <p className='w-full text-sm uppercase tracking-[0.3em] ${muted}'>Tools and Framework</p>
              {['GitHub', 'VS code', 'Figma', 'Git', 'Wordpress',].map((tech) => (
                <span key={tech} className={`text-sm ${muted}`}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
