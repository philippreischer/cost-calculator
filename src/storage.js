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