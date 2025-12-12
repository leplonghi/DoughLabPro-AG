const Stripe = require('stripe');
// User provided secret key
const stripe = new Stripe('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', {
    apiVersion: '2023-10-16'
});

async function listPrices() {
    try {
        const prices = await stripe.prices.list({
            limit: 10,
            expand: ['data.product']
        });

        if (prices.data.length === 0) {
            console.log("No prices found.");
            return;
        }

        console.log("Found prices:");
        prices.data.forEach(price => {
            const product = price.product;
            const productName = typeof product === 'string' ? product : product.name;
            console.log(`Product: ${productName} | Price ID: ${price.id} | Amount: ${price.unit_amount / 100} ${price.currency}`);
        });
    } catch (error) {
        console.error("Error listing prices:", error);
    }
}

listPrices();
