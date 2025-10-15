import { TypingAnimation } from "@/components/ui/typing-animation";

const Title = () => {
  return (
    <div>
      <TypingAnimation
        words={["Hola, soy Sergio"]}
        cursorStyle="block"
        className="text-4xl font-['Montserrat'] font-bold text-accent"
      />
    </div>
  );
};

export default Title;
