import { IPOData } from "@/data/ipoData";
import { Card } from "@/components/ui/card";

interface GaugeChartProps {
  selectedIPOs: IPOData[];
}

export const GaugeChart = ({ selectedIPOs }: GaugeChartProps) => {
  const maxSubscription = 20; // 20x scale

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {selectedIPOs.map((ipo) => {
        const percentage = Math.min((ipo.totalSubscription / maxSubscription) * 100, 100);
        const rotation = (percentage / 100) * 180 - 90;

        return (
          <Card key={ipo.id} className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: ipo.color }} />
              <h4 className="font-semibold">{ipo.name}</h4>
            </div>
            <div className="relative w-full aspect-square max-w-[200px] mx-auto">
              {/* Background arc */}
              <svg viewBox="0 0 200 120" className="w-full">
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="hsl(var(--muted))"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                {/* Colored arc */}
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke={ipo.color}
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeDasharray={`${(percentage / 100) * 251.2} 251.2`}
                  opacity={0.8}
                  style={{
                    filter: `drop-shadow(0 0 10px ${ipo.color}40)`,
                  }}
                />
                {/* Needle */}
                <line
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="30"
                  stroke={ipo.color}
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{
                    transformOrigin: "100px 100px",
                    transform: `rotate(${rotation}deg)`,
                    transition: "transform 1s ease-out",
                  }}
                />
                {/* Center circle */}
                <circle cx="100" cy="100" r="8" fill={ipo.color} opacity={0.9} />
              </svg>
              <div className="absolute inset-0 flex items-end justify-center pb-2">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: ipo.color }}>
                    {ipo.totalSubscription}x
                  </div>
                  <div className="text-xs text-muted-foreground">Subscription</div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between text-xs text-muted-foreground px-2">
              <span>0x</span>
              <span>{maxSubscription}x</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
