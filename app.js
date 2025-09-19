"use strict";

const cart = document.getElementById("cart");
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");
let itemQty;
let price;
let currentPrice;

const cartItems = [
    {
        title: "Veloria Face Cleanser",
        description: "for gentle hydration",
        image: "./images/Free-Square-Cosmetic-Dropper-with-Paper-Tube-Packaging-Mockup.jpg",
        quantity: "2",
        price: "$75.00"
    },
    {
        title: "Face Toner",
        description: "alpha arbutin face toner for oily skin",
        image: "./images/free-Medicine-Bottle-Mockup.jpg",
        quantity: "4",
        price: "$64.00"
    },
    {
        title: "veloria ointment",
        description: "for skin treatment",
        image: "./images/Free-Cosmetic-Tube-on-Cube-Mockup.jpg",
        quantity: "5",
        price: "$25.99"
    },
    {
        title: "Shower Gel",
        description: "for even and smooth skin",
        image: "./images/Free-White-Cosmetic-Bottle-Mockup.jpg",
        quantity: "8",
        price: "$77.00"
    },
    {
        title: "Vitamin B Serum",
        description: "For Acne and Hyperpigmentation",
        image: "./images/Free-Square-Cosmetic-Dropper-with-Paper-Tube-Packaging-Mockup.jpg",
        quantity: "10",
        price: "$45.00"
    },
];

function handlePlusBtn(index) {
    alert('Hello');
    // itemQty = parseInt(itemQty) + 1;
    // currentPrice = parseFloat(formattedPrice) * parseInt(itemQty);
    // document.getElementById("item-qty-value" + index).innerHTML;
    // document.querySelector(".item-price").innerHTML = currentPrice;
}

function handdleMinusBtn(index) {
    itemQty = parseInt(itemQty) - 1;
    if (itemQty < 0) itemQty = 0;

    let origialPrice = parseFloat(formattedPrice);
    let newPrice = 0;
    if (itemQty === 0) {
        newPrice = 0;
    } else {
        newPrice = parseFloat(currentPrice) - parseFloat(origialPrice);
    }
    document.querySelector(".item-price").innerHTML = "$" + newPrice.toFixed(2);
    document.getElementById("item-qty-value" + index).innerHTML = itemQty;
    currentPrice = newPrice;
}


cartItems.map((cartItem, index) => {
    console.log(itemQty)
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add('cart-item');

    const cartItemImgDiv = document.createElement("div");
    cartItemImgDiv.classList.add('item-img');

    const cartItemImg = document.createElement('img');
    cartItemImg.src = cartItem.image;
    cartItemImg.alt = cartItem.title;

    const cartItemDescription = document.createElement("div");
    cartItemDescription.classList.add('item-name');
    const title = document.createElement("h3")
    title.innerText = cartItem.title
    cartItemDescription.appendChild(title)
    const des = document.createElement("p")
    des.innerText = cartItem.description
    cartItemDescription.appendChild(des)

    const cartItemQtyDiv = document.createElement('div');
    cartItemQtyDiv.classList.add('item-qty');
    const itemQtyPlusButton = document.createElement('button');
    itemQtyPlusButton.type = 'button';
    itemQtyPlusButton.classList.add('plus-btn');
    itemQtyPlusButton.id = 'plus-btn' + index;
    itemQtyPlusButton.innerText = '+';
    itemQtyPlusButton.addEventListener('click', function () {
        itemQty = document.getElementById("item-qty-value" + index).innerHTML;
        itemQty = parseInt(itemQty) + 1;
        price = cartItem.price;
        let formattedPrice = price.slice(1);
        currentPrice = parseFloat(formattedPrice) * parseInt(itemQty);
        console.log(currentPrice);
        console.log(itemQty);
        document.getElementById("item-qty-value" + index).innerHTML = itemQty;
        document.getElementById("item-price" + index).innerHTML = '$' + currentPrice.toFixed(2);
    })
    cartItemQtyDiv.appendChild(itemQtyPlusButton);

    const itemQtyInp = document.createElement('p');
    itemQtyInp.id = 'item-qty-value' + index;
    itemQtyInp.innerHTML = cartItem.quantity
    cartItemQtyDiv.appendChild(itemQtyInp);

    const itemQtyMinusButton = document.createElement('button');
    itemQtyMinusButton.type = 'button';
    itemQtyMinusButton.classList.add('minus-btn');
    itemQtyMinusButton.id = 'minus-btn' + index;
    itemQtyMinusButton.innerText = '-';
    itemQtyMinusButton.addEventListener('click', function () {
        itemQty = parseInt(itemQty) - 1;
        if (itemQty < 0) itemQty = 0;

        price = cartItem.price;
        if (isNaN(currentPrice)) {
            currentPrice = document.getElementById('item-price' + index).innerHTML;
        }
        
        // currentPrice = parseFloat(currentPrice.slice(1));
        console.log(currentPrice);
        
        let formattedPrice = price.slice(1);
        let origialPrice = parseFloat(formattedPrice);
        let newPrice = 0;
        if (itemQty === 0) {
            newPrice = 0;
        } else {
            newPrice = parseFloat(currentPrice.slice(1)) - parseFloat(origialPrice);
        }
        document.getElementById("item-price" + index).innerHTML = "$" + newPrice.toFixed(2);
        document.getElementById("item-qty-value" + index).innerHTML = itemQty;
        currentPrice = newPrice;
    });
    cartItemQtyDiv.appendChild(itemQtyMinusButton);

    const cartItemPriceDiv = document.createElement('div');
    cartItemPriceDiv.classList.add('item-price');
    cartItemPriceDiv.id = 'item-price' + index
    let cart_price = parseFloat(cartItem.price.slice(1)) * parseFloat(cartItem.quantity);
    cartItemPriceDiv.innerHTML = '$' + cart_price.toFixed(2)

    document.getElementById('cart').appendChild(cartItemDiv);
    cartItemImgDiv.appendChild(cartItemImg);
    cartItemDiv.appendChild(cartItemImgDiv);
    cartItemDiv.appendChild(cartItemDescription);
    cartItemDiv.appendChild(cartItemQtyDiv);
    cartItemDiv.appendChild(cartItemPriceDiv);
});