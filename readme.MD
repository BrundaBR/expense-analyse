# 🧾 Expense Tracker with Charts (Vanilla JS)
## 🎯 Project Goal
Build a personal finance tracker where users can:
Add income & expenses
Categorize spending
See monthly insights using charts
Convert expenses into different currencies using APIs
Persist data (no backend needed initially)

## 🧩 Core Features (Phase-wise)
### Phase 1: Basic Expense Tracking

Add data for expenditure of cuurent month
View transaction list
Show balance, total income, total expense

## 📌 Data Model
save it in mongodb
```
{
  id: "uuid",
  type: "expense" | "income",
  category: "Food",
  amount: 250,
  currency: "INR",
  date: "2026-01-20",
  note: "Lunch"
}
```

## Phase 2: Charts & Analytics

Monthly expense breakdown - historical , Overspent underspent on each category
Category-wise pie chart
Income vs Expense bar chart

## 📊 Charts

Chart.js (no framework)
Data computed dynamically from transactions


## Phase 3: Currency Conversion (API Usage)

Convert all transactions to a base currency
Show totals in selected currency (INR/USD/EUR)

## 🌐 API
ExchangeRate API
Open Exchange Rates
FreeCurrencyAPI

## Phase 4: Persistence

Save data in localStorage and mongodb

# 🔌 APIs Used
1️⃣ Currency Exchange API

Example:

GET https://api.exchangerate-api.com/v4/latest/INR


Response:

{
  "rates": {
    "USD": 0.012,
    "EUR": 0.011
  }
}

## 🔄 Async Flow (Important Interview Topic)
async function convertAmount(amount, from, to) {
  
}


