const item = document.querySelectorAll(".cart-item");
const subtotal = document.getElementsByClassName("subtotal");
const shipping = document.getElementsByClassName("shipping");
const total = document.getElementsByClassName("total");

function updateCart() {
    let subtotal = 0;
}

item.forEach(item => {
    const price = parseFloat(item.dataset.price);
    const quantity = parseInt(item.querySelector(".quantity").innerHTML);
    const itemTotal = price * quantity;
    item.querySelector(".item-total").innerHTML = "$" + itemTotal.toFixed(0);
    subtotal += itemTotal;
});

subtotal.innerHTML = subtotal.toFixed(0);
const shippingEL = parseFloat(shippingEL.innerHTML);
total.innerHTML = (subtotal + shipping).toFixed(0);


item.forEach(item => {
    const plusbtn = item.querySelector(".plus");
    const minusbtn = item.querySelector(".minus");
    const quantity = item.querySelector(".quantity");

    plusbtn.addEventListener("click", () => {
        let qty = parseInt(quantity.innerHTML);
        quantity.innerHTML=qty + 1;
        updateCart();

    });

        minusbtn.addEventListener("click", () => {
        let qty = parseInt(quantity.innerHTML);
        if (qty > 1) {
        quantity.innerHTML=qty - 1;
        updateCart();
        }
    });


});

updateCart();



