import { storeData } from "../db/db_store.js";
import { current_month_expenses, current_spent_category} from "../db/get_data.js";

console.log("WELCOME TO JS");


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".expense-track");
    form.addEventListener("submit", storeData);
     const addBtn = document.querySelector(".add-row");
    addBtn.addEventListener("click", addRow);
    const monthSelect = document.getElementById("month-select");
    monthSelect.addEventListener("change", handleMonthChange);
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
async function handleMonthChange(event){
  let categroy_spend_chart = null;
  const user_selected_month = document.getElementById("month-select").value;
  const category_expenses = await current_spent_category(Number(user_selected_month));

  const ctx = document.getElementById('expense-chart');

    if (categroy_spend_chart !== null) {
    categroy_spend_chart.destroy();
  }
  categroy_spend_chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(category_expenses),
        datasets: [{
          label: '# of Votes',
          data: Object.values(category_expenses),
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

}
const total_amount = document.getElementById("total-amount");
const total = await current_month_expenses();
total_amount.textContent ="Total Spent this month:"+ " "+total;

