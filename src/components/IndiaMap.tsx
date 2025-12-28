import { MapPin } from "lucide-react";

const IndiaMap = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] bg-primary/5 rounded-2xl overflow-hidden">
      {/* India Map SVG */}
      <svg
        viewBox="0 0 400 450"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simplified India outline */}
        <path
          d="M200 30 
             L240 35 L270 45 L290 60 L310 80 L325 100 
             L340 130 L345 160 L340 190 L330 220 
             L320 250 L300 280 L280 310 L260 340 
             L240 370 L220 400 L200 420 L180 400 
             L160 370 L140 340 L120 310 L100 280 
             L80 250 L70 220 L60 190 L55 160 
             L60 130 L75 100 L90 80 L110 60 
             L130 45 L160 35 L200 30Z"
          className="fill-primary/20 stroke-primary"
          strokeWidth="2"
        />
        
        {/* State boundaries suggestion */}
        <path
          d="M150 150 L180 160 L200 180 L220 160 L250 150"
          className="stroke-primary/30 fill-none"
          strokeWidth="1"
        />
        <path
          d="M120 200 L160 210 L200 220 L240 210 L280 200"
          className="stroke-primary/30 fill-none"
          strokeWidth="1"
        />
        <path
          d="M140 260 L180 280 L220 280 L260 260"
          className="stroke-primary/30 fill-none"
          strokeWidth="1"
        />
        
        {/* Karnataka region highlight */}
        <ellipse
          cx="165"
          cy="320"
          rx="35"
          ry="25"
          className="fill-accent/30 stroke-accent"
          strokeWidth="1.5"
        />
        
        {/* Mangaluru marker with pulse animation */}
        <circle
          cx="145"
          cy="315"
          r="20"
          className="fill-accent/20 animate-pulse"
        />
        <circle
          cx="145"
          cy="315"
          r="8"
          className="fill-accent stroke-background"
          strokeWidth="2"
        />
        
        {/* Mangaluru label */}
        <text
          x="170"
          y="340"
          className="fill-foreground font-semibold text-sm"
          fontSize="12"
        >
          Mangaluru
        </text>
        
        {/* Major cities for reference */}
        <circle cx="200" cy="100" r="3" className="fill-muted-foreground" />
        <text x="210" y="105" className="fill-muted-foreground text-xs" fontSize="9">Delhi</text>
        
        <circle cx="290" cy="180" r="3" className="fill-muted-foreground" />
        <text x="295" y="185" className="fill-muted-foreground text-xs" fontSize="9">Kolkata</text>
        
        <circle cx="270" cy="260" r="3" className="fill-muted-foreground" />
        <text x="275" y="265" className="fill-muted-foreground text-xs" fontSize="9">Chennai</text>
        
        <circle cx="110" cy="230" r="3" className="fill-muted-foreground" />
        <text x="70" y="235" className="fill-muted-foreground text-xs" fontSize="9">Mumbai</text>
      </svg>
      
      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-foreground">Our Location</span>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;
