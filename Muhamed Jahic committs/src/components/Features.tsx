import { Clock, Shield, Zap, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Flexible Buchung",
    description: "Buchen Sie stundenweise, täglich oder langfristig – ganz nach Ihrem Bedarf."
  },
  {
    icon: Shield,
    title: "Sicher & Zuverlässig",
    description: "Professionelle Räume mit modernster Ausstattung und Sicherheitsstandards."
  },
  {
    icon: Zap,
    title: "Sofortige Bestätigung",
    description: "Erhalten Sie unmittelbar nach der Buchung eine Bestätigung per E-Mail."
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Unser Team steht Ihnen rund um die Uhr für Fragen zur Verfügung."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Warum RaumBuchen?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Die einfachste Art, professionelle Räume für Ihr Business zu mieten
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-card hover:shadow-[var(--shadow-card)] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
