import { Card } from "@/components/ui/card";
import { BarChart3, MessageSquare, Search } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "ANÁLISIS HISTÓRICO",
    description: "Accede a datos históricos completos de tus cultivos y toma decisiones basadas en información precisa y verificable.",
  },
  {
    icon: MessageSquare,
    title: "RECOMENDACIONES Y ALERTAS POR WHATSAPP",
    description: "Recibe notificaciones instantáneas y recomendaciones personalizadas directamente en tu WhatsApp para optimizar tu producción.",
  },
  {
    icon: Search,
    title: "ESCRIBE Y DESCUBRE",
    description: "Descubre 1-1 de qué se trata y cómo podemos ayudarte a revolucionar tu forma de hacer agricultura.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-xl bg-card animate-fade-in group hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
