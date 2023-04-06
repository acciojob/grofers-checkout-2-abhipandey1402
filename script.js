//your code here
// Get all the price cells in the table
const priceCells = document.querySelectorAll('td[data-ns-test="prices"]');

// Calculate the total price by adding up all the prices
let totalPrice = 0;
priceCells.forEach(cell => {
  totalPrice += parseFloat(cell.textContent);
});

// Add the total price to the grand total cell in the table
const grandTotalCell = document.querySelector('td[data-ns-test="grandTotal"]');
grandTotalCell.textContent = totalPrice.toFixed(2);
