let arr = [];
let onedit = -1;

function spend() {
    let ie = document.getElementById("ie").value;
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;
    let date = document.getElementById("date").value;

    if (name && amount && date && ie) {
        if (onedit === -1) {
            arr.push({ name, amount: parseInt(amount), category: ie, date });
        } else {
            arr[onedit] = { name, amount: parseInt(amount), category: ie, date };
            onedit = -1;
        }
        
        document.getElementById("ie").value = "";
        document.getElementById("name").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("date").value = "";
        printval();
        Total();
    } else {
        alert("Please fill out all fields.");
    }
}

function printval(filters = arr) {
    const table = document.getElementById("table1");
    table.innerHTML = "";
    filters.forEach((val, i) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${val.name}</td>
            <td>₹${val.amount}</td>
            <td>${val.category}</td>
            <td>${val.date}</td>
            <td>
                <span class="edit-btn" onclick="editvals(${i})">Edit</span>
                <span class="delete-btn" onclick="deletevals(${i})">Delete</span>
            </td>
        `;
        table.appendChild(row);
    });
}

function editvals(i) {
    const edits = arr[i];
    document.getElementById("ie").value = edits.category;
    document.getElementById("name").value = edits.name;
    document.getElementById("amount").value = edits.amount;
    document.getElementById("date").value = edits.date;
    onedit = i;
}

function deletevals(i) {
    arr.splice(i, 1);
    printval();
    Total();
}

function Total() {
    const total = arr.reduce((sum, edits) => sum + edits.amount, 0);
    document.getElementById("total").innerText = `₹${total}`;
}

function filters() {
    const category = document.getElementById("filters").value;
    const filtered = category === "All" ? arr :arr.filter(v => v.category === category);
    printval(filtered);
}

