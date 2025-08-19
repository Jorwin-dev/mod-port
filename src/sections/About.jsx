import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";

const About = () => {
    const text = "Passionate about clean architecture\nI build scalable, high-performance solutions\nfrom prototypr to production";
    const aboutText = "Obsesses with building fast, intuitive apps-from pixel-perfect React UIs to bulletproof serverless backends.\nEvery line of code is a promise: quality that users feel.\nWhen I'm not shipping:\nHobbyOne\nHobbyTwo\nHobbyThree\nHobbyFour";
    const imgRef = useRef(null);
    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger: {
                trigger: "#about",
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
                markers: false,
            },
            ease: "power1.inOut",
        });

        gsap.set(imgRef.current, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power4.inOut",
            scrollTrigger: {trigger: imgRef.current },
        });
    });
    return (
        <section id="about" className="min-h-screen bg-black rounded-b-4xl">
            <AnimatedHeaderSection 
                subTitle={"Code with purpose, Built to scale"}
                title={"About"}
                text={text}
                textColor={"text-white"}
                withScrollTrigger={true}
            />
            <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
                <img 
                    ref={imgRef}
                    src="images/man.jpg"
                    alt="man"
                    className="w-md rounded-3xl"
                />
                <AnimatedTextLines text={aboutText} className={"w-full"} />
            </div>
        </section>
   );
};

export default About
