$(document).ready(function() {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var subtotal = 0;
    var cart_size = cart.length;
    if (cart.length == 0) {
        $("#cart-content").append("<h2>There are no items in the cart currently");
    }
    else {
        for (let i = 0; i < cart.length; i++) {
            let item = cart[i];
            subtotal += item.price * item.quantity;
            let img_src = "images/big" + (Number(item.index)+1) + ".jpg";
            $("#cart-content").append("<div id='cart-"+i+"'><div id='product_detail'>"+
             "<div id='first'><img src='" + img_src + "'></div><div id='second'>"+
             "<p><strong>"+item.name+"</strong></p>"+
             "Shape:"+item.shape + "<br />Quantity:" +item.quantity +
             "<br />Color: "+item.color+" <br />Price:<span>$"+item.price +
             ".00</span><br /><button class='button del-item'id='"+i+"'>Delete</button></div></div></div>");
        }

    }
    $("#subtotal").text("$"+subtotal+".00")

    // delete the item
    $(".del-item").click(function() {
        let index = Number(event.target.id);
        let item = cart[index];
        console.log("#cart-"+index);
        $("#cart-"+index).remove();
        $("#subtotal").text("$"+(subtotal-item.price*item.quantity)+".00");
        cart.splice(index, 1);
        // Update local storage
        localStorage.setItem("cart", JSON.stringify(cart));

    });
});