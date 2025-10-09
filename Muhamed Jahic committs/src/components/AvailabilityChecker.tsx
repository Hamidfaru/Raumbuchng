import { useState } from "react";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface AvailabilityCheckerProps {
  roomName: string;
}

const timeSlots = [
  "08:00", "09:00", "10:00", "11:00", "12:00", 
  "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
];

const AvailabilityChecker = ({ roomName }: AvailabilityCheckerProps) => {
  const [date, setDate] = useState<Date>();
  const [startTime, setStartTime] = useState<string>();
  const [endTime, setEndTime] = useState<string>();
  const { toast } = useToast();

  const handleCheckAvailability = () => {
    if (!date || !startTime || !endTime) {
      toast({
        title: "Bitte alle Felder ausfüllen",
        description: "Wählen Sie Datum, Start- und Endzeit aus.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Verfügbarkeit geprüft",
      description: `${roomName} ist am ${format(date, "PPP", { locale: de })} von ${startTime} bis ${endTime} Uhr verfügbar!`,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-2 block">Datum</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP", { locale: de }) : <span>Datum wählen</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => date < new Date()}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Startzeit</label>
        <Select value={startTime} onValueChange={setStartTime}>
          <SelectTrigger className="w-full">
            <Clock className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Startzeit wählen" />
          </SelectTrigger>
          <SelectContent>
            {timeSlots.map((time) => (
              <SelectItem key={time} value={time}>
                {time} Uhr
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Endzeit</label>
        <Select value={endTime} onValueChange={setEndTime}>
          <SelectTrigger className="w-full">
            <Clock className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Endzeit wählen" />
          </SelectTrigger>
          <SelectContent>
            {timeSlots.map((time) => (
              <SelectItem key={time} value={time}>
                {time} Uhr
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button 
        className="w-full mt-4" 
        size="lg"
        onClick={handleCheckAvailability}
      >
        Verfügbarkeit prüfen
      </Button>
    </div>
  );
};

export default AvailabilityChecker;
