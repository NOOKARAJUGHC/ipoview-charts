import { IPOData } from "@/data/ipoData";
import { Card } from "@/components/ui/card";
import { SpiderChart } from "./charts/SpiderChart";
import { BubbleChartView } from "./charts/BubbleChartView";
import { StackedBarChart } from "./charts/StackedBarChart";
import { DonutChart } from "./charts/DonutChart";
import { ColumnChart } from "./charts/ColumnChart";
import { GaugeChart } from "./charts/GaugeChart";

interface ComparisonChartViewProps {
  selectedIPOs: IPOData[];
}

export const ComparisonChartView = ({ selectedIPOs }: ComparisonChartViewProps) => {
  if (selectedIPOs.length === 0) {
    return (
      <Card className="glass-card p-12 text-center">
        <p className="text-muted-foreground">Select IPOs to view charts</p>
      </Card>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SpiderChart selectedIPOs={selectedIPOs} />
        <BubbleChartView selectedIPOs={selectedIPOs} />
      </div>

      <StackedBarChart selectedIPOs={selectedIPOs} />

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Investor Composition</h3>
        <DonutChart selectedIPOs={selectedIPOs} />
      </div>

      <ColumnChart selectedIPOs={selectedIPOs} />

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Subscription Levels</h3>
        <GaugeChart selectedIPOs={selectedIPOs} />
      </div>
    </div>
  );
};
