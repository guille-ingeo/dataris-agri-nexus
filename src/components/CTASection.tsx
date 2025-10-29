import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-accent">
      {/* Animated background orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="container relative z-10 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-10 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground text-glow">
              ¿Listo para transformar tu agricultura?
            </h2>
            
            <p className="text-xl md:text-2xl text-primary-foreground/95 font-medium max-w-2xl mx-auto">
              Únete a la revolución agrícola y descubre cómo la tecnología puede llevar tu producción al siguiente nivel.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <a href="https://wa.me/34603465774" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-background/95 px-12 py-8 text-xl font-bold rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-110 group"
              >
                <MessageCircle className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                Contáctanos por WhatsApp
              </Button>
            </a>
          </div>
          
          <div className="pt-6">
            <p className="text-primary-foreground/80 text-sm md:text-base">
              Respuesta inmediata • Sin compromiso • Asesoramiento gratuito
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
