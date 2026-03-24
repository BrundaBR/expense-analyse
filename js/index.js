import { storeData } from "../db/db_store.js";

console.log("WELCOME TO JS");


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".expense-track");
    form.addEventListener("submit", storeData);
     const addBtn = document.querySelector(".add-row");
    addBtn.addEventListener("click", addRow);
});

function addRow(event){
    event.preventDefault();
    const table = document.getElementById("expense-table-body");
    console.log("TABLE:", table); // 👈 ADD THIS

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td><input type="text" name="category"></td>
        <td><input type="number" name="amount"></td>
        <td><input type="text" name="comment"></td>
        <td><input type="date" name="date"></td>
    `;

    table.appendChild(newRow);

}
