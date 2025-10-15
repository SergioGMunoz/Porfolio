import ColorSwitcher from '@/components/ColorSwitcher';
import Title from '@/components/Title';

const Home = () =>{
    return(
        <div className="min-h-screen bg-gray-100 flex items-center justify-center relative">
            <ColorSwitcher />
            <Title/>
        </div>
    );
}

export default Home;