import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-sky-500 hover:bg-sky-400 text-white rounded-full shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 cursor-pointer flex items-center justify-center border border-sky-400/20"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 animate-pulse" />
        </button>
      )}
    </>
  );
}
