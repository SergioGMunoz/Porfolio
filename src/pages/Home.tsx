import About from "@/components/About";
import NavBar from "@/components/NavBar";
import ProfilePhoto from "@/components/ProfilePhoto";
import Title from "@/components/Title";
import Stack from "@/components/Stack";
import { useTheme } from "@/hooks/useTheme";
import Proyects from "@/components/Proyects";

const Home = () => {
  useTheme(); // Activar el sistema de temas

  return (
    <main
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative p-4 pb-48"
    >
      {/* Hero Section */}
      <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-4 gap-6 items-center mb-2">
        <div className="lg:col-span-1 flex justify-center">
          <ProfilePhoto />
        </div>
        <div className="lg:col-span-3 space-y-4 text-center lg:text-start">
          <Title />
          <About />
        </div>
      </section>

      {/* Stack Technologies */}
      <Stack />

      {/* Proyects */}
      <Proyects/>


      {/* Gradiente global desde abajo para integrar el dock - transición suave */}
      <div
        className="pointer-events-none fixed bottom-0 left-0 right-0 h-72 z-40 opacity-75"
        style={{
          background: `linear-gradient(to top, 
            var(--bg-primary) 0%, 
            var(--bg-primary) 8%, 
            var(--bg-primary) 15%, 
            var(--bg-primary) 25%, 
            transparent 50%, 
            transparent 70%, 
            transparent 100%)`,
        }}
      ></div>

      {/* Navigation */}
      <NavBar />
    </main>
  );
};

export default Home;
