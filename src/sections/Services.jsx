import AnimatedHeaderSection from "../components/AnimatedHeaderSection"


const Services = () => {
    const text = "I build secure, high-performance full-stack apps\nwith smooth UX to drive growth, not headaches."
  return (
    <section id="services" className="min-h-screen
    bg-black rounded-t-4xl">
        <AnimatedHeaderSection 
            subTitle={"Behind the scenes, beyond the screen"}
            title={"Service"}
            text={text}
            textColor={"text-white"}
        />
    </section>
  )
}

export default Services
