import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import AnimatedGridPattern from "./components/animatedGridPattern";

const projects = [
  {
    name: "DAOR System",
    full: "Daily Administrative and Operational Report & Duty Checklist System",
    desc: "A web-based system to streamline daily administrative reporting and duty tracking for organizational workflow.",
    tech: ["PHP", "JavaScript", "HTML/CSS", "Bootstrap", "MySQL"],
    year: "2025-2026",
  },
  {
    name: "Gym Tracker",
    full: "Gym Membership and Payment Tracking System",
    desc: "A web-based gym management system for handling member profiles, membership plans, payments, promotions, discounts, and reports.",
    tech: ["PHP", "HTML/CSS", "JavaScript", "Bootstrap", "MySQL"],
    year: "2025",
  },
  {
    name: "SerbisyoDesk",
    full: "Ticketing System",
    desc: "A web-based IT service desk and ticketing system for managing user concerns, technical issues, and service requests.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "REST API", "Github"],
    year: "2025",
  },
  {
    name: "Credify",
    full: "Credential & Document Verification System",
    desc: "A Laravel-based platform for storing, managing, submitting, approving, and verifying credentials and documents.",
    tech: ["Laravel", "PHP", "Javascript", "MySQL", 'TailwindCSS', "REST API", "Git / Github"],
    year: "2026",
  },
  {
    name: "MusiKal",
    full: "Music Player for Ibanag, Ilocano, Itawes",
    desc: "A web-based music player featuring Itawes, Ibanag, and Ilocano music.",
    tech: ["Laravel", "PHP", "MySQL", "Javascript", "TailwindCSS", "REST API", "MySQL", "Github"],
    year: "On-going",
  },
  {
    name: "CMHRC - Feedback",
    full: "Cagayan Museum Historical and Research Center - Feedback System",
    desc: "A digital visitor feedback system for collecting and managing museum visitor evaluations, ratings, comments, and satisfaction data.",
    tech: ["Laravel", "PHP", "TailwindCSS", "Rest API", "PostgreSQL", "Github"],
    year: "2026",
  },
  {
    name: "Kiosk",
    full: "Cagayan Museum Historical and Research Center - Information Kiosk",
    desc: "An interactive touchscreen kiosk for visitors to explore museum information, galleries, Citizen's Charter, and visitor feedback.",
    tech: ["Laravel", "PHP", "TailwindCSS", "Rest API", "PostgreSQL", "Github"],
    year: "2026",
  },
  {
    name: "CMHRC Website",
    full: "Cagayan Museum Historical and Research Center - Website",
    desc: "A WordPress-based website for the Cagayan Museum and Historical Research Center, where I worked on website customization, content updates, maintenance, and gallery improvements.",
    tech: ["Wordpress", "Wordpress Plugins", "HTML/CSS", "Javascript"],
    year: "2026",
  },
];

interface ProjectsProps {
  isDark: boolean;
  setIsDark: (v: boolean) => void;
  onBack: () => void;
}

export default function Projects({ isDark, setIsDark, onBack }: ProjectsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const perPage = 4;

  const totalPages = Math.ceil(projects.length / perPage);
  const start = (page - 1) * perPage;
  const current = projects.slice(start, start + perPage);

  const bg = isDark ? "#0f0f17" : "#ffffff";
  const muted = isDark ? "text-gray-400" : "text-gray-600";

  const goToPage = (p: number) => {
    setPage(p);
    setHoveredIndex(null);
  };

  return (
    <div
      className="relative min-h-screen transition-colors duration-300"
      style={{ backgroundColor: bg, color: isDark ? "#fff" : "#000" }}
    >
      <AnimatedGridPattern />
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg font-semibold shadow-lg transition-colors duration-300 cursor-pointer text-sm"
        style={{
          backgroundColor: isDark ? "#1e1e30" : "#e0e0e0",
          color: isDark ? "#fff" : "#000",
        }}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <button
          onClick={onBack}
          className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] mb-12 ${muted} hover:opacity-70 transition-opacity cursor-pointer`}
        >
          <ArrowLeft className="w-3 h-3" />
          Back
        </button>

        <p className={`text-xs uppercase tracking-[0.3em] mb-2 ${muted}`}>
          Projects
        </p>
        <h1 className="text-3xl font-bold mb-10">All Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {current.map((project, i) => (
            <div
              key={i}
              className="group p-5 rounded-xl border transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                borderColor: isDark ? "#ffffff10" : "#00000010",
                backgroundColor:
                  hoveredIndex === i
                    ? isDark
                      ? "#ffffff08"
                      : "#00000008"
                    : "transparent",
                transform:
                  hoveredIndex === i ? "translateY(-2px)" : "translateY(0)",
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <p className="font-medium text-sm">{project.name}</p>
                <span className={`text-xs ${muted}`}>{project.year}</span>
              </div>
              <p className={`text-xs leading-relaxed mb-4 ${muted}`}>
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: isDark ? "#ffffff10" : "#00000010",
                      color: isDark ? "#ffffff80" : "#00000080",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              onClick={() => goToPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                backgroundColor: isDark ? "#ffffff10" : "#00000010",
                color: isDark ? "#fff" : "#000",
              }}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className="w-8 h-8 rounded-lg text-xs font-medium transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor:
                    page === i + 1
                      ? isDark
                        ? "#ffffff18"
                        : "#00000018"
                      : "transparent",
                  color: isDark ? "#fff" : "#000",
                  opacity: page === i + 1 ? 1 : 0.5,
                }}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                backgroundColor: isDark ? "#ffffff10" : "#00000010",
                color: isDark ? "#fff" : "#000",
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
