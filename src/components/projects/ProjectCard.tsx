import CardTemplate from "./CardTemplate";
import { useTranslation } from "react-i18next";
import Badge from "./Badge";

interface ProjectDataInterface {
  projectData: {
    id: number;
    titleKey: string;
    descriptionKey: string;
    stack: Array<{text: string; color: string}>;
    picture: string;
    link: string;
    readmeLink: string;
  };
  onClick?: () => void;
}

const ProjectCard = ({ projectData, onClick }: ProjectDataInterface) => {
  const { t } = useTranslation();

  return (
    <CardTemplate>
      <div
        className="project-card flex w-full max-w-sm flex-col gap-2 rounded-[16px] border-0 p-2 md:p-4 cursor-pointer transition-transform duration-200 hover:scale-105"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
          backgroundColor: "var(--bg-secondary)",
          transition: "background-color 0.3s ease, transform 0.2s ease",
        }}
        onClick={onClick}
      >
        {/* Title */}
        <div className="flex flex-col items-center justify-between">
          <h5
            className="project-title text-2xl font-bold text-center"
            style={{
              color: "var(--color-accent)",
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

        {/* Technologies */}
        {projectData.stack.length > 0 && (
        <div className="flex flex-row gap-1 justify-center align-center text-center">
            {projectData.stack.map((e, index) => {
              return (
                <Badge key={index} text={e.text} color={e.color}/>
              )
            })}
        </div>
        )}

        {/* Description */}
        <div>
          <div
            className="project-description text-xs"
            style={{
              color: "var(--text-secondary)",
              transition: "color 0.3s ease",
            }}
          >
            {t(projectData.descriptionKey)}
          </div>
        </div>
      </div>
    </CardTemplate>
  );
};

export default ProjectCard;
