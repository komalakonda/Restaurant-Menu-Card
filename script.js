let cards = document.querySelectorAll(".card");
let orders = 0;
let grandTotal = 0;

cards.forEach(function(card){

    let quantity = 0;

    let plus = card.querySelector(".plus");
    let minus = card.querySelector(".minus");
    let quantityElement = card.querySelector(".Quantity");
    let orderButton = card.querySelector(".orderbutton");
    let priceElement = card.querySelector(".price");

    plus.addEventListener("click", function () {
        quantity++;
        quantityElement.textContent = quantity;
    });

    minus.addEventListener("click", function () {
        if (quantity > 0) {
            quantity--;
            quantityElement.textContent = quantity;
        }
    });

    orderButton.addEventListener("click", function () {

        if (quantity === 0) {
            alert("Please select quantity first!");
            return;
        }

        let price = Number(priceElement.textContent.replace("price:₹", ""));

        grandTotal += price * quantity;
        document.querySelector("total").textContent = "Total: ₹" + grandTotal;

        orders += quantity;
        document.getElementById("orders").textContent = "Orders: " + orders;

        orderButton.textContent = "Ordered";
        orderButton.disabled = true;
    });

});

let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function () {

    if (orders === 0) {
        alert("Please order at least one item!");
        return;
    }

    let message = document.getElementById("message");
    message.textContent = "✅ Order placed successfully!";

    setTimeout(function () {
        message.textContent = "🙏 Thank you for your order!";
    }, 2000);

    submitButton.textContent = "Submitted";
    submitButton.disabled = true;
});