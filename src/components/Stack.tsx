import { useTranslation } from "react-i18next";
import { FrontendTechnologies } from "./stack/Frontend";
import { BackendTechnologies } from "./stack/Backend";
import { OtherTechnologies } from "./stack/Others";


const Stack = () => {
  const { t } = useTranslation();
  
  return (
    <section id="Stack" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-20" style={{ color: 'var(--text-primary)' }}>
          {t('stack.title')}
        </h2>
        
        {/* Frontend Technologies */}
        <FrontendTechnologies />
        
        {/* Backend Technologies */}
        <BackendTechnologies />
        
        {/* Other Tools */}
        <OtherTechnologies />
      </div>
    </section>
  );
};

export default Stack;
