import { useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";

const certificates = [
  {
    name: "AWS Technical Certification",
    org: "Amazon Web Services",
    year: "2024",
    image: "/certs/aws-technical.png",
    link: "#",
  },
  {
    name: "AWS re/Post Programming Apprentice",
    org: "Amazon Web Services",
    year: "2024",
    image: "/certs/aws-repost.png",
    link: "#",
  },
  {
    name: "Web Development Fundamentals",
    org: "freeCodeCamp",
    year: "2023",
    image: "/certs/freecodecamp-web.png",
    link: "#",
  },
  {
    name: "JavaScript Algorithms & Data Structures",
    org: "freeCodeCamp",
    year: "2023",
    image: "/certs/freecodecamp-js.png",
    link: "#",
  },
  {
    name: "Responsive Web Design",
    org: "freeCodeCamp",
    year: "2023",
    image: "/certs/freecodecamp-rwd.png",
    link: "#",
  },
  {
    name: "Git & GitHub Fundamentals",
    org: "Coursera",
    year: "2023",
    image: "/certs/coursera-git.png",
    link: "#",
  },
];

interface CertificatesProps {
  isDark: boolean;
  setIsDark: (v: boolean) => void;
  onBack: () => void;
}

export default function Certificates({ isDark, setIsDark, onBack }: CertificatesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const perPage = 4;

  const totalPages = Math.ceil(certificates.length / perPage);
  const start = (page - 1) * perPage;
  const current = certificates.slice(start, start + perPage);

  const bg = isDark ? "#0f0f17" : "#ffffff";
  const muted = isDark ? "text-gray-400" : "text-gray-600";

  const goToPage = (p: number) => {
    setPage(p);
    setHoveredIndex(null);
  };

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: bg, color: isDark ? "#fff" : "#000" }}
    >
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
          Certificates
        </p>
        <h1 className="text-3xl font-bold mb-10">All Certificates</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {current.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border overflow-hidden transition-all duration-300 cursor-pointer no-underline"
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
                color: isDark ? "#fff" : "#000",
              }}
            >
              <div className="aspect-video w-full overflow-hidden" style={{ backgroundColor: isDark ? "#ffffff08" : "#00000008" }}>
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-medium text-sm">{cert.name}</p>
                  <ExternalLink className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${muted}`} />
                </div>
                <div className="flex items-center justify-between">
                  <p className={`text-xs ${muted}`}>{cert.org}</p>
                  <span className={`text-xs ${muted}`}>{cert.year}</span>
                </div>
              </div>
            </a>
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
