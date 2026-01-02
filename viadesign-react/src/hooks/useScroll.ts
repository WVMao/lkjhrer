import { useState, useEffect } from 'react';

/**
 * Hook to track window scroll position and state
 * @param threshold - The scroll Y position to trigger 'scrolled' state
 */
export const useScroll = (threshold = 20) => {
    const [scrolled, setScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setScrolled(window.scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return { scrolled, scrollY, scrollToTop };
};
