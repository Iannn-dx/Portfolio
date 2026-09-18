import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import AnimatedGridPattern from "./components/animatedGridPattern"
import Projects from "./Projects"
import Certificates from "./Certificates"

function App() {
  const [isDark, setIsDark] = useState(true)
  const [page, setPage] = useState(window.location.pathname)

  useEffect(() => {
    const handleNav = () => setPage(window.location.pathname)
    window.addEventListener("popstate", handleNav)
    return () => window.removeEventListener("popstate", handleNav)
  }, [])

  const navigate = (path: string) => {
    window.history.pushState({}, "", path)
    setPage(path)
  }

  if (page === "/projects") {
    return <Projects isDark={isDark} setIsDark={setIsDark} onBack={() => navigate("/")} />
  }

  if (page === "/certificates") {
    return <Certificates isDark={isDark} setIsDark={setIsDark} onBack={() => navigate("/")} />
  }

  const bg = isDark ? '#0f0f17' : '#ffffff'
  const muted = isDark ? 'text-gray-400' : 'text-gray-600'

  return (
    <div className="relative min-h-screen transition-colors duration-300" style={{ backgroundColor: bg, color: isDark ? '#fff' : '#000' }}>
      <AnimatedGridPattern />
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg font-semibold shadow-lg transition-colors duration-300 cursor-pointer text-sm"
        style={{ backgroundColor: isDark ? '#1e1e30' : '#e0e0e0', color: isDark ? '#fff' : '#000' }}
      >
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
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
              </div>
              <p className={`text-sm mt-1 ${muted}`}>22 Year Old | Web Developer / IT Helpdesk Staff</p>
              {/* <p className={`text-sm mt-1 ${muted}`}> GitHub | Aspiring Web Developer</p> */}
              <div className="flex gap-3 mt-4 items-center">
                <a href="/resume/TEVES_IAN_KHRISTOPHER_RESUME.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-lg font-medium text-sm transition-colors duration-300 cursor-pointer no-underline" style={{ backgroundColor: isDark ? '#1e1e30' : '#e0e0e0', color: isDark ? '#fff' : '#000' }}>View Resume</a>
                <a href="mailto:tevesiankhristopher@gmail.com" className="px-5 py-2 rounded-lg font-medium text-sm transition-colors duration-300 cursor-pointer no-underline" style={{ backgroundColor: isDark ? '#1e1e30' : '#e0e0e0', color: isDark ? '#fff' : '#000' }}>Send Email</a>
              </div>
            </div>
          </div>

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
              { role: 'IT Staff / IT Programmer', company: 'Cagayan Museum and Historical Research Center', year: 'Current'},
              { role: 'OJT Internship', company: 'Office Of Civil Defense', year: '2025-2026' },
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Frontend', items: ['HTML', 'CSS', 'Tailwind CSS', 'Javascript', 'React', 'Bootstrap'] },
              { title: 'Backend & Database', items: ['PHP', 'Laravel', 'MySQL', 'PostgreSQL'] },
              { title: 'Tools & Framework', items: ['GitHub', 'VS Code', 'Figma', 'Git', 'Wordpress'] },
            ].map((cat, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border transition-all duration-300"
                style={{
                  borderColor: isDark ? '#ffffff10' : '#00000010',
                  backgroundColor: isDark ? '#ffffff05' : '#00000005',
                }}
              >
                <p className={`text-xs uppercase tracking-[0.2em] mb-4 ${muted}`}>{cat.title}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: isDark ? '#ffffff10' : '#00000010',
                        color: isDark ? '#ffffff80' : '#00000080',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div>
              <div className='flex justify-between'>
                <p className={`text-xs uppercase tracking-[0.3em] ${muted}`}>04 / Projects</p>
                <button onClick={() => navigate("/projects")} className={`text-xs uppercase tracking-[0.3em] ${muted}`}>View all</button>
              </div>
              <div className="border-t" style={{ borderColor: isDark ? '#ffffff15' : '#00000015' }}>
                {[
                  { name: ' Daily Administrative and Operational Report (DAOR) and Duty Checklist System', desc: 'Developed a web-based system to streamline daily administrative daily reporting.', tech: 'PHP, Javascript, HTML/CSS, Bootstrap, MySQL' },
                  { name: 'Gym Membership and Payment Tracking system', desc: 'A web-based gym management system for handling member profiles, membership plans, payments, promotions, and reports.', tech: 'PHP, HTML/CSS, Javascript, Bootstrap, MySQL' },
                  {name: 'Ticketing System (SerbisyoDesk)', desc: 'A web-based IT service desk and ticketing system for managing user concerns, technical issues, and service requests.', tech: 'Laravel/PHP, MySQL, TailwindCSS, Javascript'}
                ].map((item, i) => (
                  <div key={i} className="py-5 border-b" style={{ borderColor: isDark ? '#ffffff10' : '#00000010' }}>
                    <div className="flex items-start gap-4">
                      <span className="text-xs mt-1" style={{ color: '#6c63ff' }}>{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className={`text-xs mt-1 ${muted}`}>{item.desc}</p>
                        <p className={`text-xs mt-2 ${muted}`}>{item.tech}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className='flex justify-between items-center'>
                <p className={`text-xs uppercase tracking-[0.3em] ${muted}`}>05 / Certificate</p>
                <button onClick={() => navigate("/certificates")} className={`text-xs uppercase tracking-[0.3em] ${muted} hover:opacity-70 transition-opacity cursor-pointer`}>View all</button>
              </div>
              <div className="border-t" style={{ borderColor: isDark ? '#ffffff15' : '#00000015' }}>
                {[
                  { name: 'Introduction to Cybersecurity', org: 'CISCO Networking Academy', year: '2026' },
                  { name: 'IT Customer Support Basics', org: 'CISCO Networking Academy', year: '2026' },
                ].map((item, i) => (
                  <div key={i} className="py-5 border-b" style={{ borderColor: isDark ? '#ffffff10' : '#00000010' }}>
                    <div className="flex items-start gap-4">
                      <span className="text-xs mt-1" style={{ color: '#6c63ff' }}>{String(i + 1).padStart(2, '0')}</span>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className={`text-xs mt-0.5 ${muted}`}>{item.org}</p>
                      </div>
                      <span className={`text-xs ${muted}`}>{item.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* GitHub Activity */}
        <div className="mb-10">
          <p className={`text-xs uppercase tracking-[0.3em] mb-6 ${muted}`}>06 / GitHub Activity</p>
          <div
            className="p-6 rounded-xl border"
            style={{
              borderColor: isDark ? '#ffffff10' : '#00000010',
              backgroundColor: isDark ? '#ffffff05' : '#00000005',
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-medium text-sm">Iannn-dx</span>
              </div>
              <a
                href="https://github.com/Iannn-dx"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs ${muted} hover:opacity-70 transition-opacity`}
              >
                View Profile
              </a>
            </div>

            {/* Pinned Repos */}
            <div className="mb-6">
              <p className={`text-xs mb-3 ${muted}`}>Pinned Repositories</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { name: 'Credify', lang: 'Blade', desc: 'certifications' },
                  { name: 'Power-Gym', lang: 'PHP', desc: 'Online Membership Profiling and Payment System' },
                  { name: 'personal-portfolio', lang: 'JavaScript', desc: 'Portfolio website' },
                  { name: 'ticketing-system', lang: 'Blade', desc: 'Ticketing system' },
                  { name: 'react-app', lang: 'TypeScript', desc: 'React application' },
                ].map((repo, i) => (
                  <a
                    key={i}
                    href={`https://github.com/Iannn-dx/${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-lg border transition-all duration-300 hover:translate-y-[-2px] no-underline"
                    style={{
                      borderColor: isDark ? '#ffffff10' : '#00000010',
                      backgroundColor: isDark ? '#ffffff08' : '#00000008',
                      color: isDark ? '#fff' : '#000',
                    }}
                  >
                    <p className="font-medium text-xs truncate">{repo.name}</p>
                    <p className={`text-[10px] mt-1 truncate ${muted}`}>{repo.desc}</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.lang === 'PHP' ? '#4F5D95' : repo.lang === 'Blade' ? '#f7523f' : repo.lang === 'TypeScript' ? '#3178c6' : '#f1e05a' }} />
                      <span className={`text-[10px] ${muted}`}>{repo.lang}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'Repositories', value: '15' },
                { label: 'Followers', value: '1' },
                { label: 'Following', value: '0' },
                { label: 'Stars', value: '0' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-lg font-bold">{stat.value}</p>
                  <p className={`text-xs ${muted}`}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
