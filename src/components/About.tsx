import { TextAnimate } from "@/components/ui/text-animate.tsx"
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="text-primary">
      <TextAnimate 
        key={i18n.language}
        animation="slideLeft" 
        duration={1} 
        by="character"
      >
        {t('hero.about')}
      </TextAnimate>
    </div>
  );
};

export default About;