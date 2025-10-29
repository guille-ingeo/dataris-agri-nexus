import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-hero">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            ¿Listo para transformar tu agricultura?
          </h2>
          
          <p className="text-xl text-primary-foreground/90">
            Únete a la revolución agrícola y descubre cómo la tecnología puede llevar tu producción al siguiente nivel.
          </p>
          
          <div className="pt-4">
            <Link to="/contacto">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90 px-10 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contáctanos Ahora
            </Button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
