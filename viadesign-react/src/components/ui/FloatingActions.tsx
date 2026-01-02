import { motion } from 'framer-motion';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';

const FloatingActions = () => {
    const { scrollY, scrollToTop } = useScroll(300);

    return (
        <>
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
            {scrollY > 400 && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-6 left-6 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg z-50 hover:border-blue-500 transition-colors"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ArrowUp size={20} className="text-gray-600" />
                </motion.button>
            )}
        </>
    );
};

export default FloatingActions;
