import { IPOData } from "@/data/ipoData";
import { Card } from "@/components/ui/card";

interface ComparisonTableViewProps {
  selectedIPOs: IPOData[];
}

export const ComparisonTableView = ({ selectedIPOs }: ComparisonTableViewProps) => {
  if (selectedIPOs.length === 0) {
    return (
      <Card className="glass-card p-12 text-center">
        <p className="text-muted-foreground">Select IPOs to compare</p>
      </Card>
    );
  }

  const metricGroups = [
    {
      title: "Basic Information",
      metrics: [
        { label: "Sector", key: "sector" },
        { label: "IPO Price Range", key: "priceRange", format: (v: any) => `₹${v.min} - ₹${v.max}` },
        { label: "Lot Size", key: "lotSize" },
        { label: "Listing Date", key: "listingDate" },
        { label: "IPO Open Date", key: "ipoOpenDate" },
        { label: "IPO Close Date", key: "ipoCloseDate" },
        { label: "Estimated Market Cap", key: "estimatedMarketCap", format: (v: number) => `₹${v} Cr` },
      ],
    },
    {
      title: "Subscription Metrics",
      metrics: [
        { label: "Total Subscription", key: "totalSubscription", format: (v: number) => `${v}x` },
        { label: "Anchor Investor", key: "anchorInvestor", format: (v: number) => `${v}x` },
        { label: "QIB", key: "qib", format: (v: number) => `${v}x` },
        { label: "B-NII", key: "bNii", format: (v: number) => `${v}x` },
        { label: "S-NII", key: "sNii", format: (v: number) => `${v}x` },
        { label: "Retail", key: "retail", format: (v: number) => `${v}x` },
        { label: "Employee", key: "employee", format: (v: number) => `${v}x` },
      ],
    },
    {
      title: "Performance Metrics",
      metrics: [
        { label: "Profit After Tax", key: "profitAfterTax", format: (v: number) => `₹${v} Cr` },
        { label: "PAT Margin", key: "patMargin", format: (v: number) => `${v}%` },
        { label: "ROE", key: "roe", format: (v: number) => `${v}%` },
        { label: "ROCE", key: "roce", format: (v: number) => `${v}%` },
        { label: "P/E", key: "pe" },
        { label: "P/B", key: "pb" },
        { label: "Sales Growth", key: "salesGrowth", format: (v: number) => `${v}%` },
        { label: "EV/EBITDA", key: "evEbitda" },
      ],
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {metricGroups.map((group) => (
        <Card key={group.title} className="glass-card overflow-hidden">
          <div className="bg-muted/50 px-6 py-4 border-b">
            <h3 className="font-semibold text-lg">{group.title}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium text-muted-foreground">Metric</th>
                  {selectedIPOs.map((ipo) => (
                    <th key={ipo.id} className="text-left p-4 font-medium">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: ipo.color }}
                        />
                        {ipo.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {group.metrics.map((metric, idx) => (
                  <tr
                    key={metric.key}
                    className={`border-b last:border-b-0 ${
                      idx % 2 === 0 ? "bg-muted/20" : ""
                    } hover:bg-muted/40 transition-colors`}
                  >
                    <td className="p-4 text-sm font-medium text-muted-foreground">
                      {metric.label}
                    </td>
                    {selectedIPOs.map((ipo) => {
                      const value = (ipo as any)[metric.key];
                      const displayValue = metric.format ? metric.format(value) : value;
                      return (
                        <td key={ipo.id} className="p-4 font-medium">
                          {displayValue}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      ))}
    </div>
  );
};
