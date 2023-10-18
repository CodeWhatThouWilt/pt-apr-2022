import Navbar from "./components/Navbar";
import SeparatorOne from "./components/SeparatorOne";
import SideCard from "./components/SideCard";
import { HoroscopeContext } from "./context/HoroscopeContext";

function App() {
    return (
        <>
            <Navbar />
            <SideCard />
            <SeparatorOne />
        </>
    );
}

export default App;
