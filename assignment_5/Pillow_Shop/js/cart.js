$(document).ready(function() {
    // Finding cart in local storage
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var subtotal = 0;
    var cart_size = cart.length;
    // Show message when there are no items in cart
    if (cart.length == 0) {
        $("#cart-content").append("<h2>There are no items in the cart currently");
    }
    else {
        // List all items in cart in order
        for (let i = 0; i < cart.length; i++) {
            let item = cart[i];
            subtotal += item.price * item.quantity;
            let img_src = "images/big" + (Number(item.index)+1) + ".jpg";
            // Inject HTML to display the items
            $("#cart-content").append("<div id='cart-"+i+"'><div id='product_detail'>"+
             "<div id='first'><img src='" + img_src + "'></div><div id='second'>"+
             "<p><strong>"+item.name+"</strong></p>"+
             "Shape:"+item.shape + "<br />Quantity:" +item.quantity +
             "<br />Color: "+item.color+" <br />Price:<span>$"+item.price +
             ".00</span><br /><button class='button del-item'id='"+i+"'>Delete</button></div></div></div>");
        }

    }
    // Show the subtotal
    $("#subtotal").text("$"+subtotal+".00")

    // delete the item
    $(".del-item").click(function() {
        let index = Number(event.target.id);
        let item = cart[index];
        console.log("#cart-"+index);
        $("#cart-"+index).remove();
        // Update subtotal & item count
        $("#subtotal").text("$"+(subtotal-item.price*item.quantity)+".00");
        // Update cart array and item count
        cart.splice(index, 1);
        $("#items-count").text(cart.length);
        // Update local storage
        localStorage.setItem("cart", JSON.stringify(cart));

    });
});