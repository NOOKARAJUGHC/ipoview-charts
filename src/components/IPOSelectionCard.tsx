import { IPOData } from "@/data/ipoData";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { TrendingUp } from "lucide-react";

interface IPOSelectionCardProps {
  ipo: IPOData;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

export const IPOSelectionCard = ({ ipo, isSelected, onToggle }: IPOSelectionCardProps) => {
  return (
    <Card
      className={`glass-card-hover cursor-pointer p-6 transition-all duration-300 ${
        isSelected ? "ring-2 ring-offset-2" : ""
      }`}
      style={
        isSelected
          ? {
              borderColor: ipo.color,
              boxShadow: `0 0 0 2px ${ipo.color}40`,
            }
          : {}
      }
      onClick={() => onToggle(ipo.id)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: ipo.color }}
            />
            <h3 className="font-semibold text-lg">{ipo.name}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{ipo.sector}</p>
        </div>
        <Checkbox
          checked={isSelected}
          onCheckedChange={() => onToggle(ipo.id)}
          className="mt-1"
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Price Range</span>
          <span className="font-medium">
            ₹{ipo.priceRange.min} - ₹{ipo.priceRange.max}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Market Cap</span>
          <span className="font-medium">₹{ipo.estimatedMarketCap} Cr</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Subscription</span>
          <span className="font-medium flex items-center gap-1">
            {ipo.totalSubscription}x
            <TrendingUp className="w-3 h-3 text-ipo-green" />
          </span>
        </div>
      </div>
    </Card>
  );
};
