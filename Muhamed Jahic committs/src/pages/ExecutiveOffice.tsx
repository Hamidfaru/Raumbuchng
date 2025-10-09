import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Wifi, Coffee, ArrowLeft, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import executiveRoom from "@/assets/room-executive.jpg";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import AvailabilityChecker from "@/components/AvailabilityChecker";

const ExecutiveOffice = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={executiveRoom} 
          alt="Executive Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/90" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zur Übersicht
            </Button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Executive Office</h1>
          <div className="flex items-center gap-4 text-lg">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>Bis zu 4 Personen</span>
            </div>
            <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
              ab 35€/Std
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Über diesen Raum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-6">
                  Unser Executive Office ist das exklusive Büro für wichtige Gespräche, 
                  Verhandlungen und konzentriertes Arbeiten. Der private Raum bietet eine 
                  ruhige und professionelle Atmosphäre für bis zu 4 Personen.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Ausstattung & Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Wifi className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">High-Speed WiFi</p>
                      <p className="text-sm text-muted-foreground">Glasfaser-Internetverbindung</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Coffee className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Premium Getränke</p>
                      <p className="text-sm text-muted-foreground">Barista-Kaffee & Tee-Auswahl</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Privatsphäre</p>
                      <p className="text-sm text-muted-foreground">Separater, abschließbarer Raum</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Monitor className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Premium Ausstattung</p>
                      <p className="text-sm text-muted-foreground">Edles Mobiliar & TV-Display</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Verfügbarkeit prüfen</CardTitle>
              </CardHeader>
              <CardContent>
                <AvailabilityChecker roomName="Executive Office" />
              </CardContent>
            </Card>
          </div>
        </div>

        <BookingForm />
      </div>

      <Footer />
    </div>
  );
};

export default ExecutiveOffice;
