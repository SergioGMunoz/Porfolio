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
      <button
        type="button"
        className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 md:p-4"
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        {/* Title */}
        <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
          <div className="text-xs">{t(projectData.titleKey)}</div>
          <div className="text-xs text-gray-300 opacity-50">
            {t(projectData.descriptionKey)}
          </div>
        </div>
        {/* IMG */}
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-video w-full">
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
      </button>
    </CardTemplate>
  );
};

export default ProjectCard;
