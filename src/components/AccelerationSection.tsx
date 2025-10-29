const AccelerationSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
            Startup acelerada e impulsada por
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {/* Placeholder for logos - replace with actual logos */}
            <div className="w-48 h-24 bg-card border-2 border-border rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
              <span className="text-sm font-medium text-muted-foreground">Logo 1</span>
            </div>
            <div className="w-48 h-24 bg-card border-2 border-border rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
              <span className="text-sm font-medium text-muted-foreground">Logo 2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccelerationSection;
