import React from "react";
import { useTranslation } from "react-i18next";
import { X, ExternalLink, Github } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface ModalProjectProps {
  isOpen: boolean;
  onClose: () => void;
  projectData: {
    id: number;
    titleKey: string;
    descriptionKey: string;
    stack: Array<{ text: string; color: string }>;
    picture: string;
    link: string;
    readmeLink: string;
  };
}

const ModalProject: React.FC<ModalProjectProps> = ({
  isOpen,
  onClose,
  projectData,
}) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleGitHubClick = () => {
    window.open(projectData.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl md:rounded-3xl"
        style={{
          backgroundColor: "var(--bg-primary)",
          transition: "background-color 0.3s ease",
        }}
      >
        {/* Scrollable Content */}
        <div className="max-h-[90vh] overflow-y-auto">
          {/* Single Grid Item with Glowing Effect */}
          <div className="p-6">
            <div className="min-h-[14rem]">
              <div
                className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3"
                style={{
                  borderColor: "var(--border-color)",
                }}
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div
                  className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    transition: "background-color 0.3s ease",
                    boxShadow:
                      "var(--project-shadow, rgba(0, 0, 0, 0.05) 0px 5px 6px 0px)",
                  }}
                >
                  <div className="relative flex flex-1 flex-col justify-between gap-6">
                    {/* Close Icon - Positioned to the right */}
                    <div className="flex justify-end">
                      <button
                        onClick={onClose}
                        className="w-fit rounded-lg border p-2 cursor-pointer transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110"
                        style={{
                          borderColor: "var(--border-color)",
                        }}
                      >
                        <X
                          className="h-6 w-6"
                          style={{
                            color: "var(--text-secondary)",
                          }}
                        />
                      </button>
                    </div>

                    {/* Readme */}
                    <div> </div>
                    
                    {/* GitHub Button */}
                    <div className="pt-4">
                      <button
                        onClick={handleGitHubClick}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                        style={{
                          backgroundColor: "var(--color-accent)",
                          color: "white",
                        }}
                      >
                        <ExternalLink size={18} />
                        {t("navbar.github", "Ver en GitHub")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
