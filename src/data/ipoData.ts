export interface IPOData {
  id: string;
  name: string;
  sector: string;
  priceRange: { min: number; max: number };
  lotSize: number;
  listingDate: string;
  ipoOpenDate: string;
  ipoCloseDate: string;
  estimatedMarketCap: number; // in Crores
  totalSubscription: number; // times
  anchorInvestor: number;
  qib: number;
  bNii: number;
  sNii: number;
  retail: number;
  employee: number;
  profitAfterTax: number; // in Crores
  patMargin: number; // percentage
  roe: number; // percentage
  roce: number; // percentage
  pe: number;
  pb: number;
  salesGrowth: number; // percentage
  evEbitda: number;
  color: string;
}

export const ipoDatabase: IPOData[] = [
  {
    id: "glottis",
    name: "Glottis Ltd",
    sector: "Technology",
    priceRange: { min: 280, max: 320 },
    lotSize: 45,
    listingDate: "2024-12-15",
    ipoOpenDate: "2024-11-20",
    ipoCloseDate: "2024-11-25",
    estimatedMarketCap: 2800,
    totalSubscription: 8.5,
    anchorInvestor: 2.1,
    qib: 12.4,
    bNii: 6.8,
    sNii: 5.2,
    retail: 3.9,
    employee: 1.8,
    profitAfterTax: 185,
    patMargin: 18.5,
    roe: 22.4,
    roce: 24.8,
    pe: 28.5,
    pb: 6.2,
    salesGrowth: 35.6,
    evEbitda: 18.2,
    color: "#F6AD55",
  },
  {
    id: "tata-capital",
    name: "Tata Capital Ltd",
    sector: "Financial Services",
    priceRange: { min: 500, max: 550 },
    lotSize: 27,
    listingDate: "2024-11-30",
    ipoOpenDate: "2024-11-05",
    ipoCloseDate: "2024-11-10",
    estimatedMarketCap: 8500,
    totalSubscription: 15.2,
    anchorInvestor: 3.8,
    qib: 24.6,
    bNii: 18.4,
    sNii: 12.8,
    retail: 8.9,
    employee: 2.4,
    profitAfterTax: 425,
    patMargin: 24.2,
    roe: 18.6,
    roce: 19.4,
    pe: 22.8,
    pb: 4.8,
    salesGrowth: 28.4,
    evEbitda: 12.6,
    color: "#63B3ED",
  },
  {
    id: "midwest",
    name: "Midwest Ltd",
    sector: "Manufacturing",
    priceRange: { min: 180, max: 210 },
    lotSize: 70,
    listingDate: "2025-01-20",
    ipoOpenDate: "2024-12-10",
    ipoCloseDate: "2024-12-15",
    estimatedMarketCap: 1850,
    totalSubscription: 5.8,
    anchorInvestor: 1.5,
    qib: 8.2,
    bNii: 4.8,
    sNii: 3.6,
    retail: 2.8,
    employee: 1.2,
    profitAfterTax: 98,
    patMargin: 12.8,
    roe: 16.4,
    roce: 18.2,
    pe: 18.6,
    pb: 3.2,
    salesGrowth: 22.4,
    evEbitda: 14.8,
    color: "#68D391",
  },
];
