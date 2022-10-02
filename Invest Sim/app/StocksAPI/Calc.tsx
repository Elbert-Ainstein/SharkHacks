export function displayPrice(price: Number) {
    if (price != null) {
        const quantity = prompt("Enter a quantity");
        const finalPrice = Number(price) * Number(quantity);
        alert(finalPrice);
    }
    
}