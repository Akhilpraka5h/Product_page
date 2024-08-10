// Get references to the main product image and control buttons
let productImg = document.getElementById("product-img");
let btn = document.getElementsByClassName("btn");

// Event handler for the first control button
btn[0].onclick = function () {
  // Change the product image
  productImg.src = "/images/image1.png";

  // Remove 'active' class from all buttons
  for (let bt of btn) {
    bt.classList.remove("active");
  }
  // Add 'active' class to the clicked button
  this.classList.add("active");
};

// Event handler for the second control button
btn[1].onclick = function () {
  // Change the product image
  productImg.src = "/images/image2.png";

  // Remove 'active' class from all buttons
  for (let bt of btn) {
    bt.classList.remove("active");
  }
  // Add 'active' class to the clicked button
  this.classList.add("active");
};

// Event handler for the third control button
btn[2].onclick = function () {
  // Change the product image
  productImg.src = "/images/image3.png";

  // Remove 'active' class from all buttons
  for (let bt of btn) {
    bt.classList.remove("active");
  }
  // Add 'active' class to the clicked button
  this.classList.add("active");
};
