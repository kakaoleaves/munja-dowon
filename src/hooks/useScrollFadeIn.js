import { useRef, useEffect, useCallback } from 'react';

const useScrollFadeIn = ({defaultStyle}) => {
    const dom = useRef();
  
    const handleScroll = useCallback(([entry]) => {
        const { current } = dom;
          
        if(entry.isIntersecting) {
            current.style.transitionProperty = 'opacity transform';
            current.style.transitionDuration = '1s';
            current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
            current.style.transitionDelay = '0s';
            current.style.opacity = 1;
            current.style.transform = 'translate3d(0, 0, 0)';  
        } else {
            current.style.opacity = 0;
            current.style.transform = 'translate3d(0, 50%, 0)';
        }
      }, []);
    
    useEffect(() => {
        let observer;
        const { current } = dom;
      
        if (current) {
            observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
            observer.observe(current);
            return () => observer && observer.disconnect();
        };
    }, [handleScroll]);
    
    return {
      ref: dom,
      style: {
        ...defaultStyle,
        opacity: 0,
        transform: 'translate3d(0, 50%, 0)',
      }
    };
}

export default useScrollFadeIn;