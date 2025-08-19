import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
    const text = "Got a question, how or project Idea?\nI'd love to hear from you and discuss further!"
    const items = [
        "just imagin, I code",
        "just imagin, I code",
        "just imagin, I code",
        "just imagin, I code",
        "just imagin, I code",
    ];
    useGSAP(() => {
        gsap.from(".social-link", {
            y: 100, 
            opacity: 0,
            delay: 0.5,
            duration: 1, 
            stagger: 0.3,
            ease: "back.out",
            scrollTrigger: {
                trigger: ".social.link",
            },
        });
    }, []);
  return (
    <div>
      
    </div>
  )
}

export default Contact
