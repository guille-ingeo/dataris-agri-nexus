import logoLanzadera from "@/assets/logo-lanzadera.png";
import logoGraniot from "@/assets/logo-graniot-png.png";

const AccelerationSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
            Startup acelerada e impulsada por
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            <div className="w-48 h-24 flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img 
                src={logoLanzadera} 
                alt="Lanzadera" 
                className="max-h-20 w-auto object-contain"
              />
            </div>
            <div className="w-48 h-24 flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img 
                src={logoGraniot} 
                alt="Graniot - Satellite Monitoring Insights" 
                className="max-h-20 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccelerationSection;
