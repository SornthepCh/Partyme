export default function ExpertiseList() {
  const skills = [
    { category: "Frontend", items: ["Flutter","Angular", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Firebase" , "MySQL"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma" ,"Ms office", "Power bi"] },
    { category: "Language", items: [" TypeScript", "Golang", "HTML", "CSS", "javascript", "C#"] }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skillGroup) => (
        <div
          key={skillGroup.category}
          className="bg-gray-900/40 border border-purple-500/20 rounded-xl p-4 hover:border-purple-400/50 transition-all"
        >
          <h3 className="text-purple-300 font-semibold mb-3 text-sm uppercase tracking-wide">
            {skillGroup.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill) => (
              <span
                key={skill}
                className="bg-purple-600/20 text-purple-200 text-xs px-3 py-1 rounded-full border border-purple-400/30 hover:bg-purple-500/30 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
