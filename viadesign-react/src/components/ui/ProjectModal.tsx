import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Target, Lightbulb } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Image Side */}
                        <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-gray-100 dark:bg-slate-800">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-contain md:object-cover"
                            />
                        </div>

                        {/* Text Side */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                                Étude de Cas : {project.category}
                            </span>
                            <h2 className="text-3xl font-outfit font-bold text-gray-900 dark:text-white mb-6">
                                {project.title}
                            </h2>

                            <div className="space-y-8">
                                {/* Problème */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-400">
                                        <Target size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-1 uppercase text-sm tracking-wide">Le Challenge</h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            {project.caseStudy?.problem || "Le client avait besoin d'une identité visuelle forte pour se démarquer dans un marché compétitif."}
                                        </p>
                                    </div>
                                </div>

                                {/* Solution */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <Lightbulb size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-1 uppercase text-sm tracking-wide">Ma Solution</h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            {project.caseStudy?.solution || "Création d'un design moderne, épuré et mémorable, parfaitement aligné avec les valeurs de l'entreprise."}
                                        </p>
                                    </div>
                                </div>

                                {/* Résultat */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white mb-1 uppercase text-sm tracking-wide">Le Résultat</h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            {project.caseStudy?.result || "Une augmentation significative de l'engagement client et une image de marque premium instantanément reconnaissable."}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {project.link && (
                                <div className="mt-10">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all"
                                    >
                                        Voir le projet live
                                    </a>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
