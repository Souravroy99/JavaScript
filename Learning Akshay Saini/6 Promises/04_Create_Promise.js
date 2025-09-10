const cart = ["Pants", "Shirts", "Sharees"]

createOrder(cart)
    .then((orderId) => {
        console.log(orderId);
    })
    .catch((err) => {
        console.log(err.message);
    })




/*********************************************************/

function validateCart(cart) {
    return false
}

function createOrder(cart) {
    const prms = new Promise((resolve, reject) => {
        if(!validateCart(cart)) {
            const err = new Error("Cart is not valid")
            reject(err)
        }

        const orderId = "12345"
        if(orderId) {
            resolve(orderId)
        }
    })

    return prms ;
}