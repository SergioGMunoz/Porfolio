import ColorSwitcher from '../components/ColorSwitcher';

const Home = () =>{
    return(
        <div className="min-h-screen bg-gray-100 flex items-center justify-center relative">
            <h1 className="text-6xl font-bold text-accent">Hola, soy Sergio</h1>
            <ColorSwitcher />
        </div>
    );
}

export default Home;