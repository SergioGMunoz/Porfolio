import { useTranslation } from "react-i18next";

interface ModalInterface {
  github: string,
  readme: string
}

const Modal = ({github, readme} : ModalInterface) => {
  const { t } = useTranslation();
    return (
        <div>
           <button>
           </button>
        </div>
    )
}

export default Modal;