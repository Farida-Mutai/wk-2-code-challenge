document.addEventListener('DOMContentLoaded', function() {
    const itemInput = document.getElementById('itemInput');
    const addItemBtn = document.getElementById('addItemBtn');
    const itemList = document.getElementById('itemList');
    const markPurchasedBtn = document.getElementById('markPurchasedBtn');
    const clearListBtn = document.getElementById('clearListBtn');

    // Array to store shopping list items
    let shoppingList = [];

    // Function to render items in the list
    function renderList() {
        itemList.innerHTML = ''; // Clear existing list
        shoppingList.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            li.className = 'item';
            li.dataset.index = index; // Store index for reference
            itemList.appendChild(li);
        });
    }

    // Add item to shopping list
    addItemBtn.addEventListener('click', function() {
        const newItem = itemInput.value.trim();
        if (newItem !== '') {
            shoppingList.push(newItem);
            renderList();
            itemInput.value = ''; // Clear input field
        }
    });

    // Mark item as purchased
    itemList.addEventListener('click', function(event) {
        if (event.target.classList.contains('item')) {
            const index = event.target.dataset.index;
            event.target.classList.toggle('purchased');
        }
    });

    // Mark all items as purchased
    markPurchasedBtn.addEventListener('click', function() {
        const items = itemList.querySelectorAll('.item');
        items.forEach(item => item.classList.add('purchased'));
    });

    // Clear shopping list
    clearListBtn.addEventListener('click', function() {
        shoppingList = []; // Clear the array
        renderList(); // Clear the displayed list
    });
});
