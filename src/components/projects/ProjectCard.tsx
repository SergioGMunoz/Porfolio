import CardTemplate from "./CardTemplate";
import { useTranslation } from "react-i18next";

interface ProjectDataInterface {
  projectData: {
    id: number;
    titleKey: string;
    descriptionKey: string;
    stack: Array<string>;
    picture: string;
    link: string;
    readmeLink: string;
  };
}

const ProjectCard = ({ projectData }: ProjectDataInterface) => {
  const { t } = useTranslation();

  return (
    <CardTemplate>
      <div
        className="project-card flex w-80 flex-col gap-2 rounded-[16px] border-0 p-2 md:my-20 md:p-4"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
          backgroundColor: "var(--bg-secondary)",
          transition: "background-color 0.3s ease",
        }}
      >
        {/* Title */}
        <div className="flex flex-col items-center justify-between">
          <h5
            className="project-title text-2xl font-bold text-center transition-all duration-500 opacity-0 animate-fade-in"
            style={{
              color: "var(--color-accent)",
              animationDelay: "0.2s",
              animationFillMode: "forwards",
            }}
          >
            {t(projectData.titleKey)}
          </h5>
        </div>
        {/* IMG */}
        <div className="flex-1">
          <div className="relative aspect-video w-full">
            <img
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
              src={projectData.picture}
              alt={t(projectData.titleKey)}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                opacity: 1,
              }}
            />
          </div>
        </div>
        {/* Description */}
        <div>
          <p 
            className="project-description text-xs opacity-75"
            style={{
              color: "var(--text-secondary)",
              transition: "color 0.3s ease",
            }}
          >
            {t(projectData.descriptionKey)}
          </p>
        </div>
        {/* Technologies */}
      </div>
    </CardTemplate>
  );
};

export default ProjectCard;
