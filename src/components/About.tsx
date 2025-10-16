import { TextAnimate } from "@/components/ui/text-animate.tsx"

const About = () => {
  return (
    <div className="text-primary">
      <TextAnimate animation="slideLeft" delay={0.5} duration={1} by="character">
        I've started studying web development in search of a profession that would keep me motivated and offer me a more stable future for my personal life. Today, I'm really glad I made that decision, because I enjoy the industry, I have fun working on each project, and I'm very motivated to keep learning and growing as a professional.
      </TextAnimate>
    </div>
  );
};

export default About;