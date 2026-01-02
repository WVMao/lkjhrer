import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Audrey Mballa",
            role: "Vendeuse en ligne",
            location: "Yaoundé",
            content: "Franchement, depuis qu'il a fait mes affiches pour WhatsApp, je vends mieux mes laits de toilette. C'est propre et ça attire l'œil direct.",
            initials: "AM",
            color: "from-pink-500 to-rose-500"
        },
        {
            name: "Yvan Nana",
            role: "Technicien Froid",
            location: "Douala",
            content: "Simple et efficace. Je voulais juste un petit logo pour mes factures, il m'a fait un truc bien pro. Je fais plus sérieux devant les clients.",
            initials: "YN",
            color: "from-blue-500 to-cyan-500"
        },
        {
            name: "Mami Odette",
            role: "Restauratrice",
            location: "Kribi",
            content: "Mon petit, il est fort ! Il a refait le menu de mon tournedos. Maintenant quand les blancs viennent, ils trouvent que c'est bien présenté.",
            initials: "MO",
            color: "from-green-500 to-emerald-500"
        }
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-slate-900/50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-outfit font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Ils me font <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">confiance</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-400"
                    >
                        Pas besoin d'être une multinationale pour avoir un design de qualité.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-slate-700 relative group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <Quote className="absolute top-8 right-8 text-gray-100 dark:text-slate-700 w-12 h-12 rotate-12" />

                            <div className="flex items-center gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-8 italic relative z-10 leading-relaxed">
                                "{item.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                                    {item.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white leading-tight">{item.name}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.role} • {item.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
