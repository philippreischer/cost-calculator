    // LOCAL STORAGE – save & restore values

    export const STORAGE_KEY = "calcAppValues";
    export const ROW_VISIBILITY_KEY = "calcAppRowVisibility";
    
    export function saveValues(tbody, columnInput) {
        const inputs = tbody.querySelectorAll("input");
        const saved = {};
        inputs.forEach((input) => {
            if (input.value !== "") {
                saved[input.name] = input.value;
            }
        });
        saved._columnCount = columnInput.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
        return saved;
    }
    
    export function restoreValues(tbody, saved) {
        if (!saved) {
        try {
            saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        } catch {
            saved = {};
        }
        }
        const inputs = tbody.querySelectorAll("input");
        inputs.forEach((input) => {
            if (saved[input.name] !== undefined) {
                input.value = saved[input.name];
            }
        });
    }
    
    export function saveRowVisibility() {
        const visibility = {};
        document.querySelectorAll("#row-toggles input[type='checkbox']").forEach((cb) => {
            visibility[cb.dataset.row] = cb.checked;
        });
        localStorage.setItem(ROW_VISIBILITY_KEY, JSON.stringify(visibility));
    }
    
    export function restoreRowVisibility() {
           
        const DEFAULT_VISIBILITY = {
            "quantity": true,
            "price": true,
            "purchase-price-gross": false,
            "vat-rate-purchase": false,
            "purchase-price": true,
            "supplier-discount1": true,
            "discounted-price-1": false,
            "supplier-discount2": false,
            "discounted-price-2": false,
            "supplier-discount3": false,
            "discounted-price-3": false,
            "invoice-charges": false,
            "target-price": false,
            "supplier-cash-discount": false,
            "cash-price": false,
            "procurement-costs": false,
            "cost-price": false,
            "overhead-rate": false,
            "total-cost": true,
            "profit-rate": true,
            "cash-selling-price": false,
            "customer-cash-discount-rate": false,
            "target-selling-price": false,
            "customer-discount-3": false,
            "discounted-selling-price-2": false,
            "customer-discount-2": false,
            "discounted-selling-price-1": true,
            "customer-discount-1": true,
            "rrp": true,
            "vat-rate": false,
            "rrp-gross": false,
            "result": true,
        };
    
        try {
            const visibility = JSON.parse(localStorage.getItem(ROW_VISIBILITY_KEY)) ?? DEFAULT_VISIBILITY;
            document.querySelectorAll("#row-toggles input[type='checkbox']").forEach((cb) => {
                const rowId = cb.dataset.row;
                if (visibility[rowId] !== undefined) {
                    cb.checked = visibility[rowId];
                }
            });
        } catch {
            // no saved visibility
        }
    }