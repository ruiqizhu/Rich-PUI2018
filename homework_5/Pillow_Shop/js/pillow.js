// Create the pillow object
function Pillow(name, shape, quantity, color, price, index) {
    this.name = name;
    this.shape = shape;
    this.quantity = quantity;
    this.color = color;
    this.price = price;
    this.index = index;
}

var colors = ["red", "purple", "green", "black", "white"];
var shapes = ["square", "round", "dog", "bunny", "kitty"];
var pillow_names = ["Comfort Pack", "Wild Nature", "Modern Era", "Desert", "Purple Ocean",
             "Home Pillow", "Pillow Pack", "The Galaxy", "Cat Pillow"];
var prices = [16, 15, 12, 22, 20, 20, 22, 25, 20];

$(document).ready(function() {
    // Find the page the user is currently on
    let page_search = new URLSearchParams(window.location.search);
    let index = page_search.get('index');

    // Find the cart and total quantity of cart items
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var items_count = cart.length;
    // Update the number on the cart icon
    $("#items-count").text(items_count);

    // Set attributes for the pillow
    let name = pillow_names[index];
    let shape = "square"; // default value
    let quantity = 1; // default
    let color = "red"; //default
    let price = prices[index];

    // Set the product name, price, and the right image
    $("#product-name").text(name);
    $("#product-price").text("$"+price+".00");
    let img_src = "images/big" + (Number(index)+1) + ".jpg"
    $("#product-img").attr("src", img_src);

    // User selects the color
    $(".color").click(function() {
        color = event.target.value;
        $("#product-img").attr("src", "images/"+color+"2.jpg");
    });

    // User selects the shape
    $(".shape").click(function() {
        shape = event.target.value
    });

    // User adds item to cart
    $("#add-cart").click(function() {
        quantity = parseInt($("#quantity").val());
        console.log(quantity);
        if (quantity > 0) {
            let cart_items = new Pillow(name, shape, quantity, color, price, index);
            cart.push(cart_items);
            // save the new cart and count to logal storage
            localStorage.setItem("cart", JSON.stringify(cart));
            window.location.href="cart.html";
        }
        else {
            alert("Select a positive quantity");
        }
    });


});

