import SectionTitle from "./SectionTitle";
const groups:[string,string[]][]=[['Frontend',
    [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive UI",
    ],
  ],
  [
    "Backend",
    [
      "Java",
      "Spring Boot",
      "Laravel",
      "RESTful APIs",
      "Spring Security",
      "JWT",
      "MyBatis",
      "C#",
    ],
  ],
  ["Databases", ["MySQL", "PostgreSQL", "SQL", "Relational Data Modeling"]],
  [
    "Tools & Workflow",
    [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Figma",
      "Debugging",
      "Testing",
      "MS Office",
      "AI-assisted coding",
    ],
  ],
];
export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="02 · TECHNICAL FOCUS"
          title="Tools I use to build"
          description="A practical stack spanning frontend, backend, databases, UI/UX, and development workflow."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {groups.map(([name, items], i) => (
            <div
              key={name}
              className="glass rounded-3xl p-6 hover:-translate-y-1 transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black text-[#103b70]">{name}</h3>
                <span className="rounded-full bg-[#dff5ff] px-3 py-1 text-xs font-bold text-[#1972c4]">
                  0{i + 1}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((x) => (
                  <span
                    key={x}
                    className="rounded-xl border border-white bg-white/65 px-3 py-2 text-sm font-semibold text-[#416889]"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
