import { TypingAnimation } from "@/components/ui/typing-animation";
import { useTranslation } from "react-i18next";

const Title = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <TypingAnimation
        words={[t('hero.greeting')]}
        cursorStyle="block"
        className="text-4xl font-['Montserrat'] font-bold text-accent"
      />
    </div>
  );
};

export default Title;
