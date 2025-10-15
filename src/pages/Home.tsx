import About from '@/components/About';
import ColorSwitcher from '@/components/ColorSwitcher';
import ProfilePhoto from '@/components/ProfilePhoto';
import Title from '@/components/Title';

const Home = () =>{
    return(
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4 relative">
            <ColorSwitcher/>
            <ProfilePhoto/>
            <Title/>
            <About/>
        </div>
    );
}

export default Home;