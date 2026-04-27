// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('SW Registered'))
            .catch(err => console.log('SW Registration Failed', err));
    });
}

// Mock Product Data
const products = [
    { id: 1, name: "Wireless Headphones", price: "$99" },
    { id: 2, name: "Smart Watch", price: "$199" },
    { id: 3, name: "Bluetooth Speaker", price: "$49" }
];

const container = document.getElementById('product-list');

products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <button>Add to Cart</button>
    `;
    container.appendChild(card);
});