/**
 * Shoot Smart Brand Refresh - Interactive Logic
 */

tailwind.config = {
    theme: {
        extend: {
            colors: {
                navy: '#003A70',
                red: '#B5343B',
                white: '#FFFFFF',
                gray: {
                    50: '#F9FAFB',
                    100: '#F3F4F6',
                    800: '#1F2937',
                    900: '#111827',
                }
            },
            fontFamily: {
                heading: ['Poppins', 'sans-serif'],
                body: ['Montserrat', 'sans-serif'],
                display: ['Teko', 'sans-serif'],
            },
            boxShadow: {
                'gloss': '0 20px 25px -5px rgba(0, 58, 112, 0.25), 0 8px 10px -6px rgba(0, 58, 112, 0.1)',
                'flyer': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                'card': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
            },
            aspectRatio: {
                'paper': '8.5 / 11',
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section > div');
    sections.forEach(section => {
        section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(section);
    });
});