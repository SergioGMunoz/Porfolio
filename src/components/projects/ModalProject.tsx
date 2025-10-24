import { useTranslation } from "react-i18next";

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
}

const Modal = ({projectData} : ProjectDataInterface) => {
  const { t } = useTranslation();
    return (
        <div>
            <h1>{t(projectData.titleKey)}</h1>
        </div>
    )
}

export default Modal;