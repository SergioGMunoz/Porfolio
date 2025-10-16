import { FrontendTechnologies } from "./stack/Frontend";
import { BackendTechnologies } from "./stack/Backend";
import { DatabaseTechnologies } from "./stack/Database";
import { OtherTechnologies } from "./stack/Others";

const Stack = () => {
  
  return (
    <section id="Stack" className="py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Frontend Technologies */}
        <FrontendTechnologies />
        
        {/* Backend Technologies */}
        <BackendTechnologies />
        
        {/* Database & Cloud Technologies */}
        <DatabaseTechnologies />
        
        {/* Other Tools */}
        <OtherTechnologies />
      </div>
    </section>
  );
};

export default Stack;
