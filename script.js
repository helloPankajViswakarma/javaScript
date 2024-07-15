function addItem() {
    const input = document.getElementById('itemInput');
    const itemText = input.value.trim();

    if (itemText !== '') {
        const li = document.createElement('li');
        li.textContent = itemText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            li.remove();
        };

        li.appendChild(deleteButton);
        document.getElementById('itemList').appendChild(li);

        input.value = '';
    }
}
