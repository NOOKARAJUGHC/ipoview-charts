import { IPOData } from "@/data/ipoData";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface DonutChartProps {
  selectedIPOs: IPOData[];
}

export const DonutChart = ({ selectedIPOs }: DonutChartProps) => {
  const colors = ["#F6AD55", "#FC8181", "#F687B3", "#B794F4", "#63B3ED", "#68D391"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {selectedIPOs.map((ipo) => {
        const data = [
          { name: "Anchor", value: ipo.anchorInvestor },
          { name: "QIB", value: ipo.qib },
          { name: "B-NII", value: ipo.bNii },
          { name: "S-NII", value: ipo.sNii },
          { name: "Retail", value: ipo.retail },
          { name: "Employee", value: ipo.employee },
        ];

        return (
          <Card key={ipo.id} className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: ipo.color }} />
              <h4 className="font-semibold">{ipo.name}</h4>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} opacity={0.8} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                  formatter={(value: any) => `${value}x`}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  wrapperStyle={{ fontSize: "12px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        );
      })}
    </div>
  );
};
