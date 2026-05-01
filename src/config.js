  // ROW CONFIGURATION
    export const ROW_CONFIG = [
        {
        id: "quantity",
        label: "Menge",
        name: "quantity",
        type: "number",
        step: null,
        readonly: false,
        defaultValue: "1",
        trClass: "border-b border-border/50",
        labelClass: "px-4 py-2 font-medium text-text label-col",
        inputClass:
            "w-full px-2 py-1.5 border border-border rounded-md text-center text-sm bg-white " +
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition",
        },
        {
        id: "price",
        label: "Preis (€)",
        name: "price",
        type: "number",
        step: "0.01",
        readonly: false,
        spreadable: true,
        trClass: "border-b border-border/50",
        labelClass: "px-4 py-2 font-medium text-text",
        inputClass:
            "w-full px-2 py-1.5 border border-border rounded-md text-center text-sm bg-white " +
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition",
        },
        {
        id: "purchase-price-gross",
        label: "Einkaufspreis inkl. Ust (€)",
        name: "purchasePriceGross",
        type: "text",
        step: null,
        readonly: true,
        trClass: "border-b border-border/50 bg-primary/[0.03]",
        labelClass: "px-4 py-2 text-text/50 italic",
        inputClass:
            "w-full px-2 py-1.5 border border-transparent rounded-md text-center text-sm bg-transparent text-text/70",
        },
        {
        id: "vat-rate-purchase",
        label: "USt. (%)",
        name: "vatRatePurchase",
        type: "number",
        step: "0.01",
        readonly: false,
        spreadable: true,
        trClass: "border-b border-border/50",
        labelClass: "px-4 py-2 font-medium text-text",
        inputClass:
            "w-full px-2 py-1.5 border border-border rounded-md text-center text-sm bg-white " +
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition",
        },
        {
        id: "purchase-price",
        label: "Einkaufspreis (€)",
        name: "purchasePrice",
        type: "text",
        step: null,
        readonly: true,
        trClass: "border-b border-border/50 bg-primary/[0.03]",
        labelClass: "px-4 py-2 text-text/50 italic ",
        inputClass:
            "w-full px-2 py-1.5 border border-transparent rounded-md text-center text-sm bg-transparent text-text/70",
        },
        {
        id: "supplier-discount1",
        label: "Lieferantenrabatt 1 (%)",
        name: "supplierDiscount1",
        type: "number",
        step: "0.01",
        readonly: false,
        spreadable: true,
        trClass: "border-b border-border/50",
        labelClass: "px-4 py-2 font-medium text-text w-50",
        inputClass:
            "w-full px-2 py-1.5 border border-border rounded-md text-center text-sm bg-white " +
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition",
        },
        {
        id: "discounted-price-1",
        label: "Rabattierter Preis 1 (€)",
        name: "discountedPrice1",
        type: "text",
        step: null,
        readonly: true,
        trClass: "border-b border-border/50 bg-primary/[0.03]",
        labelClass: "px-4 py-2 text-text/50 italic",
        inputClass:
            "w-full px-2 py-1.5 border border-transparent rounded-md text-center text-sm bg-transparent text-text/70",
        },    
        {
        id: "supplier-discount2",
        label: "Lieferantenrabatt 2 (%)",
        name: "supplierDiscount2",
        type: "number",
        step: "0.01",
        readonly: false,
        spreadable: true,
        trClass: "border-b border-border/50",
        labelClass: "px-4 py-2 font-medium text-text",
        inputClass:
            "w-full px-2 py-1.5 border border-border rounded-md text-center text-sm bg-white " +
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition",
        },
        {
        id: "discounted-price-2",
        label: "Rabattierter Preis 2 (€)",
        name: "discountedPrice2",
        type: "text",
        step: null,
        readonly: true,
        trClass: "border-b border-border/50 bg-primary/[0.03]",
        labelClass: "px-4 py-2 text-text/50 italic",
        inputClass:
            "w-full px-2 py-1.5 border border-transparent rounded-md text-center text-sm bg-transparent text-text/70",
        },
        {
        id: "supplier-discount3",
        label: "Lieferantenrabatt 3 (%)",
        name: "supplierDiscount3",
        type: "number",
        step: "0.01",
        readonly: false,
        spreadable: true,
        trClass: "border-b border-border/50",
        labelClass: "px-4 py-2 font-medium text-text",
        inputClass:
            "w-full px-2 py-1.5 border border-border rounded-md text-center text-sm bg-white " +
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition",
        },
        {
        id: "discounted-price-3",
        label: "Rabattierter Preis 3 (€)",
        name: "discountedPrice3",
        type: "text",
        step: null,
        readonly: true,
        trClass: "border-b border-border/50 bg-primary/[0.03]",
        labelClass: "px-4 py-2 text-text/50 italic",
        inputClass:
            "w-full px-2 py-1.5 border border-transparent rounded-md text-center text-sm bg-transparent text-text/70",
        },
        {
        id: "invoice-charges",
        label: "Fakturenspesen (€)",
        name: "invoiceCharges",
        type: "number",
        step: "0.01",
        readonly: false,
        spreadable: true,
        trClass: "border-b border-border/50",
        labelClass: "px-4 py-2 font-medium text-text",
        inputClass:
            "w-full px-2 py-1.5 border border-border rounded-md text-center text-sm bg-white " +
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition",
        },
        {
        id: "target-price",
        label: "Zielpreis (€)",
        name: "targetPrice",
        type: "text",
        step: null,
        readonly: true,
        trClass: "border-b border-border/50 bg-primary/[0.03]",
        labelClass: "px-4 py-2 text-text/50 italic",
        inputClass:
            "w-full px-2 py-1.5 border border-transparent rounded-md text-center text-sm bg-transparent text-text/70",
        },

        {
        id: "supplier-cash-discount",
        label: "- Lieferantenskonto (%)",
        name: "supplierCashDiscount",
        type: "number",
        step: "0.01",
        readonly: false,
        spreadable: true,
        trClass: "border-b border-border/50",
        labelClass: "px-4 py-2 font-medium text-text",
        inputClass:
            "w-full px-2 py-1.5 border border-border rounded-md text-center text-sm bg-white " +
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition",
        },
        {
        id: "cash-price",
        label: "Kassapreis (€)",
        name: "cashPrice",
        type: "text",
        step: null,
        readonly: true,
        trClass: "border-b border-border/50 bg-primary/[0.03]",
        labelClass: "px-4 py-2 text-text/50 italic",
        inputClass:
            "w-full px-2 py-1.5 border border-transparent rounded-md text-center text-sm bg-transparent text-text/70",
        },
        {
        id: "procurement-costs",
        label: "+ Eigene Bezugskosten (€)",
        name: "procurementCosts",
        type: "number",
        step: "0.01",
        readonly: false,
        spreadable: true,
        trClass: "border-b border-border/50",
        labelClass: "px-4 py-2 font-medium text-text",
        inputClass:
            "w-full px-2 py-1.5 border border-border rounded-md text-center text-sm bg-white " +
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition",
        },
        {
        id: "cost-price",
        label: "Einstandspreis (€)",
        name: "costPrice",
        type: "text",
        step: null,
        readonly: true,
        trClass: "border-b border-border/50 bg-primary/[0.03]",
        labelClass: "px-4 py-2 text-text/50 italic",
        inputClass:
            "w-full px-2 py-1.5 border border-transparent rounded-md text-center text-sm bg-transparent text-text/70",
        },
        {
        id: "overhead-rate",
        label: "+ Regien (%)",
        name: "overheadRate",
        type: "number",
        step: "0.01",
        readonly: false,
        spreadable: true,
        trClass: "border-b border-border/50",
        labelClass: "px-4 py-2 font-medium text-text",
        inputClass:
            "w-full px-2 py-1.5 border border-border rounded-md text-center text-sm bg-white " +
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition",
        },
        {
        id: "total-cost",
        label: "Selbstkosten (€)",
        name: "totalCost",
        type: "text",
        step: null,
        readonly: true,
        trClass: "border-b border-border/50 bg-primary/[0.03]",
        labelClass: "px-4 py-2 text-text/50 italic",
        inputClass:
            "w-full px-2 py-1.5 border border-transparent rounded-md text-center text-sm bg-transparent text-text/70",
        },
        {
        id: "profit-rate",
        label: "+ Gewinn (%)",
        name: "profitRate",
        type: "number",
        step: "0.01",
        readonly: false,
        spreadable: true,
        trClass: "border-b border-border/50",
        labelClass: "px-4 py-2 font-medium text-text",
        inputClass:
            "w-full px-2 py-1.5 border border-border rounded-md text-center text-sm bg-white " +
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition",
        },
        {
        id: "cash-selling-price",
        label: "Kassaverkaufspreis (€)",
        name: "cashSellingPrice",
        type: "text",
        step: null,
        readonly: true,
        trClass: "border-b border-border/50 bg-primary/[0.03]",
        labelClass: "px-4 py-2 text-text/50 italic",
        inputClass:
            "w-full px-2 py-1.5 border border-transparent rounded-md text-center text-sm bg-transparent text-text/70",
        },
        {
        id: "customer-cash-discount-rate",
        label: "+ Kundenskonto (%)",
        name: "customerCashDiscountRate",
        type: "number",
        step: "0.01",
        readonly: false,
        spreadable: true,
        trClass: "border-b border-border/50",
        labelClass: "px-4 py-2 font-medium text-text",
        inputClass:
            "w-full px-2 py-1.5 border border-border rounded-md text-center text-sm bg-white " +
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition",
        },
        {
        id: "target-selling-price",
        label: "Zielverkaufspreis (€)",
        name: "targetSellingPrice",
        type: "text",
        step: null,
        readonly: true,
        trClass: "border-b border-border/50 bg-primary/[0.03]",
        labelClass: "px-4 py-2 text-text/50 italic",
        inputClass:
            "w-full px-2 py-1.5 border border-transparent rounded-md text-center text-sm bg-transparent text-text/70",
        },
        {
        id: "customer-discount-3",
        label: "+ Kundenrabatt 3 (%)",
        name: "customerDiscount3",
        type: "number",
        step: "0.01",
        readonly: false,
        spreadable: true,
        trClass: "border-b border-border/50",
        labelClass: "px-4 py-2 font-medium text-text",
        inputClass:
            "w-full px-2 py-1.5 border border-border rounded-md text-center text-sm bg-white " +
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition",
        },
        {
        id: "discounted-selling-price-2",
        label: "Rabattierter Zielverkaufspreis 2 (€)",
        name: "discountedSellingPrice2",
        type: "text",
        step: null,
        readonly: true,
        trClass: "border-b border-border/50 bg-primary/[0.03]",
        labelClass: "px-4 py-2 text-text/50 italic",
        inputClass:
            "w-full px-2 py-1.5 border border-transparent rounded-md text-center text-sm bg-transparent text-text/70",
        },
        {
        id: "customer-discount-2",
        label: "+ Kundenrabatt 2 (%)",
        name: "customerDiscount2",
        type: "number",
        step: "0.01",
        readonly: false,
        spreadable: true,
        trClass: "border-b border-border/50",
        labelClass: "px-4 py-2 font-medium text-text",
        inputClass:
            "w-full px-2 py-1.5 border border-border rounded-md text-center text-sm bg-white " +
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition",
        },
        {
        id: "discounted-selling-price-1",
        label: "Rabattierter Zielverkaufspreis 1 (€)",
        name: "discountedSellingPrice1",
        type: "text",
        step: null,
        readonly: true,
        trClass: "border-b border-border/50 bg-primary/[0.03]",
        labelClass: "px-4 py-2 text-text/50 italic",
        inputClass:
            "w-full px-2 py-1.5 border border-transparent rounded-md text-center text-sm bg-transparent text-text/70",
        },
        {
        id: "customer-discount-1",
        label: "+ Kundenrabatt 1 (%)",
        name: "customerDiscount1",
        type: "number",
        step: "0.01",
        readonly: false,
        spreadable: true,
        trClass: "border-b border-border/50",
        labelClass: "px-4 py-2 font-medium text-text",
        inputClass:
            "w-full px-2 py-1.5 border border-border rounded-md text-center text-sm bg-white " +
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition",
        },
        {
        id: "rrp",
        label: "UVP (€)",
        name: "rrp",
        type: "text",
        step: null,
        readonly: true,
        trClass: "border-b border-border/50 bg-primary/[0.03]",
        labelClass: "px-4 py-2 text-text/50 italic",
        inputClass:
            "w-full px-2 py-1.5 border border-transparent rounded-md text-center text-sm bg-transparent text-text/70",
        },
        {
        id: "vat-rate",
        label: "+ USt. (%)",
        name: "vatRate",
        type: "number",
        step: "0.01",
        readonly: false,
        spreadable: true,
        trClass: "border-b border-border/50",
        labelClass: "px-4 py-2 font-medium text-text",
        inputClass:
            "w-full px-2 py-1.5 border border-border rounded-md text-center text-sm bg-white " +
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition",
        },
        {
        id: "rrp-gross",
        label: "UVP inkl. USt. (€)",
        name: "rrpGross",
        type: "text",
        step: null,
        readonly: true,
        trClass: "border-b border-border/50 bg-primary/[0.03]",
        labelClass: "px-4 py-2 text-text/50 italic",
        inputClass:
            "w-full px-2 py-1.5 border border-transparent rounded-md text-center text-sm bg-transparent text-text/70",
        },



        {
        id: "result",
        label: "Ergebnis (€)",
        name: "result",
        type: "text",
        step: null,
        readonly: true,
        trClass: "bg-primary/[0.06]",
        labelClass: "px-4 py-2.5 font-semibold text-primary",
        inputClass:
            "w-full px-2 py-1.5 border border-primary/25 rounded-md text-center text-sm font-semibold text-primary bg-white",
        },
    ];