import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Agricultura conectada" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>
      
      <div className="container relative z-10 px-6 py-20 mx-auto text-center animate-fade-in">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              EL FUTURO DE LA
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                AGRICULTURA
              </span>
            </h1>
            
            <div className="inline-block px-8 py-3 bg-primary/10 rounded-full">
              <p className="text-xl md:text-2xl font-bold text-primary tracking-wider">
                MUY PRONTO
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-3xl md:text-5xl font-bold text-foreground tracking-wide">
              ECOSISTEMA DE APLICACIONES
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Todo lo que necesitas en un mismo lugar
            </p>
          </div>
          
          <div className="pt-8">
            <Link to="/contacto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contáctanos por WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
