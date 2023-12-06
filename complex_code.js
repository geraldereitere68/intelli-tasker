/* 
Filename: complex_code.js
Description: This complex code demonstrates a full-featured e-commerce store management system with various functionalities including product listing, cart management, order processing, and inventory management. The code is written in JavaScript and utilizes object-oriented programming concepts.
*/

// Define class for Product
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotal() {
    return this.price * this.quantity;
  }
}

// Define class for Cart
class Cart {
  constructor() {
    this.products = [];
  }

  addToCart(product) {
    this.products.push(product);
  }

  removeFromCart(product) {
    const index = this.products.findIndex(
      (p) => p.name === product.name && p.price === product.price
    );
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  getTotal() {
    let total = 0;
    this.products.forEach((product) => {
      total += product.calculateTotal();
    });
    return total;
  }
}

// Define class for Order
class Order {
  constructor(customer, cart) {
    this.customer = customer;
    this.cart = cart;
    this.orderDate = new Date();
  }

  getOrderSummary() {
    let summary = `Order Summary for ${this.customer}\n`;
    summary += `Order Date: ${this.orderDate.toDateString()}\n`;
    summary += `Total Amount: $${this.cart.getTotal()}\n`;
    return summary;
  }

  processOrder() {
    // Perform order processing logic here
    console.log("Processing order...");
    console.log(this.getOrderSummary());
    console.log("Payment processed successfully!");
    console.log("Shipping to customer...");
  }
}

// Define class for Inventory
class Inventory {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const index = this.products.findIndex(
      (p) => p.name === product.name && p.price === product.price
    );
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  searchProductByName(name) {
    return this.products.filter((product) => product.name === name);
  }

  searchProductByPrice(price) {
    return this.products.filter((product) => product.price === price);
  }
}

// Example usage:

// Create products
const product1 = new Product("Product A", 10, 2);
const product2 = new Product("Product B", 15, 3);
const product3 = new Product("Product C", 20, 1);

// Create cart
const cart = new Cart();

// Add products to cart
cart.addToCart(product1);
cart.addToCart(product2);
cart.addToCart(product3);

// Create order
const order = new Order("John Doe", cart);

// Process order
order.processOrder();

// Create inventory
const inventory = new Inventory();

// Add products to inventory
inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

// Remove product from inventory
inventory.removeProduct(product2);

// Search product by name
const searchResults = inventory.searchProductByName("Product A");
console.log("Search Results:", searchResults); 

// Search product by price
const searchResults2 = inventory.searchProductByPrice(20);
console.log("Search Results:", searchResults2);