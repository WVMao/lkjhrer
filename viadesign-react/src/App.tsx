import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import { MessageCircle, Heart, ArrowUp } from 'lucide-react';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <Portfolio />
        <Contact />
      </main>

      {/* Footer animé */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -right-32 w-64 h-64 border border-white/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-40 h-40 border border-white/5 rounded-full"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <motion.h2
              className="text-3xl font-bold font-outfit mb-3 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              Via<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Design</span>
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.h2>

            <p className="text-slate-400 mb-8 max-w-md mx-auto text-lg">
              Créons ensemble l'identité visuelle qui fera décoller votre activité.
            </p>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {[
                { icon: '📘', label: 'Facebook', href: '#' },
                { icon: '📸', label: 'Instagram', href: '#' },
                { icon: '💼', label: 'LinkedIn', href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-white/5 backdrop-blur border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

            {/* Copyright */}
            <motion.p
              className="text-slate-500 text-sm flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              © {new Date().getFullYear()} ViaDesign. Fait avec
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={14} className="text-red-400 fill-red-400" />
              </motion.span>
              au Cameroun
            </motion.p>
          </motion.div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/237671170671"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={28} className="text-white" />
        <motion.div
          className="absolute inset-0 bg-green-400 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.a>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg z-50 hover:border-blue-500 transition-colors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={20} className="text-gray-600" />
      </motion.button>
    </div>
  );
}

export default App;
