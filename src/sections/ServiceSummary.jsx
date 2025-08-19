const ServiceSummary = () => {
  return (
    <section className="mt-20 overflow-hidden font-light
    leading-snug text-center mb-42 contact-text-responsive">
        <div>
            <p>Architecture</p>
        </div>
        <div id="title-service-2" className="flex items-center 
        justify-center gap-3 translate-x-16" >
            <p className="font-normal">Development</p>
            <div className="w-10 h-1 md:w-32 bg-gold" />
            <p>Deployment</p>
        </div>
        <div id="title-service-3" className="flex items-center
        justify-center gap-3 -translate-x-48">
            <p>APIs</p>
            <div className="w-10 h-1 md:w-32 bg-gold" />
            <p className="italic">Frontends</p>
            <div className="w-10 h-1 md:w-32 bg-gold" />
            <p>Scalability</p>
        </div>
        <div id="title-service-4" className="translate-x-48">
            <p>Databases</p>
        </div>
    </section>
  );
};

export default ServiceSummary
