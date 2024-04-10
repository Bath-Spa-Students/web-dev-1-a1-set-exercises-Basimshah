

document.addEventListener('DOMContentLoaded', function() {
    var calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', calculateTotalCost);
});

function calculateTotalCost() {
    var petrolCost = parseFloat(document.getElementById('petrolCost').value) || 1.72;
    var litersPurchased = parseFloat(document.getElementById('litersPurchased').value) || 0;
    var totalCost = petrolCost * litersPurchased;
    document.getElementById('totalCost').innerText = 'Total Cost: $' + totalCost.toFixed(2);
}
