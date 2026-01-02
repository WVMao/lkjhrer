export interface Project {
    id: number;
    category: 'beaute' | 'evenement' | 'vente' | 'streaming' | 'web' | 'autre' | 'cuisine' | 'sport' | 'business';
    title: string;
    description: string;
    image: string;
    link?: string;
    tags?: string[];
    caseStudy?: {
        problem: string;
        solution: string;
        result: string;
    };
}

export const graphicPortfolio: Project[] = [
    {
        id: 202501,
        category: 'streaming',
        title: 'Podcast Alikpak',
        description: 'Design pour podcast : Parlons de Foi, d\'Affaires, d\'Argent',
        image: '/assets/graphic-2025-1.jpg'
    },
    {
        id: 202502,
        category: 'vente',
        title: 'Pack Créativité',
        description: 'Promotion pack ressources design & mockups',
        image: '/assets/graphic-2025-2.jpg'
    },
    {
        id: 202503,
        category: 'beaute',
        title: 'Crown & Glow Beauty',
        description: 'Identité visuelle salon : Votre Beauté, Votre Couronne',
        image: '/assets/graphic-2025-3.jpg'
    },
    {
        id: 202504,
        category: 'cuisine',
        title: 'Restaurant Vient Tchop',
        description: 'Affiche publicitaire pour restaurant local',
        image: '/assets/graphic-2025-4.jpg'
    },
    {
        id: 202505,
        category: 'cuisine',
        title: 'Menu Taro',
        description: 'Design de menu détaillé avec tarifs',
        image: '/assets/graphic-2025-5.jpg'
    },
    {
        id: 202506,
        category: 'vente',
        title: 'Pressing ProClean',
        description: 'Service de blanchisserie professionnelle',
        image: '/assets/graphic-2025-6.jpg'
    },
    {
        id: 202507,
        category: 'cuisine',
        title: 'Chez Vicky',
        description: 'Promotion "Venez Manger" à petit prix',
        image: '/assets/graphic-2025-7.jpg'
    },
    {
        id: 202508,
        category: 'evenement',
        title: 'Vœux de Décembre',
        description: 'Visuel festif pour la fin d\'année',
        image: '/assets/graphic-2025-8.jpg'
    },
    {
        id: 202509,
        category: 'cuisine',
        title: 'Fried Rice Belingua',
        description: 'Packaging design pour produit alimentaire',
        image: '/assets/graphic-2025-9.jpg'
    },
    {
        id: 202510,
        category: 'cuisine',
        title: 'Menu Complet',
        description: 'Carte de restaurant : Plats Africains & Cocktails',
        image: '/assets/graphic-2025-10.jpg'
    },
    {
        id: 202511,
        category: 'evenement',
        title: 'Conférence Santé',
        description: 'Poster pour conférence médicale à Malabo',
        image: '/assets/graphic-2025-11.jpg'
    },
    {
        id: 202512,
        category: 'business',
        title: 'Simplicité Design',
        description: 'Communication d\'agence sur le style épuré',
        image: '/assets/graphic-2025-12.jpg'
    },
    {
        id: 202513,
        category: 'sport',
        title: 'Fitness Élégane',
        description: 'Visuel inspirant pour marque de sport',
        image: '/assets/graphic-2025-13.jpg'
    },
    {
        id: 202514,
        category: 'business',
        title: 'Conseils Design',
        description: 'Infographie : Les erreurs à éviter',
        image: '/assets/graphic-2025-14.jpg'
    },
    {
        id: 202515,
        category: 'business',
        title: 'Synergie Business',
        description: 'Marketing stratégique pour rentabilité',
        image: '/assets/graphic-2025-15.png'
    }
];

export const webPortfolio: Project[] = [
    {
        id: 201,
        category: 'web',
        title: 'Elgoz Media',
        description: 'Site vitrine immersif pour agence média avec animations modernes',
        image: 'https://picsum.photos/seed/media/800/600',
        link: 'https://www.elgoz.media/'
    },
    {
        id: 202,
        category: 'web',
        title: 'Dashboard Analytics',
        description: 'Interface de gestion et tableau de bord interactif',
        image: 'https://picsum.photos/seed/dashboard/800/600',
        link: '#'
    },
    {
        id: 203,
        category: 'web',
        title: 'E-Commerce Mode',
        description: 'Boutique en ligne responsive avec panier dynamique',
        image: 'https://picsum.photos/seed/fashion/800/600',
        link: '#'
    },
    {
        id: 204,
        category: 'web',
        title: 'Application Mobile',
        description: 'Landing page optimisée pour téléchargement d\'application',
        image: 'https://picsum.photos/seed/mobile/800/600',
        link: '#'
    }
];
