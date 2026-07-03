// Function Declaration - Calculate Food Bill
function calculateFoodBill(foodCost) {
    return foodCost;
}

// Function Expression - Calculate GST (18%)
const calculateGST = function(foodCost) {
    return foodCost * 0.18;
};

// Arrow Function - Calculate Delivery Charge
const calculateDeliveryCharge = (foodCost) => {
    return foodCost >= 500 ? 0 : 50;
};

// Final Function
function generateBill(foodCost) {
    let billAmount = calculateFoodBill(foodCost);
    let gst = calculateGST(billAmount);
    let deliveryCharge = calculateDeliveryCharge(billAmount);
    let totalBill = billAmount + gst + deliveryCharge;

    return {
        foodCost: billAmount,
        gst: gst,
        deliveryCharge: deliveryCharge,
        totalBill: totalBill
    };
}

// Food Cost = ₹500
let bill = generateBill(500);

console.log("Food Cost: ₹" + bill.foodCost);
console.log("GST (18%): ₹" + bill.gst);
console.log("Delivery Charge: ₹" + bill.deliveryCharge);
console.log("Total Bill: ₹" + bill.totalBill);