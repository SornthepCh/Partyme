import React from "react";

type ExpertiseItem = {
  name: string;
  url: string;
};

const expertiseItems: ExpertiseItem[] = [
  { name: "TypeScript", url: "https://www.typescriptlang.org/" },
  { name: "Go", url: "https://go.dev/" },
  { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { name: ".NET", url: "https://dotnet.microsoft.com/" },
  { name: "Node.js", url: "https://nodejs.org/" },
  { name: "Flutter", url: "https://flutter.dev/" },
  { name: "Next.js", url: "https://nextjs.org/" },
  { name: "Firebase", url: "https://firebase.google.com/" },
  { name: "MySQL", url: "https://www.mysql.com/" },
  { name: "VSCode", url: "https://code.visualstudio.com/" },
  { name: "GitHub", url: "https://github.com/" },
  { name: "MS Office", url: "https://www.microsoft.com/en-us/microsoft-365" },
  { name: "Power BI", url: "https://powerbi.microsoft.com/" },
  { name: "Figma", url: "https://www.figma.com/" },
  { name: "Docker", url: "https://www.docker.com/" },
  { name: "UX/UI Design", url: "https://www.interaction-design.org/literature/topics/ui-design" },
];

export default function ExpertiseList() {
  return (
    <div className="flex flex-wrap gap-4">
      {expertiseItems.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip"
          data-tip={item.name}
        >
          <button className="btn btn-warning">
            {item.name}
          </button>
        </a>
      ))}
    </div>
  );
}
