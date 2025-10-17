import CardTemplate from "./CardTemplate";

interface ProjectDataInterface {
    projectData : {
        id: number;
        titleKey: string;
        descriptionKey: string;
        stack: Array<string>;
        picture: string;
        link: string;
        readmeLink: string;
    }
}

const ProjectCard = ({ projectData }: ProjectDataInterface) => {
  return (
    <CardTemplate>
      <h1>{projectData.titleKey}</h1>
    </CardTemplate>
  );
};


export default ProjectCard;
