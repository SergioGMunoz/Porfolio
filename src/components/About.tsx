import { TextAnimate } from "@/components/ui/text-animate.tsx"
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className="text-primary">
      <TextAnimate animation="slideLeft" delay={0.5} duration={1} by="character">
        {t('hero.about')}
      </TextAnimate>
    </div>
  );
};

export default About;