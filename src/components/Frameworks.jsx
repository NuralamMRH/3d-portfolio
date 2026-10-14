import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const innerSkills = [
    "react",
    "javascript",
    "tailwindcss",
    "vitejs",
    "github",
    "git",
  ];

  const outerSkills = [
    "threejs",
    "azure",
    "stripe",
    "sqlite",
    "auth0",
    "html5",
    "css3",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={36} radius={120}>
        {innerSkills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} alt={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={26} radius={75} reverse speed={2}>
        {outerSkills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} alt={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="duration-200 rounded-sm hover:scale-125 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
  />
);
