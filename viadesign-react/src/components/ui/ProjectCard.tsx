import { motion } from 'framer-motion';
import type { Project } from '../../data/projects';
import { ExternalLink, Monitor, Eye } from 'lucide-react';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isWeb = project.category === 'web';

    const CardContent = () => (
        <>
            <div className="h-full w-full overflow-hidden relative">
                {isWeb ? (
                    <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-6 transition-colors">
                        {/* Macbook-style mockup */}
                        <div className="relative w-full aspect-[16/10] bg-slate-900 rounded-lg p-1 shadow-2xl overflow-hidden border-2 border-slate-700">
                            <div className="absolute top-0 left-0 right-0 h-4 bg-slate-800 flex items-center px-2 gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            </div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover mt-4 rounded-sm"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/800x500?text=${encodeURIComponent(project.title)}`;
                                }}
                            />
                            <div className="absolute bottom-2 right-2">
                                <Monitor size={24} className="text-white/20" />
                            </div>
                        </div>
                        {/* iPhone-style mockup overlay */}
                        <div className="absolute -bottom-2 -right-2 w-16 aspect-[9/19] bg-slate-900 rounded-2xl p-0.5 shadow-xl border-2 border-slate-700 hidden sm:block">
                            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-slate-800 rounded-full"></div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover rounded-[14px]"
                            />
                        </div>
                    </div>
                ) : (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain block transition-transform duration-500 hover:scale-110"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(project.title)}`;
                        }}
                    />
                )}
            </div>

            {/* Overlay avec texte blanc forcé */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 hover:translate-y-0">
                <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 w-fit">
                    {project.category?.toUpperCase() || 'WEB DESIGN'}
                </span>
                <h3 className="text-white text-xl font-bold mb-1 drop-shadow-md" style={{ color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>
                    {project.title}
                </h3>
                <p className="text-gray-100 text-sm opacity-95 drop-shadow-sm" style={{ color: '#f0f0f0' }}>
                    {project.description}
                </p>

                {/* Action Buttons on Hover */}
                <div className="absolute inset-x-0 bottom-6 px-6 flex flex-col gap-2 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-20">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsModalOpen(true);
                        }}
                        className="w-full py-2 bg-white text-gray-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shadow-lg shadow-black/20"
                    >
                        Étude de cas <Eye size={18} />
                    </button>

                    {isWeb && project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2 bg-blue-600 text-white text-center rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Visiter le site <ExternalLink size={16} className="inline ml-1" />
                        </a>
                    )}
                </div>
            </div>
        </>
    );

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg dark:shadow-slate-900/50 group h-[300px] sm:h-[350px] border border-gray-100 dark:border-slate-800 transition-all duration-300 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
        >
            <CardContent />
            <ProjectModal
                project={project}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </motion.div>
    );
};

export default ProjectCard;
