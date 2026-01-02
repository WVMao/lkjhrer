import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';

// Lazy load non-critical sections
const Process = lazy(() => import('./components/sections/Process'));
const Portfolio = lazy(() => import('./components/sections/Portfolio'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Footer = lazy(() => import('./components/layout/Footer'));
const FloatingActions = lazy(() => import('./components/ui/FloatingActions'));

function App() {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      <Navbar />

      <main>
        <Hero />

        <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}>
          <Process />
          <Portfolio />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <FloatingActions />
      </Suspense>
    </div>
  );
}

export default App;
