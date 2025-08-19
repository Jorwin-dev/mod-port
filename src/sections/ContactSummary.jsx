import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react"


const ContactSummary = () => {
    const containerRef = useRef(null);
    const items = [
        "Innovation",
        "Precision",
        "Trust",
        "Collaboration",
        "Excellence",
    ];
    const items2 = [
        "contact us",
        "contact us",
        "contact us",
        "contact us",
        "contact us",
    ];

    useGSAP(() => {
        gsap.to(containerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current, 
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
                markers: false,
            },
        });
    }, []);
  return (
    <div>
      
    </div>
  )
}

export default ContactSummary
