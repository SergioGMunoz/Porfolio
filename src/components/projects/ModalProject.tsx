import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { X, ExternalLink } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
  const [readmeContent, setReadmeContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Fetch README content when modal opens
  useEffect(() => {
    if (isOpen && projectData.readmeLink) {
      setIsLoading(true);
      setError('');
      
      fetch(projectData.readmeLink)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then(content => {
          setReadmeContent(content);
          setIsLoading(false);
        })
        .catch(err => {
          console.error('Error fetching README:', err);
          setError('Error loading README content');
          setIsLoading(false);
        });
    } else if (!isOpen) {
      // Clean content when modal closes
      setReadmeContent('');
      setError('');
      setIsLoading(false);
    }
  }, [isOpen, projectData.readmeLink]);

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

                    {/* README Content */}
                    <div className="flex-1 min-h-0">
                      {isLoading ? (
                        <div className="flex items-center justify-center h-32">
                          <div className="flex flex-col items-center gap-3">
                            <div 
                              className="animate-spin rounded-full h-8 w-8 border-2 border-t-transparent"
                              style={{
                                borderColor: "var(--color-accent)",
                                borderTopColor: "transparent"
                              }}
                            ></div>
                            <p 
                              className="text-sm"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {t('projects.loadingReadme', 'Loading README...')}
                            </p>
                          </div>
                        </div>
                      ) : error ? (
                        <div className="flex items-center justify-center h-32">
                          <p 
                            className="text-center"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {t('projects.errorReadme', 'Error loading README content')}
                          </p>
                        </div>
                      ) : readmeContent ? (
                        <div 
                          className="readme-content prose prose-sm max-w-none overflow-y-auto max-h-96 pr-2"
                          style={{ 
                            color: "var(--text-primary)"
                          }}
                        >
                          <ReactMarkdown 
                            remarkPlugins={[remarkGfm]}
                            components={{
                              // Custom styling for markdown elements
                              h1: ({children}) => (
                                <h1 
                                  className="text-2xl font-bold mb-4 mt-6"
                                  style={{ color: "var(--text-primary)" }}
                                >
                                  {children}
                                </h1>
                              ),
                              h2: ({children}) => (
                                <h2 
                                  className="text-xl font-semibold mb-3 mt-5"
                                  style={{ color: "var(--text-primary)" }}
                                >
                                  {children}
                                </h2>
                              ),
                              h3: ({children}) => (
                                <h3 
                                  className="text-lg font-medium mb-2 mt-4"
                                  style={{ color: "var(--text-primary)" }}
                                >
                                  {children}
                                </h3>
                              ),
                              p: ({children}) => (
                                <p 
                                  className="mb-3 leading-relaxed"
                                  style={{ color: "var(--text-secondary)" }}
                                >
                                  {children}
                                </p>
                              ),
                              a: ({href, children}) => (
                                <a 
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline hover:no-underline transition-all duration-200"
                                  style={{ color: "var(--color-accent)" }}
                                >
                                  {children}
                                </a>
                              ),
                              ul: ({children}) => (
                                <ul 
                                  className="mb-3 pl-6 space-y-1"
                                  style={{ 
                                    listStyleType: "disc",
                                    color: "var(--text-secondary)"
                                  }}
                                >
                                  {children}
                                </ul>
                              ),
                              ol: ({children}) => (
                                <ol 
                                  className="mb-3 pl-6 space-y-1"
                                  style={{ 
                                    listStyleType: "decimal",
                                    color: "var(--text-secondary)"
                                  }}
                                >
                                  {children}
                                </ol>
                              ),
                              li: ({children}) => (
                                <li 
                                  className="mb-1"
                                  style={{ color: "var(--text-secondary)" }}
                                >
                                  {children}
                                </li>
                              ),
                              code: ({children, className}) => {
                                const isInline = !className;
                                return isInline ? (
                                  <code 
                                    className="px-1 py-0.5 rounded text-sm font-mono"
                                    style={{ 
                                      backgroundColor: "var(--bg-primary)",
                                      color: "var(--color-accent)",
                                      border: "1px solid var(--border-color)"
                                    }}
                                  >
                                    {children}
                                  </code>
                                ) : (
                                  <code 
                                    className="block p-3 rounded text-sm font-mono overflow-x-auto"
                                    style={{ 
                                      backgroundColor: "var(--bg-primary)",
                                      color: "var(--text-primary)",
                                      border: "1px solid var(--border-color)"
                                    }}
                                  >
                                    {children}
                                  </code>
                                );
                              },
                              pre: ({children}) => (
                                <pre 
                                  className="mb-4 p-4 rounded-lg overflow-x-auto"
                                  style={{ 
                                    backgroundColor: "var(--bg-primary)",
                                    border: "1px solid var(--border-color)"
                                  }}
                                >
                                  {children}
                                </pre>
                              ),
                              blockquote: ({children}) => (
                                <blockquote 
                                  className="border-l-4 pl-4 mb-4 italic"
                                  style={{ 
                                    borderLeftColor: "var(--color-accent)",
                                    color: "var(--text-secondary)"
                                  }}
                                >
                                  {children}
                                </blockquote>
                              ),
                              img: ({src, alt}) => (
                                <img 
                                  src={src} 
                                  alt={alt}
                                  className="max-w-full h-auto rounded-lg mb-4"
                                  style={{ 
                                    border: "1px solid var(--border-color)"
                                  }}
                                />
                              ),
                              table: ({children}) => (
                                <div className="overflow-x-auto mb-4">
                                  <table 
                                    className="min-w-full border-collapse"
                                    style={{ 
                                      border: "1px solid var(--border-color)"
                                    }}
                                  >
                                    {children}
                                  </table>
                                </div>
                              ),
                              th: ({children}) => (
                                <th 
                                  className="border px-4 py-2 text-left font-semibold"
                                  style={{ 
                                    borderColor: "var(--border-color)",
                                    backgroundColor: "var(--bg-primary)",
                                    color: "var(--text-primary)"
                                  }}
                                >
                                  {children}
                                </th>
                              ),
                              td: ({children}) => (
                                <td 
                                  className="border px-4 py-2"
                                  style={{ 
                                    borderColor: "var(--border-color)",
                                    color: "var(--text-secondary)"
                                  }}
                                >
                                  {children}
                                </td>
                              )
                            }}
                          >
                            {readmeContent}
                          </ReactMarkdown>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-32">
                          <p 
                            className="text-center"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {t('projects.noReadme', 'No README available')}
                          </p>
                        </div>
                      )}
                    </div>
                    
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
