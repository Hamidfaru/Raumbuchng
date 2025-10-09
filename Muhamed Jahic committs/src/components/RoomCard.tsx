import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Wifi, Monitor, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

interface RoomCardProps {
  title: string;
  description: string;
  capacity: number;
  price: string;
  image: string;
  features: string[];
  slug: string;
}

const featureIcons: { [key: string]: React.ElementType } = {
  "WiFi": Wifi,
  "Beamer": Monitor,
  "Kaffee": Coffee,
};

const RoomCard = ({ title, description, capacity, price, image, features, slug }: RoomCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-semibold">
          {price}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="flex items-center gap-2 text-base">
          <Users className="h-4 w-4" />
          Bis zu {capacity} Personen
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature) => {
            const Icon = featureIcons[feature];
            return (
              <div key={feature} className="flex items-center gap-1 text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                {Icon && <Icon className="h-3 w-3" />}
                {feature}
              </div>
            );
          })}
        </div>
        <Link to={slug}>
          <Button className="w-full" variant="default">
            Details ansehen
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
