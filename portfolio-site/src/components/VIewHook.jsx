import { useState, useEffect } from 'react';

export default function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const node = ref.current;

        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            {
                threshold: 0.1, // Adjust based on when you want to consider it "on screen"
            }
        );

        observer.observe(node);

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, [ref.current]); // Update effect only if `ref.current` changes

    return isIntersecting;
}
