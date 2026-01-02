import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Process from './components/sections/Process';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import FloatingActions from './components/ui/FloatingActions';

function App() {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <Process />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
