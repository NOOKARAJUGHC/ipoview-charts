import { IPOData } from "@/data/ipoData";
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ColumnChartProps {
  selectedIPOs: IPOData[];
}

export const ColumnChart = ({ selectedIPOs }: ColumnChartProps) => {
  const data = selectedIPOs.map((ipo) => ({
    name: ipo.name,
    "PAT Margin": ipo.patMargin,
    ROE: ipo.roe,
    ROCE: ipo.roce,
    color: ipo.color,
  }));

  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-6">Financial Efficiency Metrics</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis dataKey="name" tick={{ fill: "hsl(var(--muted-foreground))" }} />
          <YAxis
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            label={{ value: "Percentage (%)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--popover))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
            formatter={(value: any) => `${value}%`}
          />
          <Legend />
          <Bar dataKey="PAT Margin" fill="#F6AD55" radius={[8, 8, 0, 0]} fillOpacity={0.8} />
          <Bar dataKey="ROE" fill="#63B3ED" radius={[8, 8, 0, 0]} fillOpacity={0.8} />
          <Bar dataKey="ROCE" fill="#68D391" radius={[8, 8, 0, 0]} fillOpacity={0.8} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
