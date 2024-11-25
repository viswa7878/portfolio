const cart = ["one", "two", "three"];

// Define createOrder to handle both callback and promise use
function createOrder(cart,  function(orderid) {
    proceedToPayment(orderid);

});

// Call createOrder with a callback function
createOrder(cart),function();
