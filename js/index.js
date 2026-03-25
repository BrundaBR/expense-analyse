import { storeData } from "../db/db_store.js";
import { current_month_expenses, current_spent_category} from "../db/get_data.js";

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

const ctx = document.getElementById('expense-chart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


const total_amount = document.getElementById("total-amount");
const total = await current_month_expenses();
total_amount.textContent ="Total Spent this month:"+ " "+total;

const category_expenses = await current_spent_category();
console.log("Category expenses:", category_expenses);