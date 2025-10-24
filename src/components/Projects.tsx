import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "@/components/projects/ProjectCard";
import ModalProject from "@/components/projects/ModalProject";
import { TextAnimate } from "@/components/ui/text-animate";
// Proyect: [{id, title, description, stack, picture, link, readmeLink }]
import projectsData from "./data/projectsData";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div>
      {/* Title Projects */}
      <h3
        className="text-3xl font-bold text-center mb-12"
        style={{
          color: "var(--color-accent)",
        }}
      >
        <TextAnimate
          key={`projects-title-${i18n.language}`}
          animation="slideUp"
          duration={0.8}
          by="character"
          startOnView={true}
          delay={0.1}
        >
          {t("projects.title")}
        </TextAnimate>
      </h3>
      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
        {projectsData.length <= 0 ? (
          <p className="col-span-full text-center">No hay proyectos a mostrar actualmente</p>
        ) : (
          projectsData.map((p) => {
            return (<ProjectCard key={p.id} projectData={p} onClick={() => handleProjectClick(p)}/>)
          })
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ModalProject
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          projectData={selectedProject}
        />
      )}
    </div>
  );
};

export default Projects;
