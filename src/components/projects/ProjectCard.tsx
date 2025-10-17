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
    //   <h1>{projectData.titleKey}</h1>
    //   <img ></img>
    <CardTemplate>
      <div
        className="flex w-80 flex-col gap-2 rounded-[16px] border-0 bg-[#1F2121] dark:bg-[#fafafa] p-2  md:my-20 md:p-4"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        {/* Title */}
        <div className="flex flex-col items-center justify-between  text-accent">
          <h5
            className="text-2xl font-bold text-center transition-all duration-500 opacity-0 animate-fade-in text-accent"
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
              alt={projectData.titleKey}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                opacity: 1,
              }}
            />
          </div>
        </div>
        {/* Description */}
        <div>
          <p className=" text-xs text-black dark:text-gray-300 opacity-75">{t(projectData.descriptionKey)}</p>
        </div>
        {/* Technologies */}
      </div>
    </CardTemplate>
  );
};

export default ProjectCard;
