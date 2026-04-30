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
        labelClass: "px-4 py-2 font-medium text-text",
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
        id: "purchase-price-incl-tax",
        label: "Einkaufspreis inkl. Ust",
        name: "purchasePriceInclTax",
        type: "text",
        step: null,
        readonly: true,
        trClass: "border-b border-border/50 bg-primary/[0.03]",
        labelClass: "px-4 py-2 text-text/50 italic",
        inputClass:
            "w-full px-2 py-1.5 border border-transparent rounded-md text-center text-sm bg-transparent text-text/70",
        },
        {
        id: "purchase-tax",
        label: "USt. (%)",
        name: "purchaseTax",
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
        labelClass: "px-4 py-2 text-text/50 italic",
        inputClass:
            "w-full px-2 py-1.5 border border-transparent rounded-md text-center text-sm bg-transparent text-text/70",
        },
        {
        id: "discount1",
        label: "Rabatt 1 (%)",
        name: "discount1",
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
        id: "discounted-price-1",
        label: "Rab. Preis 1",
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
        id: "discount2",
        label: "Rabatt 2 (%)",
        name: "discount2",
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
        label: "Rab. Preis 2",
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
        id: "discount3",
        label: "Rabatt 3 (%)",
        name: "discount3",
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
        label: "Rab. Preis 3",
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
        id: "result",
        label: "Ergebnis",
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