import { useRef } from 'react';

export const AnimatedTextLines = ({ text, className }) => {
    const containerRef = useRef(null);
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const lineRefs = useRef([]);
    return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span 
            key={index}
            ref={(el) => (lineRefs.current[index] = el)} 
            className='block leading-relaxed tracking-wide
            text-pretty'
        >
            {line}
        </span>
      ))}
    </div>
  )
}