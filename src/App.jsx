import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Data from "./data/data-mountain";
import Footer from "./components/Footer";

function App() {
    const card = Data.map((data) => {
        return <Card key={data.key} data={data} />;
    });
    return (
        <>
            <Navbar />
            <section>{card}</section>
            <Footer />
        </>
    );
}

export default App;
