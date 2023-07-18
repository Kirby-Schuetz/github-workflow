const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// colculate the price with a subscription 25%
// calculating for the price with a coupon $10
// grand total function

// 1. declare a function parameters of function 
//      write conditional
//      if subscription is true then return 25% off retail total
//      else return retail total
// 2. declare a func (customer)
//      if subscription is true then return $10 off retail total
//      else return retail total
function withSub(customer) {
    let total = customer.pricePerRefill * customer.refills;
    if (customer.subscription) {
        const discountedCost = total * .75
        return discountedCost;
    }
    return total;
}
const newTotal = withSub(rocky)
console.log(newTotal)

function withCoupon(customer) {
    if (customer.coupon) {
        const couponDiscount = newTotal - 10
        return couponDiscount;
    }
    return newTotal;
}
    const newTotal2 = withCoupon(rocky)
    console.log(newTotal2)

    
console.log(`Your grand total is $${newTotal2}`)