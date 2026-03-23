import { storeData } from "../db/db_store.js";

console.log("WELCOME TO JS");


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".expense-track");
    form.addEventListener("submit", storeData);
});