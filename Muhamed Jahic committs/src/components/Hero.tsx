import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-5xl md:text-7xl font-bold text-primary-foreground leading-tight animate-fade-in">
            Professionelle Räume für Ihr Business
          </h1>
          <p className="mb-8 text-xl md:text-2xl text-primary-foreground/90 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Buchen Sie moderne Konferenz- und Arbeitsräume stundenweise oder täglich. Flexibel, einfach, professionell.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg shadow-elegant hover:scale-105 transition-transform"
              onClick={scrollToBooking}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Jetzt buchen
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20"
            >
              Räume ansehen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
