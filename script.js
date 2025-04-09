// script.js

// ===== DOM Elements =====
const smoothieForm = document.getElementById('smoothieForm');
const outputDiv = document.getElementById('output');
const nameInput = document.getElementById('name');
const baseSelect = document.getElementById('base');
const sweetenerSelect = document.getElementById('sweetener');
const toppingSelect = document.getElementById('toppings');
const fruitCheckboxes = document.querySelectorAll('input[type=checkbox]');

// ===== Smoothie Class =====
class Smoothie {
  constructor(name, base, fruits, sweetener, topping) {
    this.name = name;
    this.base = base;
    this.fruits = fruits;
    this.sweetener = sweetener;
    this.topping = topping;
  }

  // Method to generate description
  describe() {
    return `
      <h2>🍹 Smoothie for ${this.name}</h2>
      <ul>
        <li><strong>Base:</strong> ${this.base}</li>
        <li><strong>Fruits:</strong> ${this.fruits.join(', ')}</li>
        <li><strong>Sweetener:</strong> ${this.sweetener}</li>
        <li><strong>Topping:</strong> ${this.topping}</li>
      </ul>
      <p>Enjoy your healthy and tasty drink! 😄</p>
    `;
  }
}

// ===== Handle Form Submission =====
smoothieForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page refresh

  // Get all selected fruits
  const selectedFruits = [];
  fruitCheckboxes.forEach(fruit => {
    if (fruit.checked) {
      selectedFruits.push(fruit.value);
    }
  });

  // Validation: at least one fruit
  if (selectedFruits.length === 0) {
    alert('Please select at least one fruit!');
    return;
  }

  // Create Smoothie object
  const smoothie = new Smoothie(
    nameInput.value,
    baseSelect.value,
    selectedFruits,
    sweetenerSelect.value,
    toppingSelect.value
  );

  // Display output
  outputDiv.innerHTML = smoothie.describe();
  outputDiv.style.display = 'block';
});
