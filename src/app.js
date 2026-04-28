document.addEventListener("DOMContentLoaded", () => {
 
    function el(tag, props = {}, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
        if (k === 'class') node.className = v;
        else node.setAttribute(k, v);
    }
    for (const child of children) {
        node.append(typeof child === 'string' ? document.createTextNode(child) : child);
    }
    return node;
    }
    
  // ROW CONFIGURATION
    const ROW_CONFIG = [
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
    
    const results = {
        purchasePriceInclTax: 0,
        purchasePrice: 0,
        discountedPrice1: 0,
        discountedPrice2: 0,
        discountedPrice3: 0, 
        result: 0
    };

    // DOM REFERENCES

    const thead = document.getElementById("calc-thead");
    const tbody = document.getElementById("calc-tbody");
    const columnInput = document.getElementById("column-count");
    const columnDisplay = document.getElementById("column-count-display");
    
    // LOCAL STORAGE – save & restore values

    const STORAGE_KEY = "calcAppValues";
    const ROW_VISIBILITY_KEY = "calcAppRowVisibility";
    
    function saveValues() {
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
    
    function restoreValues(saved) {
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
    
    function saveRowVisibility() {
        const visibility = {};
        document.querySelectorAll("#row-toggles input[type='checkbox']").forEach((cb) => {
            visibility[cb.dataset.row] = cb.checked;
        });
        localStorage.setItem(ROW_VISIBILITY_KEY, JSON.stringify(visibility));
    }
    
    function restoreRowVisibility() {
        try {
            const visibility = JSON.parse(localStorage.getItem(ROW_VISIBILITY_KEY));
            if (!visibility) return;
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
    
    // RENDER TABLE
   
    function renderTable(columnCount) {
        const svgNS = 'http://www.w3.org/2000/svg';

        const saved = tbody.children.length > 0 ? saveValues() : null;

        columnDisplay.textContent = `${columnCount} Spalte${columnCount === 1 ? '' : 'n'}`;

        // --- Thead ---
        const headTr = el('tr', { class: 'bg-bg border-b border-border' },
            el('th', { class: 'text-left px-4 py-2.5 font-medium text-text/50 w-[170px] min-w-[140px]' }, 'Position')
        );
        for (let i = 1; i <= columnCount; i++) {
            headTr.appendChild(
                el('th', { class: 'text-center px-3 py-2.5 font-medium text-text/50 min-w-[100px]' }, `Spalte ${i}`)
            );
        }
        thead.innerHTML = '';
        thead.appendChild(headTr);

        // --- Tbody ---
        const hiddenRows = new Set();
        document.querySelectorAll("#row-toggles input[type='checkbox']").forEach(cb => {
            if (!cb.checked) hiddenRows.add(cb.dataset.row);
        });

        tbody.innerHTML = '';

        for (const row of ROW_CONFIG) {
            const hiddenClass = hiddenRows.has(row.id) ? ' hidden' : '';

            // Label-Spalte
            let labelTd;
            if (row.spreadable) {
                const svg = document.createElementNS(svgNS, 'svg');
                svg.setAttribute('class', 'w-3.5 h-3.5');
                svg.setAttribute('fill', 'none');
                svg.setAttribute('viewBox', '0 0 24 24');
                svg.setAttribute('stroke', 'currentColor');
                svg.setAttribute('stroke-width', '2.5');
                const path = document.createElementNS(svgNS, 'path');
                path.setAttribute('stroke-linecap', 'round');
                path.setAttribute('stroke-linejoin', 'round');
                path.setAttribute('d', 'M13 5l7 7-7 7');
                svg.appendChild(path);

                labelTd = el('td', { class: row.labelClass },
                    el('div', { class: 'flex items-center justify-between gap-1' },
                        el('span', {}, row.label),
                        el('button', {
                            type: 'button',
                            'data-spread': row.name,
                            class: 'spread-btn flex items-center justify-center w-7 h-7 rounded hover:bg-primary/10 text-primary transition cursor-pointer',
                            title: `${row.label} aus Spalte 1 übertragen`,
                        }, svg)
                    )
                );
            } else {
                labelTd = el('td', { class: row.labelClass }, row.label);
            }

            const tr = el('tr', { id: `row-${row.id}`, class: `${row.trClass}${hiddenClass}` }, labelTd);

            // Input-Spalten
            for (let i = 1; i <= columnCount; i++) {
                const input = document.createElement('input');
                input.type = row.type;
                input.name = `${row.name}_${i}`;
                input.className = row.inputClass;
                input.placeholder = row.readonly? '—': "";
                if (row.step)         input.setAttribute('step', row.step);
                if (row.readonly)     input.readOnly = true;
                if (row.defaultValue) input.setAttribute('value', row.defaultValue);
                

                tr.appendChild(el('td', { class: 'px-2 py-1.5' }, input));
            }

            tbody.appendChild(tr);
        }

        restoreValues(saved);
    }

// Restore column count from localStorage on page load
    const storedData = (() => {
        try { 
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; 
        } catch { 
            return {}; 
        }
    })();

    if (storedData._columnCount) {
        columnInput.value = storedData._columnCount;
    }
    
    restoreRowVisibility();
    renderTable(parseInt(columnInput.value, 10) || 1);
    
    
    columnInput.addEventListener("input", () => {
        const count = Math.max(1, Math.min(20, parseInt(columnInput.value, 10) || 1));
        renderTable(count);
    });
    
    document.getElementById("calc-form").addEventListener("input", () => {
        saveValues();
    });
    
    // FORMAT PRICES (2 decimal places)

    document.addEventListener("blur", (e) => {
    if (e.target.name && (e.target.readOnly || e.target.name.startsWith("price_"))) {
        const val = parseFloat(e.target.value);
        if (!isNaN(val)) {
            e.target.value = val.toFixed(2);
        }
    }
    }, true);
    
    // RESET – also clear localStorage
    document.getElementById("calc-form").addEventListener("reset", () => {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(ROW_VISIBILITY_KEY);
        renderTable(parseInt(columnInput.value, 10) || 1);
        
        
    });
    
    // SPREAD DISCOUNT – single row & batch
    const form = document.getElementById("calc-form");
    
    /**
     * Copy a row's value from column 1 to all other columns.
     * @param {string} fieldName – e.g. "discount1", "discount2"
     */
    function spreadRow(fieldName) {
        const count = parseInt(columnInput.value, 10) || 1;
        const sourceInput = form.elements[`${fieldName}_1`];
        if (!sourceInput) return;
    
        const sourceValue = sourceInput.value;
        for (let i = 2; i <= count; i++) {
            const target = form.elements[`${fieldName}_${i}`];
            if (target) target.value = sourceValue;
        }
        saveValues();
    }
    
    // Single row spread – delegated click on → buttons
    tbody.addEventListener("click", (e) => {
        const btn = e.target.closest(".spread-btn");
        if (!btn) return;
    
        const fieldName = btn.dataset.spread;
        if (fieldName) spreadRow(fieldName);
    });
    
    // Batch spread – all discounts at once
    document.getElementById("spread-all-discounts").addEventListener("click", () => {
        const discountRows = ROW_CONFIG.filter((r) => r.spreadable);
        for (const row of discountRows) {
            spreadRow(row.name);
        }
    });
    
    // DRAWER LOGIC
    const drawer = document.getElementById("drawer");
    const overlay = document.getElementById("drawer-overlay");
    const toggleBtn = document.getElementById("drawer-toggle");
    const closeBtn = document.getElementById("drawer-close");
    
    let isOpen = false;
    
    function openDrawer() {
        isOpen = true;
        drawer.classList.remove("-translate-y-[calc(100%+57px)]");
        drawer.classList.add("translate-y-0");
        drawer.classList.remove("lg:translate-x-full");
        drawer.classList.add("lg:translate-x-0");
        overlay.classList.remove("hidden");
        overlay.classList.add("opacity-100");
    }
    
    function closeDrawer() {
        isOpen = false;
        drawer.classList.remove("translate-y-0");
        drawer.classList.add("-translate-y-[calc(100%+57px)]");
        drawer.classList.remove("lg:translate-x-0");
        drawer.classList.add("lg:translate-x-full");
        overlay.classList.add("hidden");
        overlay.classList.remove("opacity-100");
    }
    
    function toggleDrawer() {
        isOpen ? closeDrawer() : openDrawer();
    }
    
    toggleBtn.addEventListener("click", toggleDrawer);
    closeBtn.addEventListener("click", closeDrawer);
    overlay.addEventListener("click", closeDrawer);
    
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && isOpen) closeDrawer();
    });
    
    // DRAWER: ROW TOGGLE
    const rowToggles = document.getElementById("row-toggles");
    
    rowToggles.addEventListener("change", (e) => {
        if (e.target.type !== "checkbox") return;
    
        const rowId = e.target.dataset.row;
        const row = document.getElementById(`row-${rowId}`);
        if (!row) return;
    
        row.classList.toggle("hidden", !e.target.checked);
        saveRowVisibility();
    });


    const columns = {};
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const count = parseInt(document.getElementById("column-count").value, 10);
        //const columns = {};

        for (let i = 1; i <= count; i++) {
            columns[i] = {
            quantity:  parseFloat(form.elements[`quantity_${i}`].value) || 0,
            price:     parseFloat(form.elements[`price_${i}`].value) || 0,
            purchaseTax: parseFloat(form.elements[`purchaseTax_${i}`].value) || 0,
            discount1: parseFloat(form.elements[`discount1_${i}`].value) || 0,
            discount2: parseFloat(form.elements[`discount2_${i}`].value) || 0,
            discount3: parseFloat(form.elements[`discount3_${i}`].value) || 0,
            };
            console.log(columns[i]);
            calculatePrice(columns[i].quantity, columns[i].price, columns[i].purchaseTax, columns[i].discount1, columns[i].discount2, columns[i].discount3);
            
            form.elements[`purchasePriceInclTax_${i}`].value = results.purchasePriceInclTax.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            form.elements[`purchasePrice_${i}`].value = results.purchasePrice.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            form.elements[`discountedPrice1_${i}`].value = results.discountedPrice1.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            form.elements[`discountedPrice2_${i}`].value = results.discountedPrice2.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            form.elements[`discountedPrice3_${i}`].value = results.discountedPrice3.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            form.elements[`result_${i}`].value = results.result.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
    });

    console.log(results)
    function calculatePrice(quantity, price, purchaseTax, discount1, discount2, discount3){
        let subtotal = price;
        results.purchasePriceInclTax = subtotal*quantity;
        console.log(results.purchasePriceInclTax);

        subtotal = calculatePurchasePrice(subtotal, purchaseTax);
        
        
        results.purchasePrice = subtotal*quantity;

        console.log(results.purchasePriceInclTax);

        subtotal = calculateDiscountedPrice(subtotal, discount1);
        results.discountedPrice1 = subtotal*quantity;
        console.log(results.discountedPrice1);
        subtotal = calculateDiscountedPrice(subtotal, discount2);
        results.discountedPrice2 = subtotal*quantity;
        console.log(results.discountedPrice2);
        subtotal = calculateDiscountedPrice(subtotal, discount3);
        results.discountedPrice3 = subtotal*quantity;
        console.log(results.discountedPrice3);
        results.result = subtotal*quantity;
        console.log(results.result);
    }

    function calculatePurchasePrice(price, purchaseTax){ 
        return parseFloat((price / (100 + purchaseTax) * 100).toFixed(2));
    }
    
    console.log(results);
    function calculateDiscountedPrice(price, discount){ 
        return parseFloat((price / 100 * (100 - discount)).toFixed(2));
    }

    
});