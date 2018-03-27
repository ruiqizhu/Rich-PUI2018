// Create the pillow object
function Pillow(name, shape, quantity, color, price) {
    this.name = name
    this.shape = shape
    this.quantity = quantity
    this.color = color
    this.price = price
}

var cart = [];
var colors = ["red", "purple", "green", "black", "white"];
var shapes = ["square", "round", "dog", "bunny", "kitty"];
var pillow_names = ["Comfort Pack", "Wild Nature", "Modern Era", "Desert", "Purple Ocean",
             "Home Pillow", "Pillow Pack", "The Galaxy", "Cat Pillow"];

$(document).ready(function() {
    let name = null;
    let shape = null;
    let quantity = null;
    let color = null;
    let price = null;

    $(".color").click(function() {
        color = event.target.value;
    });

    $(".shape").click(function() {
        shape = event.target.value
    });

    $("#add-cart").click(function() {
        quantity = $("#quantity").val();
        alert($("#quantity").val());
    });


});

