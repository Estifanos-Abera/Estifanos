import React, { useRef, useState, useEffect } from 'react';

const Magnet = ({ 
  src, 
  alt = '', 
  children, 
  className = '', 
  strength = 4, 
  padding = 200, 
  activeTransition = 'transform 0.3s ease-out', 
  inactiveTransition = 'transform 0.6s ease-in-out' 
}) => {
  const ref = useRef(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < padding) {
        setTransition(activeTransition);
        const x = distanceX / strength;
        const y = distanceY / strength;
        setTransform(`translate3d(${x}px, ${y}px, 0px)`);
      } else {
        setTransition(inactiveTransition);
        setTransform('translate3d(0px, 0px, 0px)');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [strength, padding, activeTransition, inactiveTransition]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform,
        transition,
        willChange: 'transform',
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-2xl md:rounded-[40px] border border-white/10"
        />
      ) : children}
    </div>
  );
};

export default Magnet;
