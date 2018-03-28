$(document).ready(function() {
    console.log("I am here");
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
    var items_count = JSON.parse(localStorage.getItem("count")) || 0;
    var subtotal = 0;
    var cart_size = cart.length;
    if (cart.length == 0) {
        $("#cart-content").append("<h2>There are no items in the cart currently");
    }
    else {
        for (let i = 0; i < cart.length; i++) {
            let item = cart[i];
            subtotal += item.price * item.quantity;
            let img_src = "images/big" + (Number(i)+1) + ".jpg";
            $("#cart-content").append("<div id='cart-content'><div id='product_detail'>"+
             "<div id='first'><img src='" + img_src + "'></div><div id='second'>"+
             "<p><strong>"+item.name+"</strong></p>"+
             "Shape:"+item.shape + "<br />Quantity:" +item.quantity +
             "<br />Color: "+item.color+" <br />Price:<span>$"+item.price +
             ".00</span><br /><button class='button'>Delete</button></div></div>");

        }
    }
});