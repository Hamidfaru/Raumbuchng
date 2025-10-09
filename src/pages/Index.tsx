import Hero from "@/components/Hero";
import Features from "@/components/Features";
import RoomCard from "@/components/RoomCard";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

import conferenceRoom from "@/assets/room-conference.jpg";
import workshopRoom from "@/assets/room-workshop.jpg";
import executiveRoom from "@/assets/room-executive.jpg";
import coworkingRoom from "@/assets/room-coworking.jpg";

const rooms = [
  {
    title: "Konferenzraum",
    description: "Perfekt für Meetings, Präsentationen und Videokonferenzen mit professioneller Ausstattung.",
    capacity: 12,
    price: "ab 45€/Std",
    image: conferenceRoom,
    features: ["WiFi", "Beamer", "Kaffee"],
    slug: "/konferenzraum"
  },
  {
    title: "Workshop-Raum",
    description: "Kreativer Raum für Workshops, Brainstorming-Sessions und Team-Events mit flexibler Bestuhlung.",
    capacity: 20,
    price: "ab 60€/Std",
    image: workshopRoom,
    features: ["WiFi", "Beamer", "Kaffee"],
    slug: "/workshop-raum"
  },
  {
    title: "Executive Office",
    description: "Exklusives Büro für wichtige Gespräche, Verhandlungen und konzentriertes Arbeiten.",
    capacity: 4,
    price: "ab 35€/Std",
    image: executiveRoom,
    features: ["WiFi", "Kaffee"],
    slug: "/executive-office"
  },
  {
    title: "Co-Working Space",
    description: "Offener Arbeitsbereich mit Einzelarbeitsplätzen für produktives Arbeiten in inspirierender Umgebung.",
    capacity: 15,
    price: "ab 20€/Tag",
    image: coworkingRoom,
    features: ["WiFi", "Kaffee"],
    slug: "/co-working-space"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Unsere Räume</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entdecken Sie unsere modernen und professionell ausgestatteten Räume
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <RoomCard {...room} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
