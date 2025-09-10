const cart = ["shoes", "pants", "Kurtas", "sarees"]

// Problem: Callback Hell --> Hard to debug, maintain, read
createOrder(cart, (orderId) => {
    proceesToPayment(orderId, (paymentInfo) => {
        showOrderSummary(paymentInfo, () => {
            updateWalletBalance()
        })
    })
})
 

// Solution: Promise Chaining
createOrder(cart)
    .then((orderId) => proceesToPayment(orderId))
    .then((paymentInfo) => showOrderSummary(paymentInfo))
    .then(() => updateWalletBalance())