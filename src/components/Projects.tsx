import { useTranslation } from "react-i18next";
import ProjectCard from "@/components/projects/ProjectCard";
// Proyect: [{id, title, description, stack, picture, link, readmeLink }]
import projectsData from "./data/projectsData";
const Projects = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Title Projects */}
      <h3
        className="text-3xl font-bold text-center mb-2 transition-all duration-500 opacity-0 animate-fade-in text-accent"
        style={{
          color: "var(--color-accent)",
          animationDelay: "0.2s",
          animationFillMode: "forwards",
        }}
      >
        {t("projects.title")}
      </h3>
      {/* Projects */}
      <div>
        {projectsData.length <= 0 ? (
          <p>No hay proyectos a mostrar actualmente</p>
        ) : (
          projectsData.map((p) => {
            return (<ProjectCard key={p.id} projectData={p}/>)
          })
        )}
      </div>
    </div>
  );
};

export default Projects;
