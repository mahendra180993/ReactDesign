import './App.css';
import Cards from './pages/Cards';
import Hero from './pages/Hero';
import Navbar from './pages/Navbar';
import Aftercards from './pages/Aftercards'
import Info from './pages/Info';
import Location from './pages/Location';
import Footer from './pages/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Cards />
    <Aftercards />
    <Info />
    <Location />
    <Footer />
    </>
  );
}

export default App;
