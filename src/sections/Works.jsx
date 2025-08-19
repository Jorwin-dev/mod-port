import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react"


const Works = () => {
    const overlayRefs = useRef([]);
    const previewRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(null);
    const text = "Featured projects that have been meticulously crafted with passion to drive results and impact";

    const mouse = useRef({ x: 0, y: 0 });
    const moveX = useRef(null);
    const moveY = useRef(null);

    useGSAP(() => {
        moveX.current = gsap.quickTo(previewRef.current, 'x', {
            duration: 2,
            ease: 'power3.out'
        });

        gsap.from('#project', {
            y: 100,
            opacity: 0,
            delay: 0.5,
            duration: 1,
            stagger: 0.3,
            ease: "back.out",
            scrollTrigger: {
                trigger: '#project',
            },
        });
    }, []);

    const handleMouseEnter = (index) => {
        if (window.innerWidth < 768) return;
        setCurrentIndex(index);

        const el = overlayRefs.current[index];
        if (!el) return;

        gsap.killTweensOf(el);
        gsap.fromTo(
            el,
            {
                clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
            },
            {
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                duration: 0.15,
                ease: 'power2.out',
            }
        );

        gsap.to(previewRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
        });
    };

    const handleMouseLeave = (index) => {
        if (window.innerWidith < 768) return;
        setCurrentIndex(null);

        const el = overlayRefs.current[index];
        if (!el) return;

        gsap.killTweensOf(el);
        gsap.to(el, {
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
            duration: 0.2,
            ease: 'power2.in',
        });

        gsap.to(previewRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.3,
            ease: 'power2.out',
        });
    };

    const handleMouseMove = (e) => {
        if (window.innerWidth < 768) return;
        mouse.current.x = e.clientX + 24;
        mouse.current.y = e.clientY + 24;
        mouseX.current(mouse.current.x);
        mouseY.current(mouse.current.y);
    };
    
  return (
    <div>
      
    </div>
  )
}

export default Works
