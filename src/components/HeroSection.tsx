import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle pt-20">
      {/* Background with image and overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Agricultura conectada" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container relative z-10 px-6 py-20 mx-auto text-center">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Badge animado */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full animate-fade-in">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <p className="text-sm md:text-base font-semibold text-primary tracking-wider">
              PRÓXIMAMENTE • LANZAMIENTO 2025
            </p>
          </div>
          
          {/* Título principal con efecto impactante */}
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
              <span className="block text-foreground">
                EL FUTURO DE LA
              </span>
              <span className="block bg-gradient-hero bg-clip-text text-transparent text-glow mt-2">
                AGRICULTURA
              </span>
            </h1>
          </div>
          
          {/* Subtítulo con glassmorphism */}
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="p-8 bg-background/40 backdrop-blur-md border border-primary/10 rounded-3xl shadow-2xl">
              <p className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
                ECOSISTEMA DE APLICACIONES
              </p>
              <p className="text-lg md:text-xl text-muted-foreground">
                Todo lo que necesitas en un mismo lugar
              </p>
            </div>
          </div>
          
          {/* CTA con efecto glow */}
          <div className="pt-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <a href="https://wa.me/34603465774" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="group relative bg-primary hover:bg-primary-hover text-primary-foreground px-12 py-8 text-xl font-bold rounded-2xl shadow-[0_0_40px_rgba(0,128,128,0.3)] hover:shadow-[0_0_60px_rgba(0,128,128,0.5)] transition-all duration-500 hover:scale-110"
              >
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-primary-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative flex items-center gap-3">
                  <MessageCircle className="h-6 w-6" />
                  Contáctanos por WhatsApp
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator mejorado */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2 shadow-[0_0_20px_rgba(0,128,128,0.3)]">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
