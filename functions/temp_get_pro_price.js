const Stripe = require('stripe');
const stripe = new Stripe('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', {
    apiVersion: '2023-10-16'
});

async function getProPrice() {
    try {
        const prices = await stripe.prices.list({
            limit: 20,
            expand: ['data.product']
        });

        const proPrice = prices.data.find(p => {
            const name = (typeof p.product === 'string' ? '' : p.product.name).toLowerCase();
            return name.includes('pro') || name.includes('doughlab');
        });

        if (proPrice) {
            console.log("PRICE_ID_FOUND:" + proPrice.id);
        } else {
            console.log("PRICE_NOT_FOUND");
            // Fallback: list all
            console.log("ALL_PRICES:");
            prices.data.forEach(p => console.log(p.id));
        }

    } catch (error) {
        console.error("Error:", error);
    }
}

getProPrice();
