import { IPOData } from "@/data/ipoData";
import { Card } from "@/components/ui/card";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

interface SpiderChartProps {
  selectedIPOs: IPOData[];
}

export const SpiderChart = ({ selectedIPOs }: SpiderChartProps) => {
  const metrics = ["ROE", "ROCE", "PAT Margin", "Total Subscription", "Retail Subscription"];

  const data = metrics.map((metric) => {
    const dataPoint: any = { metric };
    selectedIPOs.forEach((ipo) => {
      switch (metric) {
        case "ROE":
          dataPoint[ipo.name] = ipo.roe;
          break;
        case "ROCE":
          dataPoint[ipo.name] = ipo.roce;
          break;
        case "PAT Margin":
          dataPoint[ipo.name] = ipo.patMargin;
          break;
        case "Total Subscription":
          dataPoint[ipo.name] = ipo.totalSubscription * 10; // Scale for visibility
          break;
        case "Retail Subscription":
          dataPoint[ipo.name] = ipo.retail * 10; // Scale for visibility
          break;
      }
    });
    return dataPoint;
  });

  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-6">Performance Metrics Comparison</h3>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={data}>
          <PolarGrid stroke="hsl(var(--border))" strokeOpacity={0.5} />
          <PolarAngleAxis dataKey="metric" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "hsl(var(--muted-foreground))" }} />
          {selectedIPOs.map((ipo) => (
            <Radar
              key={ipo.id}
              name={ipo.name}
              dataKey={ipo.name}
              stroke={ipo.color}
              fill={ipo.color}
              fillOpacity={0.25}
              strokeWidth={2}
            />
          ))}
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--popover))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
          />
          <Legend wrapperStyle={{ paddingTop: "20px" }} />
        </RadarChart>
      </ResponsiveContainer>
    </Card>
  );
};
