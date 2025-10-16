import { TypingAnimation } from "@/components/ui/typing-animation";
import { useTranslation } from "react-i18next";

const Title = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <TypingAnimation
        key={i18n.language}
        words={[t('hero.greeting')]}
        cursorStyle="block"
        className="text-4xl font-['Montserrat'] font-bold text-accent transition-all duration-500"
        style={{ 
          color: 'var(--color-accent)'
        }}
      />
    </div>
  );
};

export default Title;
