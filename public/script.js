
const itemsContainer = document.getElementById('items-container');
const form = document.getElementById('item-form');
const message = document.getElementById('message');

// Fetch and display all items
async function loadItems() {
    try {
        const response = await fetch('/items');
        const items = await response.json();

        itemsContainer.innerHTML = '';

        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'item';

            div.innerHTML = `
                <strong>${item.name}</strong>
                <p>Price: ₹${item.price}</p>
                <p>Available: ${item.available ? 'Yes' : 'No'}</p>
                <p>ID: ${item.id}</p>
            `;

            itemsContainer.appendChild(div);
        });
    } catch (error) {
        message.textContent = 'Failed to load items';
    }
}

// Handle form submission
form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const price = Number(document.getElementById('price').value);
    const available = document.getElementById('available').checked;

    const newItem = {
        name,
        price,
        available
    };

    try {
        const response = await fetch('/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        });

        const result = await response.json();

        if (!response.ok) {
            message.textContent = result.error;
            return;
        }

        message.textContent = 'Item added successfully!';

        form.reset();

        loadItems();
    } catch (error) {
        message.textContent = 'Failed to add item';
    }
});

// Load items when page opens
loadItems();
