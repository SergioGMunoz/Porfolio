import About from "@/components/About";
import ColorSwitcher from "@/components/ColorSwitcher";
import ProfilePhoto from "@/components/ProfilePhoto";
import Title from "@/components/Title";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4 relative p-4">
        {/* About */}
      <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
        <div className="lg:col-span-1 flex justify-center">
          <ProfilePhoto />
        </div>
        <div className="lg:col-span-3 space-y-4 text-center lg:text-start">
          <Title />
          <About />
        </div>
      </section>
      <ColorSwitcher />
    </main>
  );
};

export default Home;
