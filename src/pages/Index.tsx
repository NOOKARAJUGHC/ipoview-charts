import { useState } from "react";
import { ipoDatabase } from "@/data/ipoData";
import { IPOSelectionCard } from "@/components/IPOSelectionCard";
import { ComparisonTableView } from "@/components/ComparisonTableView";
import { ComparisonChartView } from "@/components/ComparisonChartView";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Table, TrendingUp, Download, Palette } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [selectedIPOs, setSelectedIPOs] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const toggleIPO = (id: string) => {
    setSelectedIPOs((prev) =>
      prev.includes(id) ? prev.filter((ipoId) => ipoId !== id) : [...prev, id]
    );
  };

  const handleCompare = () => {
    if (selectedIPOs.length < 2) {
      toast.error("Please select at least 2 IPOs to compare");
      return;
    }
    setShowComparison(true);
    toast.success(`Comparing ${selectedIPOs.length} IPOs`);
  };

  const handleExport = () => {
    toast.success("Export feature coming soon!");
  };

  const selectedIPOData = ipoDatabase.filter((ipo) => selectedIPOs.includes(ipo.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-ipo-orange" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gradient">IPO Comparison</h1>
                <p className="text-sm text-muted-foreground">
                  Compare Indian IPOs with advanced analytics
                </p>
              </div>
            </div>
            {showComparison && (
              <Button variant="outline" onClick={handleExport} className="gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {!showComparison ? (
          <div className="space-y-8 animate-slide-up">
            <div className="text-center space-y-2">
              <h2 className="text-xl font-semibold">Select IPOs to Compare</h2>
              <p className="text-muted-foreground">
                Choose at least 2 IPOs to view detailed comparison and charts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ipoDatabase.map((ipo) => (
                <IPOSelectionCard
                  key={ipo.id}
                  ipo={ipo}
                  isSelected={selectedIPOs.includes(ipo.id)}
                  onToggle={toggleIPO}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={handleCompare}
                disabled={selectedIPOs.length < 2}
                className="gap-2 text-lg px-8 py-6"
              >
                <BarChart3 className="w-5 h-5" />
                Compare {selectedIPOs.length > 0 ? `${selectedIPOs.length} IPOs` : "IPOs"}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  Comparing {selectedIPOData.length} IPOs
                </h2>
                <div className="flex items-center gap-4 mt-2">
                  {selectedIPOData.map((ipo) => (
                    <div key={ipo.id} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: ipo.color }}
                      />
                      <span className="text-sm font-medium">{ipo.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button variant="outline" onClick={() => setShowComparison(false)}>
                Change Selection
              </Button>
            </div>

            <Tabs defaultValue="chart" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto glass-card">
                <TabsTrigger value="chart" className="gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Chart View
                </TabsTrigger>
                <TabsTrigger value="table" className="gap-2">
                  <Table className="w-4 h-4" />
                  Table View
                </TabsTrigger>
              </TabsList>

              <TabsContent value="chart" className="mt-8">
                <ComparisonChartView selectedIPOs={selectedIPOData} />
              </TabsContent>

              <TabsContent value="table" className="mt-8">
                <ComparisonTableView selectedIPOs={selectedIPOData} />
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>IPO Comparison Dashboard • Advanced Financial Analytics Platform</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
