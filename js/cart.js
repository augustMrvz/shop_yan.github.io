// Инициализация корзины из localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Обновление корзины
function updateCart() {
  const countEl = document.getElementById("cart-count");
  const listEl = document.getElementById("cart-list");
  const totalEl = document.getElementById("total-price");

  countEl.textContent = cart.length;

  if (listEl) {
    listEl.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ${item.price} руб.`;
      listEl.appendChild(li);
      total += item.price;
    });

    totalEl.textContent = total;
  }
}

// Добавление товара в корзину
function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}