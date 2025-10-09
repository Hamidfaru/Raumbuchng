import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">RaumBuchen</h3>
            <p className="text-primary-foreground/80">
              Ihre erste Wahl für professionelle Raumbuchungen. Flexibel, modern und unkompliziert.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Musterstraße 123, 10115 Berlin</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+49 30 12345678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@raumbuchen.de</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Öffnungszeiten</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Montag - Freitag: 08:00 - 20:00</p>
              <p>Samstag: 09:00 - 18:00</p>
              <p>Sonntag: Nach Vereinbarung</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>&copy; 2025 RaumBuchen. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
