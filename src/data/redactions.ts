export interface Redaction {
  top: string;
  left?: string;
  right?: string;
  width: string;
  height: string;
  label?: string;
}

export const redactionsMap: Record<string, Redaction[]> = {
  "/images/warehouse-listing.png": [
    // Top-right logo "BMJ LOGISTICS"
    { top: "1.5%", right: "3.5%", width: "5%", height: "4.5%", label: "Client Logo" },
    // Table content columns containing client names, warehouse locations, and assignees
    { top: "25%", left: "34%", width: "17%", height: "70%", label: "Confidential Data" }, // Warehouse column rows
    { top: "25%", left: "51%", width: "10%", height: "70%", label: "Confidential ID" },  // Client column rows
    { top: "25%", left: "80%", width: "8%", height: "70%", label: "Staff Name" }         // Worker column rows
  ],
  "/images/warehouse-detail.png": [
    // Top-right logo
    { top: "1.5%", right: "3.5%", width: "5%", height: "4.5%", label: "Client Logo" },
    // Barcode & SKU details
    { top: "82%", left: "38%", width: "13%", height: "18%", label: "SKU Data" }
  ],
  "/images/warehouse-edit.png": [
    // Top-right logo
    { top: "1.5%", right: "3.5%", width: "5%", height: "4.5%", label: "Client Logo" },
    // Left panel warehouse list
    { top: "24%", left: "5.5%", width: "28%", height: "70%", label: "Internal Node List" },
    // Address detail field inputs
    { top: "29%", left: "37%", width: "29%", height: "6%", label: "Internal Address" },
    { top: "39%", left: "37%", width: "58%", height: "6%", label: "Internal Address" },
    // CCTV Server details
    { top: "74%", left: "37%", width: "29%", height: "6%", label: "Internal IP & Endpoint" }
  ],
  "/images/warehouse-printers.png": [
    // Top-right logo
    { top: "1.5%", right: "3.5%", width: "5%", height: "4.5%", label: "Client Logo" },
    // Printers list on left
    { top: "24%", left: "5.5%", width: "28%", height: "70%", label: "Printer Names" },
    // IP Addresses & port configurations on right
    { top: "45%", left: "57%", width: "15%", height: "5%", label: "Internal IP" },
    { top: "60%", left: "57%", width: "20%", height: "5%", label: "Staff Dev Details" }
  ],
  "/images/warehouse-station.png": [
    // Top-right logo
    { top: "1.5%", right: "3.5%", width: "5%", height: "4.5%", label: "Client Logo" },
    // Warehouse title header
    { top: "8%", right: "2.5%", width: "18%", height: "6%", label: "Location" }
  ]
};
