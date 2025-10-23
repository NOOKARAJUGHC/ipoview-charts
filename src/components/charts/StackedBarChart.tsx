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

interface StackedBarChartProps {
  selectedIPOs: IPOData[];
}

export const StackedBarChart = ({ selectedIPOs }: StackedBarChartProps) => {
  const data = selectedIPOs.map((ipo) => ({
    name: ipo.name,
    Anchor: ipo.anchorInvestor,
    QIB: ipo.qib,
    "B-NII": ipo.bNii,
    "S-NII": ipo.sNii,
    Retail: ipo.retail,
    Employee: ipo.employee,
  }));

  const colors = ["#F6AD55", "#FC8181", "#F687B3", "#B794F4", "#63B3ED", "#68D391"];

  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-6">Subscription Breakdown by Investor Type</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis dataKey="name" tick={{ fill: "hsl(var(--muted-foreground))" }} />
          <YAxis
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            label={{ value: "Subscription (x)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--popover))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
            formatter={(value: any) => `${value}x`}
          />
          <Legend />
          {["Anchor", "QIB", "B-NII", "S-NII", "Retail", "Employee"].map((key, idx) => (
            <Bar
              key={key}
              dataKey={key}
              stackId="a"
              fill={colors[idx]}
              radius={idx === 5 ? [8, 8, 0, 0] : [0, 0, 0, 0]}
              fillOpacity={0.8}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
