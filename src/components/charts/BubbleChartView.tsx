import { IPOData } from "@/data/ipoData";
import { Card } from "@/components/ui/card";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ZAxis,
} from "recharts";

interface BubbleChartViewProps {
  selectedIPOs: IPOData[];
}

export const BubbleChartView = ({ selectedIPOs }: BubbleChartViewProps) => {
  const data = selectedIPOs.map((ipo) => ({
    name: ipo.name,
    marketCap: ipo.estimatedMarketCap,
    profitAfterTax: ipo.profitAfterTax,
    subscription: ipo.totalSubscription * 100, // Size multiplier
    color: ipo.color,
  }));

  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-6">Market Cap vs Profit Analysis</h3>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis
            type="number"
            dataKey="marketCap"
            name="Market Cap"
            unit=" Cr"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            label={{ value: "Market Cap (₹ Cr)", position: "bottom", fill: "hsl(var(--foreground))" }}
          />
          <YAxis
            type="number"
            dataKey="profitAfterTax"
            name="Profit"
            unit=" Cr"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            label={{
              value: "Profit After Tax (₹ Cr)",
              angle: -90,
              position: "left",
              fill: "hsl(var(--foreground))",
            }}
          />
          <ZAxis type="number" dataKey="subscription" range={[100, 1000]} />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            contentStyle={{
              backgroundColor: "hsl(var(--popover))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
            formatter={(value: any, name: string) => {
              if (name === "subscription") return [(value / 100).toFixed(1) + "x", "Subscription"];
              return [value, name];
            }}
          />
          {data.map((entry) => (
            <Scatter key={entry.name} data={[entry]} fill={entry.color} fillOpacity={0.6} />
          ))}
          <Legend />
        </ScatterChart>
      </ResponsiveContainer>
      <p className="text-xs text-muted-foreground mt-4 text-center">
        Bubble size represents subscription level
      </p>
    </Card>
  );
};
