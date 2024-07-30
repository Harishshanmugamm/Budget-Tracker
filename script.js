function spend() {
  const ie = document.getElementById("ie").value;
  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;
  const table = document.getElementById("table1");
  if (type && name && amount) {
    const rows = document.createElement("tr");
    rows.innerHTML = `
            <td>${ie}</td>
            <td>${name}</td>
            <td>₹${amount}</td>
            <td><span class="delete-btn" onclick="deleteTransaction(this)">Delete</span></td>
        `;
    table.appendChild(rows);

    document.getElementById("type").value = "";
    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
  } else {
    alert("Please fill out all fields.");
  }
}

function deleteTransaction(e) {
  e.parentElement.parentElement.remove();
}
