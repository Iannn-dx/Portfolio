import { useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import AnimatedGridPattern from "./components/animatedGridPattern";

const certificates = [
  {
    name: "Introduction to Cybersecurity",
    org: "CISCO Networking Academy",
    year: "2026",
    image: "/certs/CyberSecurity.jpg",
    link: "https://www.credly.com/badges/e6d1deed-e165-4bfc-bd41-219f27b36757/public_url",
    status: "completed",
  },
  {
    name: "IT Customer Support Basics",
    org: "CISCO Networking Academy",
    year: "2026",
    image: "/certs/CustomerSupport.jpg",
    link: "https://www.credly.com/badges/b9cb02b6-9323-4b97-adc1-151b10faa91b/public_url",
    status: "completed",
  },
  {
    name: "Prompt like an Engineer",
    org: "CISCO Networking Academy",
    year: "2026",
    image: "/certs/prompt.jpg",
    link: "#",
    status: "ongoing",
  },
  {
    name: "Introduction to Modern AI",
    org: "CISCO Networking Academy",
    year: "2026",
    image: "/certs/modernAI.jpg",
    link: "#",
    status: "ongoing",
  },
  {
    name: "Networking Basics",
    org: "CISCO Networking Academy",
    year: "2026",
    image: "/certs/networking.jpg",
    link: "#",
    status: "pursuing",
  },
  {
    name: "AI Fundamentals",
    org: "Coursera - Google",
    year: "2026",
    image: "/certs/AIfundamentals.jpg",
    link: "#",
    status: "pursuing",
  },
    {
    name: "Introduction to AI",
    org: "Coursera - Google",
    year: "2026",
    image: "/certs/introAI.jpg",
    link: "#",
    status: "pursuing",
  },
      {
    name: "Google AI Essentials Specialization",
    org: "Coursera - Google",
    year: "2026",
    image: "/certs/AIEssential.jpg",
    link: "#",
    status: "pursuing",
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
              <div className="aspect-video w-full overflow-hidden flex items-center justify-center" style={{ backgroundColor: isDark ? "#ffffff08" : "#00000008" }}>
                {cert.image.endsWith(".pdf") ? (
                  <object
                    data={cert.image}
                    type="application/pdf"
                    className="w-full h-full"
                  >
                    <div className={`flex flex-col items-center justify-center h-full gap-2 ${muted}`}>
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      <span className="text-xs">PDF Certificate</span>
                    </div>
                  </object>
                ) : (
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                )}
                {!cert.image.endsWith(".pdf") && (
                  <div className={`hidden flex-col items-center justify-center h-full gap-2 ${muted}`}>
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <span className="text-xs">Certificate</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-medium text-sm">{cert.name}</p>
                  {cert.status === "pursuing" ? (
                    <span className="text-[10px] px-2 py-0.5 rounded-full flex-shrink-0 ml-2" style={{ backgroundColor: isDark ? "#fbbf2420" : "#f59e0b20", color: isDark ? "#fbbf24" : "#d97706" }}>
                      In Progress
                    </span>
                  ) : (
                    <ExternalLink className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${muted}`} />
                  )}
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
